'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';
import ResponsiveTable from '@/components/responsive-table';

interface ExampleData {
  singular: string;
  translation: string;
  plural: string;
  note?: string;
}

interface CategoryData {
  category: string;
  description: string;
  examples: (ExampleData | {
    type: string;
    examples: string;
  })[];
}

interface SectionContent {
  when_to_use?: string[];
  note?: string;
  examples?: ExampleData[];
  categories?: CategoryData[];
  summary_table?: {
    headers: string[];
    rows: string[][];
  };
  pro_tip?: string;
}

interface Section {
  id: string;
  title: string;
  description: string;
  content: SectionContent;
}

interface LessonData {
  title: string;
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

export default function NomenPluralLesson() {
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
      const response = await fetch(`/json_files/a1_nomen_plural_${lang}.json`);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-4">
            <span className="text-2xl">🔢</span>
            <span className="text-sm font-medium text-indigo-700">Topic 13 of 20</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 break-words leading-tight">
            {lessonData?.title}
          </h1>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {lessonData?.sections.map((section) => (
            <div
              key={section.id}
              className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {section.title}
              </h2>
              <p className="text-slate-600 mb-6">{section.description}</p>

              {/* When to Use */}
              {section.content.when_to_use && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">📋 When to Use</h3>
                  <ul className="space-y-3">
                    {section.content.when_to_use.map((rule, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-indigo-600 mt-1">•</span>
                        <span className="text-slate-700">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Note */}
              {section.content.note && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <p className="text-sm font-medium text-indigo-800">💡 {section.content.note}</p>
                </div>
              )}

              {/* Examples */}
              {section.content.examples && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">📝 Examples</h3>
                  <div className="space-y-4">
                    {section.content.examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-indigo-400">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                          <div>
                            <span className="text-sm font-medium text-indigo-600">Singular:</span>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-slate-900">{example.singular}</p>
                              <button
                                onMouseEnter={() => playGermanText(example.singular)}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(example.singular);
                                }}
                                className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition"
                              >
                                <Volume2 size={12} className="text-indigo-600" />
                              </button>
                            </div>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-indigo-600">Translation:</span>
                            <p className="text-slate-700">{example.translation}</p>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-indigo-600">Plural:</span>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-slate-900">{example.plural}</p>
                              <button
                                onMouseEnter={() => playGermanText(example.plural)}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(example.plural);
                                }}
                                className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition"
                              >
                                <Volume2 size={12} className="text-indigo-600" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {example.note && (
                          <p className="text-sm text-slate-500 italic mt-2">{example.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              {section.content.categories && (
                <div className="space-y-6">
                  {section.content.categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="bg-indigo-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-indigo-800 mb-4">
                        {category.category}
                      </h3>
                      <p className="text-slate-700 mb-4">{category.description}</p>
                      
                      {/* Examples */}
                      <div className="space-y-4">
                        {category.examples.map((example, i) => {
                          if ('type' in example) {
                            // Special case for type-based examples
                            return (
                              <div key={i} className="bg-white/70 rounded-lg p-3 sm:p-4 border-l-4 border-indigo-400">
                                <div className="flex flex-col gap-1">
                                  <span className="text-[10px] sm:text-xs font-bold text-indigo-700 uppercase tracking-wider">{example.type}:</span>
                                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{example.examples}</p>
                                </div>
                              </div>
                            );
                          } else {
                            // Regular example
                            return (
                              <div key={i} className="bg-white/70 rounded-lg p-3 sm:p-4 border-l-4 border-indigo-400">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="flex items-center justify-between w-full gap-4">
                                    <div className="flex flex-col items-start gap-1 flex-1">
                                      <span className="text-[10px] sm:text-xs font-bold text-indigo-600 uppercase tracking-wider">Singular</span>
                                      <p className="text-sm sm:text-base font-bold text-slate-900 leading-tight">{example.singular}</p>
                                    </div>
                                    <button
                                      onMouseEnter={() => playGermanText(example.singular)}
                                      onClick={(e: React.MouseEvent) => {
                                        e.stopPropagation();
                                        playGermanText(example.singular);
                                      }}
                                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition flex-shrink-0 shadow-sm"
                                    >
                                      <Volume2 size={16} className="text-indigo-600 sm:size-5" />
                                    </button>
                                  </div>
                                  <div className="flex items-center justify-between w-full gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-indigo-50/50">
                                    <div className="flex flex-col items-start gap-1 flex-1">
                                      <span className="text-[10px] sm:text-xs font-bold text-indigo-600 uppercase tracking-wider">Plural</span>
                                      <p className="text-sm sm:text-base font-bold text-slate-900 leading-tight">{example.plural}</p>
                                    </div>
                                    <button
                                      onMouseEnter={() => playGermanText(example.plural)}
                                      onClick={(e: React.MouseEvent) => {
                                        e.stopPropagation();
                                        playGermanText(example.plural);
                                      }}
                                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition flex-shrink-0 shadow-sm"
                                    >
                                      <Volume2 size={16} className="text-indigo-600 sm:size-5" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Summary Table */}
              {section.content.summary_table && (
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">📊 Summary Table for Quick Reference</h3>
                  <p className="text-sm text-indigo-700 mb-4">{section.description}</p>
                  <ResponsiveTable
                    headers={section.content.summary_table.headers}
                    rows={section.content.summary_table.rows}
                    themeColor="purple"
                    mobileCardTitleIndex={0}
                  />
                  {section.content.pro_tip && (
                    <div className="mt-4 p-3 bg-indigo-100 rounded-lg">
                      <p className="text-sm text-indigo-800">💡 {section.content.pro_tip}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
