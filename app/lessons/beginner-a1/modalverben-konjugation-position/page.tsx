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

interface Example {
  category?: string;
  german?: string;
  english?: string;
  full?: string;
  shortened?: string;
}

interface SectionContent {
  modal_verbs_table?: TableData;
  rules?: string[];
  conjugation_table?: TableData;
  structure?: string[];
  formula?: string;
  examples?: Example[];
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

export default function ModalverbenKonjugationPositionLesson() {
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
      const response = await fetch(`/json_files/a1_modalverben_konjugation_position_${lang}.json`);
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
        <div className="flex items-center justify-between gap-2 mb-8">
          <button
            onClick={() => router.push('/lessons/beginner-a1')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition flex-shrink-0"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Back to Beginner A1</span>
            <span className="sm:hidden text-sm font-medium">Back</span>
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
        <div className="text-center mb-10 px-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-4">
            <span className="text-2xl">⚡</span>
            <span className="text-sm font-medium text-yellow-700">Topic 5 of 20</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 break-words leading-tight">
            {lessonData?.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
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

              {/* Modal Verbs Table */}
              {section.content.modal_verbs_table && (
                <div className="mb-6">
                  <ResponsiveTable
                    headers={section.content.modal_verbs_table.headers}
                    rows={section.content.modal_verbs_table.rows.map((row) =>
                      row.map((cell, j) => {
                        const isGermanVerb = j === 0 && cell.length > 0;
                        if (isGermanVerb) {
                          return (
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-yellow-700">{cell}</span>
                              <button
                                onMouseEnter={() => playGermanText(cell)}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(cell);
                                }}
                                className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center hover:bg-yellow-200 transition"
                              >
                                <Volume2 size={12} className="text-yellow-600" />
                              </button>
                            </div>
                          );
                        }
                        return cell;
                      })
                    )}
                    themeColor="orange"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}

              {/* Rules */}
              {section.content.rules && (
                <div className="bg-yellow-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-yellow-800 mb-4">📋 Key Rules</h3>
                  <ul className="space-y-3">
                    {section.content.rules.map((rule, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span className="text-slate-700">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Conjugation Table */}
              {section.content.conjugation_table && (
                <div className="mb-6">
                  <ResponsiveTable
                    headers={section.content.conjugation_table.headers}
                    rows={section.content.conjugation_table.rows.map((row) =>
                      row.map((cell, j) => {
                        const isGermanVerb = j >= 1 && cell.length > 0;
                        if (isGermanVerb) {
                          return (
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-yellow-700">{cell}</span>
                              <button
                                onMouseEnter={() => playGermanText(cell)}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(cell);
                                }}
                                className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center hover:bg-yellow-200 transition"
                              >
                                <Volume2 size={12} className="text-yellow-600" />
                              </button>
                            </div>
                          );
                        }
                        return cell;
                      })
                    )}
                    themeColor="orange"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}

              {/* Structure */}
              {section.content.structure && (
                <div className="bg-yellow-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-yellow-800 mb-4">🏗️ Sentence Structure</h3>
                  <ul className="space-y-3">
                    {section.content.structure.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-yellow-600 mt-1">{i + 1}.</span>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {section.content.formula && (
                    <div className="mt-4 p-3 bg-white/70 rounded-lg border border-yellow-200">
                      <p className="font-mono text-sm text-slate-700">
                        <strong>Formula:</strong> {section.content.formula}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Examples */}
              {section.content.examples && (
                <div className="space-y-3">
                  {section.content.examples.map((example, i) => (
                    <div key={i} className="bg-white/70 rounded-lg p-3 sm:p-4 border-l-4 border-yellow-400">
                      <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-4">
                        <div className="flex flex-col items-start gap-1 flex-1 w-full">
                          {example.category && (
                            <p className="text-xs sm:text-sm font-bold text-yellow-700 mb-1 uppercase tracking-wider">
                              {example.category}
                            </p>
                          )}
                          {example.german && example.english && (
                            <div className="w-full">
                              <p className="text-sm sm:text-base font-bold text-slate-900 leading-tight w-full">
                                {example.german}
                              </p>
                              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mt-0.5 w-full">
                                {example.english}
                              </p>
                            </div>
                          )}
                          {example.full && example.shortened && (
                            <div className="w-full mt-2 p-2 bg-blue-50/50 rounded-lg text-xs sm:text-sm">
                              <p className="text-blue-800 font-bold mb-1">Spoken German Hint</p>
                              <div className="space-y-1">
                                <p className="text-slate-700"><span className="font-bold">Full:</span> {example.full}</p>
                                <p className="text-slate-700"><span className="font-bold">Short:</span> {example.shortened}</p>
                                <p className="text-slate-500 italic mt-1">{example.english}</p>
                              </div>
                            </div>
                          )}
                        </div>
                        {(example.german || example.shortened) && (
                          <div className="flex items-center justify-between w-full md:w-auto md:justify-end mt-2 md:mt-0 border-t md:border-t-0 border-yellow-100/50 pt-2 md:pt-0">
                            <span className="md:hidden text-[10px] font-bold text-yellow-600 uppercase tracking-wider">Listen to pronunciation</span>
                            <button
                              onMouseEnter={() => playGermanText(example.german || example.shortened || '')}
                              onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                playGermanText(example.german || example.shortened || '');
                              }}
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-100 flex items-center justify-center hover:bg-yellow-200 transition flex-shrink-0 shadow-sm"
                            >
                              <Volume2 size={16} className="text-yellow-600 sm:size-5" />
                            </button>
                          </div>
                        )}
                      </div>
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

