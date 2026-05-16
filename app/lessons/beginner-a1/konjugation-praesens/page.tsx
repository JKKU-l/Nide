'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';
import ResponsiveTable from '@/components/responsive-table';

interface TableData {
  headers: string[];
  rows: string[][];
}

interface Dialogue {
  speaker: string;
  german: string;
  english: string;
  tip?: string;
}

interface Example {
  german: string;
  english: string;
  note?: string;
}

interface SectionContent {
  table?: TableData;
  dialogues?: Dialogue[];
  examples?: Example[];
  guidelines?: any[];
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

export default function KonjugationPraesensLesson() {
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
      const response = await fetch(`/json_files/a1_konjugation_praesens_${lang}.json`);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-2xl">📝</span>
            <span className="text-sm font-medium text-green-700">Topic 2 of 20</span>
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
                <div className="mb-6">
                  <ResponsiveTable
                    headers={section.content.table.headers}
                    rows={section.content.table.rows.map((row) =>
                      row.map((cell, j) => {
                        const isGermanWord = j === 2 && cell.length > 0;
                        if (isGermanWord) {
                          return (
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-green-700">{cell}</span>
                              <button
                                onMouseEnter={() => playGermanText(cell)}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(cell);
                                }}
                                className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                              >
                                <Volume2 size={12} className="text-green-600" />
                              </button>
                            </div>
                          );
                        }
                        return cell;
                      })
                    )}
                    themeColor="green"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}

              {/* Dialogues */}
              {section.content.dialogues && (
                <div className="bg-white/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">💬 Conversation Practice</h3>
                  <div className="space-y-4">
                    {section.content.dialogues.map((dialogue, i) => (
                      <div key={i} className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                        <div className="flex items-start justify-between mb-2">
                          <span className="font-bold text-green-700">{dialogue.speaker}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-lg font-medium text-slate-900">{dialogue.german}</p>
                          <button
                            onMouseEnter={() => playGermanText(dialogue.german)}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(dialogue.german);
                            }}
                            className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                          >
                            <Volume2 size={16} className="text-green-600" />
                          </button>
                        </div>
                        <p className="text-sm text-slate-600 italic">{dialogue.english}</p>
                        {dialogue.tip && (
                          <div className="mt-2 p-2 bg-amber-50 rounded-lg text-sm text-amber-800">
                            💡 {dialogue.tip}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Examples */}
              {section.content.examples && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.content.examples.map((example, i) => (
                    <div key={i} className="bg-white/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-slate-900">{example.german}</p>
                        <button
                          onMouseEnter={() => playGermanText(example.german)}
                          onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            playGermanText(example.german);
                          }}
                          className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                        >
                          <Volume2 size={16} className="text-green-600" />
                        </button>
                      </div>
                      <p className="text-sm text-slate-600">{example.english}</p>
                      {example.note && (
                        <div className="mt-2 p-2 bg-blue-50 rounded-lg text-sm text-blue-800">
                          📝 {example.note}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Guidelines */}
              {section.content.guidelines && (
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">💡 Pro Tips</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.content.guidelines.map((guideline, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border border-amber-200">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 rounded text-xs font-bold bg-amber-200 text-amber-800">
                            {guideline.type}
                          </span>
                        </div>
                        <p className="font-bold text-slate-900 mb-1">{guideline.pronoun}</p>
                        <p className="text-sm text-slate-600">{guideline.usage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

