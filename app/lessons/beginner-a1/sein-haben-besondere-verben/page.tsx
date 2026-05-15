'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';

interface TableData {
  headers: string[];
  rows: string[][];
}

interface Example {
  verb?: string;
  meaning?: string;
  example?: string;
  german?: string;
  english?: string;
}

interface SectionContent {
  table?: TableData;
  examples?: Example[];
  note?: string;
}

interface Section {
  id: string;
  title: string;
  description: string;
  content: SectionContent;
}

interface LessonData {
  title: string;
  subtitle: string;
  sections: Section[];
}

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'jp', name: '日本語', flag: '🇯🇵' },
  { code: 'kr', name: '한국어', flag: '🇰🇷' },
  { code: 'my', name: 'မြန်မာ', flag: '🇲🇲' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
];

export default function SeinHabenBesondereVerbenLesson() {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState('en');
  const [lessonData, setLessonData] = useState<LessonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  useEffect(() => {
    fetchLessonData(selectedLang);
  }, [selectedLang]);

  const fetchLessonData = async (lang: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/json_files/a1_sein_haben_besondere_verben_${lang}.json`);
      const data = await response.json();
      setLessonData(data);
    } catch (error) {
      console.error('Error loading lesson data:', error);
    } finally {
      setLoading(false);
    }
  };

  const selectedLanguage = languages.find(l => l.code === selectedLang);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-300/40 via-white to-orange-300/40">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300/40 via-white to-orange-300/40">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.push('/lessons/beginner-a1')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Beginner A1</span>
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/80 transition"
            >
              <Globe size={18} />
              <span className="mr-1">{selectedLanguage?.flag}</span>
              <span>{selectedLanguage?.name}</span>
            </button>

            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl border border-white/30 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang.code);
                      setShowLangDropdown(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50/80 transition first:rounded-t-xl last:rounded-b-xl ${
                      selectedLang === lang.code ? 'bg-blue-50/80' : ''
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-2xl">🔧</span>
            <span className="text-sm font-medium text-orange-700">Topic 3 of 20</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            {lessonData?.title}
          </h1>
          <p className="text-slate-600 text-lg">
            {lessonData?.subtitle}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {lessonData?.sections?.map((section) => (
            <div
              key={section.id}
              className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {section.title}
              </h2>
              <p className="text-slate-600 mb-6">{section.description}</p>

              {/* Table Content */}
              {section.content.table && (
                <div className="overflow-x-auto mb-6">
                  <table className="w-full bg-white/50 rounded-xl overflow-hidden">
                    <thead className="bg-orange-100">
                      <tr>
                        {section.content.table.headers.map((header, i) => (
                          <th key={i} className="px-4 py-3 text-left font-bold text-slate-700">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.content.table.rows.map((row, i) => (
                        <tr key={i} className="border-t border-white/30">
                          {row.map((cell, j) => {
                            const isGermanExample = j === 3 && cell.includes('('); // Example column
                            const isGermanVerb = j >= 1 && j <= 4 && cell.length > 0 && !cell.includes('('); // Verb columns
                            return (
                              <td key={j} className="px-4 py-3 text-slate-700">
                                {isGermanExample ? (
                                  <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                      <span className="font-medium">{cell.split('(')[0].trim()}</span>
                                      <button
                                        onMouseEnter={() => playGermanText(cell.split('(')[0].trim())}
                                        onClick={(e: React.MouseEvent) => {
                                          e.stopPropagation();
                                          playGermanText(cell.split('(')[0].trim());
                                        }}
                                        className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition"
                                      >
                                        <Volume2 size={12} className="text-orange-600" />
                                      </button>
                                    </div>
                                    <span className="text-sm text-slate-500">({cell.split('(')[1]}</span>
                                  </div>
                                ) : isGermanVerb ? (
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-orange-700">{cell}</span>
                                    <button
                                      onMouseEnter={() => playGermanText(cell)}
                                      onClick={(e: React.MouseEvent) => {
                                        e.stopPropagation();
                                        playGermanText(cell);
                                      }}
                                      className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition"
                                    >
                                      <Volume2 size={12} className="text-orange-600" />
                                    </button>
                                  </div>
                                ) : (
                                  cell
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Note */}
              {section.content.note && (
                <div className="mb-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <p className="text-sm text-amber-800">📝 {section.content.note}</p>
                </div>
              )}

              {/* Examples */}
              {section.content.examples && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.content.examples.map((example, i) => (
                    <div key={i} className="bg-white/50 rounded-xl p-4">
                      {example.verb && (
                        <p className="text-sm font-bold text-orange-600 mb-2">{example.verb}</p>
                      )}
                      {example.meaning && (
                        <p className="text-sm text-slate-600 mb-2">{example.meaning}</p>
                      )}
                      {example.german && (
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-slate-900">{example.german}</p>
                          <button
                            onMouseEnter={() => playGermanText(example.german || '')}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(example.german || '');
                            }}
                            className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition"
                          >
                            <Volume2 size={16} className="text-orange-600" />
                          </button>
                        </div>
                      )}
                      {example.example && (
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-slate-900">{example.example}</p>
                          <button
                            onMouseEnter={() => playGermanText(example.example || '')}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(example.example || '');
                            }}
                            className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition"
                          >
                            <Volume2 size={16} className="text-orange-600" />
                          </button>
                        </div>
                      )}
                      {example.english && (
                        <p className="text-sm text-slate-600">{example.english}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

