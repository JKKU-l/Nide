'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';
import ResponsiveTable from '@/components/responsive-table';

interface OwnerData {
  pronoun: string;
  root: string;
  english: string;
}

interface ExampleData {
  german: string;
  english: string;
}

interface RuleData {
  gender: string;
  ending: string;
  examples?: ExampleData[];
  note?: string;
  example?: string;
}

interface ScenarioData {
  title: string;
  description: string;
  examples: ExampleData[];
}

interface KeyLogicData {
  title: string;
  explanation: string;
  examples: string[];
}

interface SectionContent {
  owners?: OwnerData[];
  nominative?: {
    title: string;
    description: string;
    rules: RuleData[];
  };
  accusative?: {
    title: string;
    description: string;
    rules: RuleData[];
  };
  dative?: {
    title: string;
    description: string;
    rules: RuleData[];
  };
  scenario_a?: ScenarioData;
  scenario_b?: ScenarioData;
  scenario_c?: ScenarioData;
  gender_trap?: KeyLogicData;
  euer_spelling?: KeyLogicData;
  kein_rule?: KeyLogicData;
}

interface Section {
  id: string;
  title: string;
  description: string;
  content: SectionContent;
}

interface LessonData {
  title: string;
  description: string;
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

export default function PossessivartikelLesson() {
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
      const response = await fetch(`/json_files/a1_possessivartikel_${lang}.json`);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-4">
            <span className="text-2xl">🔒</span>
            <span className="text-sm font-medium text-indigo-700">Topic 18 of 20</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            {lessonData?.title}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">{lessonData?.description}</p>
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

              {/* Root Words */}
              {section.content.owners && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">👤 Owner Root Words</h3>
                  <ResponsiveTable
                    headers={['Person', 'Root', 'English']}
                    rows={section.content.owners.map((owner) => [
                      owner.pronoun,
                      <span className="font-bold text-indigo-700">{owner.root}</span>,
                      owner.english
                    ])}
                    themeColor="purple"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}

              {/* Nominative Case */}
              {section.content.nominative && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">{section.content.nominative.title}</h3>
                  <p className="text-slate-700 mb-4">{section.content.nominative.description}</p>
                  <div className="space-y-4">
                    {section.content.nominative.rules.map((rule, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-indigo-400">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-bold text-indigo-700">{rule.gender}</span>
                          <span className="text-sm text-indigo-600 bg-indigo-100 px-2 py-1 rounded">{rule.ending}</span>
                        </div>
                        {rule.examples && (
                          <div className="space-y-2">
                            {rule.examples.map((example, j) => (
                              <div key={j} className="flex items-center gap-2">
                                <p className="text-slate-600 text-sm">{example.english}</p>
                                <div className="flex items-center gap-2">
                                  <p className="font-bold text-slate-900">{example.german}</p>
                                  <button
                                    onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                                    onClick={(e: React.MouseEvent) => {
                                      e.stopPropagation();
                                      playGermanText(extractGermanText(example.german));
                                    }}
                                    className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition"
                                  >
                                    <Volume2 size={12} className="text-indigo-600" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {rule.note && (
                          <p className="text-sm text-slate-500 italic">{rule.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Accusative Case */}
              {section.content.accusative && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">{section.content.accusative.title}</h3>
                  <p className="text-slate-700 mb-4">{section.content.accusative.description}</p>
                  <div className="space-y-4">
                    {section.content.accusative.rules.map((rule, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-indigo-400">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-bold text-indigo-700">{rule.gender}</span>
                          <span className="text-sm text-indigo-600 bg-indigo-100 px-2 py-1 rounded">{rule.ending}</span>
                        </div>
                        {rule.examples && (
                          <div className="space-y-2">
                            {rule.examples.map((example, j) => (
                              <div key={j} className="flex items-center gap-2">
                                <p className="text-slate-600 text-sm">{example.english}</p>
                                <div className="flex items-center gap-2">
                                  <p className="font-bold text-slate-900">{example.german}</p>
                                  <button
                                    onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                                    onClick={(e: React.MouseEvent) => {
                                      e.stopPropagation();
                                      playGermanText(extractGermanText(example.german));
                                    }}
                                    className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition"
                                  >
                                    <Volume2 size={12} className="text-indigo-600" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {rule.note && (
                          <p className="text-sm text-slate-500 italic">{rule.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Dative Case */}
              {section.content.dative && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">{section.content.dative.title}</h3>
                  <p className="text-slate-700 mb-4">{section.content.dative.description}</p>
                  <div className="space-y-4">
                    {section.content.dative.rules.map((rule, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-indigo-400">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-bold text-indigo-700">{rule.gender}</span>
                          <span className="text-sm text-indigo-600 bg-indigo-100 px-2 py-1 rounded">{rule.ending}</span>
                        </div>
                        {rule.example && (
                          <div className="flex items-center gap-2">
                            <p className="font-bold text-slate-900">{rule.example}</p>
                            <button
                              onMouseEnter={() => playGermanText(extractGermanText(rule.example || ''))}
                              onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                playGermanText(extractGermanText(rule.example || ''));
                              }}
                              className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition"
                            >
                              <Volume2 size={12} className="text-indigo-600" />
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Practical Examples */}
              {(section.content.scenario_a || section.content.scenario_b || section.content.scenario_c) && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">🎯 Practical Usage Examples</h3>
                  
                  {section.content.scenario_a && (
                    <div className="mb-6">
                      <h4 className="font-bold text-indigo-700 mb-3">{section.content.scenario_a.title}</h4>
                      <p className="text-slate-700 mb-3">{section.content.scenario_a.description}</p>
                      <div className="space-y-2">
                        {section.content.scenario_a.examples.map((example, i) => (
                          <div key={i} className="bg-white/70 rounded-lg p-3 border-l-4 border-indigo-400">
                            <div className="flex items-center gap-2">
                              <p className="text-slate-600 text-sm">{example.english}</p>
                              <div className="flex items-center gap-2">
                                <p className="font-bold text-slate-900">{example.german}</p>
                                <button
                                  onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                                  onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    playGermanText(extractGermanText(example.german));
                                  }}
                                  className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition"
                                >
                                  <Volume2 size={12} className="text-indigo-600" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.content.scenario_b && (
                    <div className="mb-6">
                      <h4 className="font-bold text-indigo-700 mb-3">{section.content.scenario_b.title}</h4>
                      <p className="text-slate-700 mb-3">{section.content.scenario_b.description}</p>
                      <div className="space-y-2">
                        {section.content.scenario_b.examples.map((example, i) => (
                          <div key={i} className="bg-white/70 rounded-lg p-3 border-l-4 border-indigo-400">
                            <div className="flex items-center gap-2">
                              <p className="text-slate-600 text-sm">{example.english}</p>
                              <div className="flex items-center gap-2">
                                <p className="font-bold text-slate-900">{example.german}</p>
                                <button
                                  onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                                  onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    playGermanText(extractGermanText(example.german));
                                  }}
                                  className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition"
                                >
                                  <Volume2 size={12} className="text-indigo-600" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.content.scenario_c && (
                    <div>
                      <h4 className="font-bold text-indigo-700 mb-3">{section.content.scenario_c.title}</h4>
                      <p className="text-slate-700 mb-3">{section.content.scenario_c.description}</p>
                      <div className="space-y-2">
                        {section.content.scenario_c.examples.map((example, i) => (
                          <div key={i} className="bg-white/70 rounded-lg p-3 border-l-4 border-indigo-400">
                            <div className="flex items-center gap-2">
                              <p className="text-slate-600 text-sm">{example.english}</p>
                              <div className="flex items-center gap-2">
                                <p className="font-bold text-slate-900">{example.german}</p>
                                <button
                                  onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                                  onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    playGermanText(extractGermanText(example.german));
                                  }}
                                  className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition"
                                >
                                  <Volume2 size={12} className="text-indigo-600" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Key Logic */}
              {(section.content.gender_trap || section.content.euer_spelling || section.content.kein_rule) && (
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">🧠 Key Logic to Remember</h3>
                  
                  {section.content.gender_trap && (
                    <div className="mb-6">
                      <h4 className="font-bold text-indigo-700 mb-3">{section.content.gender_trap.title}</h4>
                      <p className="text-slate-700 mb-3">{section.content.gender_trap.explanation}</p>
                      <div className="space-y-2">
                        {section.content.gender_trap.examples.map((example, i) => (
                          <div key={i} className="bg-white/70 rounded-lg p-3 border-l-4 border-indigo-400">
                            <p className="text-slate-700">{example}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.content.euer_spelling && (
                    <div className="mb-6">
                      <h4 className="font-bold text-indigo-700 mb-3">{section.content.euer_spelling.title}</h4>
                      <p className="text-slate-700 mb-3">{section.content.euer_spelling.explanation}</p>
                      <div className="space-y-2">
                        {section.content.euer_spelling.examples.map((example, i) => (
                          <div key={i} className="bg-white/70 rounded-lg p-3 border-l-4 border-indigo-400">
                            <p className="text-slate-700">{example}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.content.kein_rule && (
                    <div>
                      <h4 className="font-bold text-indigo-700 mb-3">{section.content.kein_rule.title}</h4>
                      <p className="text-slate-700 mb-3">{section.content.kein_rule.explanation}</p>
                      <div className="space-y-2">
                        {section.content.kein_rule.examples.map((example, i) => (
                          <div key={i} className="bg-white/70 rounded-lg p-3 border-l-4 border-indigo-400">
                            <p className="text-slate-700">{example}</p>
                          </div>
                        ))}
                      </div>
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
