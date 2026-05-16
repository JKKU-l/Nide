'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';
import ResponsiveTable from '@/components/responsive-table';

interface RuleData {
  rule: string;
  example: string;
}

interface KeyRuleData {
  category: string;
  description: string;
  examples: string[];
}

interface ExampleData {
  gender: string;
  introduce: string;
  describe: string;
}

interface QuestionExampleData {
  gender: string;
  example: string;
  note: string;
}

interface SectionContent {
  examples_table?: {
    headers: string[];
    rows: string[][];
  };
  why_use_them?: {
    title: string;
    rules: RuleData[];
  };
  key_rules?: KeyRuleData[];
  transitioning?: {
    title: string;
    description: string;
    steps: string[];
    examples: ExampleData[];
  };
  accusative_questions?: {
    title: string;
    description: string;
    examples: QuestionExampleData[];
  };
  example?: {
    introduction: string;
    continuation: string;
  };
  grammar_tip?: string;
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

export default function ArtikelLesson() {
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
      const response = await fetch(`/json_files/a1_artikel_${lang}.json`);
      const data = await response.json();
      setLessonData(data);
    } catch (error) {
      console.error('Error loading lesson data:', error);
    } finally {
      setLoading(false);
    }
  };

  const extractGermanText = (text: string) => {
    if (!text) return '';
    if (text.includes('(')) {
      return text.split('(')[0].trim();
    }
    return text.trim();
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-2xl">📰</span>
            <span className="text-sm font-medium text-orange-700">Topic 14 of 20</span>
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

              {/* Examples Table */}
              {section.content.examples_table && (
                <div className="bg-orange-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">📋 Examples</h3>
                  <ResponsiveTable
                    headers={section.content.examples_table.headers}
                    rows={section.content.examples_table.rows}
                    themeColor="orange"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}

              {/* Why Use Them */}
              {section.content.why_use_them && (
                <div className="bg-orange-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">{section.content.why_use_them.title}</h3>
                  <div className="space-y-4">
                    {section.content.why_use_them.rules.map((rule, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-orange-400">
                        <p className="font-medium text-slate-900 mb-2">{rule.rule}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-slate-600">{rule.example}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(rule.example))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(rule.example));
                            }}
                            className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition"
                          >
                            <Volume2 size={12} className="text-orange-600" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Rules */}
              {section.content.key_rules && (
                <div className="bg-orange-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">📋 Key Rules</h3>
                  <div className="space-y-4">
                    {section.content.key_rules.map((keyRule, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-orange-400">
                        <h4 className="font-bold text-orange-700 mb-2">{keyRule.category}</h4>
                        <p className="text-slate-700 mb-3">{keyRule.description}</p>
                        <div className="space-y-2">
                          {keyRule.examples.map((example, j) => (
                            <div key={j} className="flex items-center gap-2">
                              <p className="text-sm text-slate-600">{example}</p>
                              <button
                                onMouseEnter={() => playGermanText(extractGermanText(example))}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(extractGermanText(example));
                                }}
                                className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition"
                              >
                                <Volume2 size={12} className="text-orange-600" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Transitioning */}
              {section.content.transitioning && (
                <div className="bg-orange-50 rounded-xl p-4 sm:p-6 mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-orange-800 mb-4">{section.content.transitioning.title}</h3>
                  <p className="text-sm sm:text-base text-slate-700 mb-4">{section.content.transitioning.description}</p>
                  <div className="bg-orange-100 rounded-lg p-3 sm:p-4 mb-4">
                    <p className="text-sm font-medium text-orange-800 mb-2">Pattern:</p>
                    <ul className="space-y-2">
                      {section.content.transitioning.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span className="text-sm text-slate-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    {section.content.transitioning.examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-3 sm:p-4 border-l-4 border-orange-400">
                        <p className="text-[10px] sm:text-xs font-bold text-orange-700 mb-2 uppercase tracking-wider">{example.gender}</p>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between w-full gap-4">
                            <p className="text-sm sm:text-base text-slate-900 font-medium leading-tight flex-1">
                              {example.introduce}
                            </p>
                            <button
                              onMouseEnter={() => playGermanText(extractGermanText(example.introduce))}
                              onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                playGermanText(extractGermanText(example.introduce));
                              }}
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition flex-shrink-0 shadow-sm"
                            >
                              <Volume2 size={14} className="text-orange-600 sm:size-4" />
                            </button>
                          </div>
                          <div className="flex items-center justify-between w-full gap-4 pt-2 border-t border-orange-50/50">
                            <p className="text-sm sm:text-base text-slate-900 font-medium leading-tight flex-1">
                              {example.describe}
                            </p>
                            <button
                              onMouseEnter={() => playGermanText(extractGermanText(example.describe))}
                              onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                playGermanText(extractGermanText(example.describe));
                              }}
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition flex-shrink-0 shadow-sm"
                            >
                              <Volume2 size={14} className="text-orange-600 sm:size-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Accusative Questions */}
              {section.content.accusative_questions && (
                <div className="bg-orange-50 rounded-xl p-4 sm:p-6 mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-orange-800 mb-4">{section.content.accusative_questions.title}</h3>
                  <p className="text-sm sm:text-base text-slate-700 mb-4">{section.content.accusative_questions.description}</p>
                  <div className="space-y-3">
                    {section.content.accusative_questions.examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-3 sm:p-4 border-l-4 border-orange-400">
                        <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-4">
                          <div className="flex flex-col items-start gap-1 flex-1 w-full">
                            {example.gender && (
                              <p className="text-[10px] sm:text-xs font-bold text-orange-700 uppercase tracking-wider mb-1">
                                {example.gender}
                              </p>
                            )}
                            <p className="text-sm sm:text-base font-bold text-slate-900 leading-tight w-full">
                              {example.example}
                            </p>
                            {example.note && (
                              <p className="text-[10px] sm:text-xs text-slate-500 italic border-t border-orange-50/50 pt-1 mt-1 w-full">
                                {example.note}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center justify-between w-full md:w-auto md:justify-end mt-2 md:mt-0 border-t md:border-t-0 border-orange-100/50 pt-2 md:pt-0">
                            <span className="md:hidden text-[10px] font-bold text-orange-600 uppercase tracking-wider">Listen to pronunciation</span>
                            <button
                              onMouseEnter={() => playGermanText(extractGermanText(example.example))}
                              onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                playGermanText(extractGermanText(example.example));
                              }}
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition flex-shrink-0 shadow-sm"
                            >
                              <Volume2 size={16} className="text-orange-600 sm:size-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Narrative Example */}
              {section.content.example && (
                <div className="bg-orange-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">📖 Narrative Example</h3>
                  <div className="space-y-3">
                    <div className="bg-white/70 rounded-lg p-4 border-l-4 border-orange-400">
                      <p className="font-medium text-orange-700 mb-2">Introduction:</p>
                      <div className="flex items-center gap-2">
                        <p className="text-slate-900">{section.content.example?.introduction}</p>
                        <button
                          onMouseEnter={() => playGermanText(extractGermanText(section.content.example?.introduction || ''))}
                          onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            playGermanText(extractGermanText(section.content.example?.introduction || ''));
                          }}
                          className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition"
                        >
                          <Volume2 size={12} className="text-orange-600" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4 border-l-4 border-orange-400">
                      <p className="font-medium text-orange-700 mb-2">Continuation:</p>
                      <div className="flex items-center gap-2">
                        <p className="text-slate-900">{section.content.example?.continuation}</p>
                        <button
                          onMouseEnter={() => playGermanText(extractGermanText(section.content.example?.continuation || ''))}
                          onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            playGermanText(extractGermanText(section.content.example?.continuation || ''));
                          }}
                          className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition"
                        >
                          <Volume2 size={12} className="text-orange-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Grammar Tip */}
              {section.content.grammar_tip && (
                <div className="bg-orange-50 rounded-xl p-6">
                  <p className="text-sm font-medium text-orange-800">💡 {section.content.grammar_tip}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
