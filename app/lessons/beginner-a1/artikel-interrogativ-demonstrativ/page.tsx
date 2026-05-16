'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';

interface DefinitionData {
  type: string;
  description: string;
}

interface GoldenRuleData {
  title: string;
  description: string;
}

interface GenderData {
  gender: string;
  ending: string;
  example_question?: string;
  example_question_english?: string;
  example_response?: string;
  example_response_english?: string;
  example?: string;
  example_english?: string;
  note?: string;
  preposition_note?: string;
}

interface SignalData {
  type: string;
  description: string;
}

interface SummaryExampleData {
  article: string;
  question: string;
  answer: string;
}

interface SectionContent {
  definitions?: DefinitionData[];
  golden_rule?: GoldenRuleData;
  genders?: GenderData[];
  signals?: SignalData[];
  examples?: SummaryExampleData[];
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

export default function ArtikelInterrogativDemonstrativLesson() {
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
      const response = await fetch(`/json_files/a1_artikel_interrogativ_demonstrativ_${lang}.json`);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-4">
            <span className="text-2xl">🔍</span>
            <span className="text-sm font-medium text-teal-700">Topic 19 of 20</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 break-words leading-tight">
            {lessonData?.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">{lessonData?.description}</p>
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

              {/* Definitions */}
              {section.content.definitions && (
                <div className="bg-teal-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-teal-800 mb-4">📚 Definitions</h3>
                  <div className="space-y-4">
                    {section.content.definitions.map((def, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-teal-400">
                        <h4 className="font-bold text-teal-700 mb-2">{def.type}</h4>
                        <p className="text-slate-700">{def.description}</p>
                      </div>
                    ))}
                  </div>
                  {section.content.golden_rule && (
                    <div className="mt-4 p-3 bg-teal-100 rounded-lg">
                      <h4 className="font-bold text-teal-800 mb-1">{section.content.golden_rule.title}</h4>
                      <p className="text-sm text-teal-700">{section.content.golden_rule.description}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Gender Examples */}
              {section.content.genders && (
                <div className="bg-teal-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-teal-800 mb-4">🎯 Gender Examples</h3>
                  <div className="space-y-4">
                    {section.content.genders.map((gender, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-teal-400">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-bold text-teal-700">{gender.gender}</span>
                          <span className="text-sm text-teal-600 bg-teal-100 px-2 py-1 rounded">{gender.ending}</span>
                        </div>
                        
                        {gender.example_question && (
                          <div className="mb-3">
                            <p className="text-sm text-slate-600 mb-2">{gender.example_question_english}</p>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-slate-900">{gender.example_question}</p>
                              <button
                                onMouseEnter={() => playGermanText(extractGermanText(gender.example_question || ''))}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(extractGermanText(gender.example_question || ''));
                                }}
                                className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center hover:bg-teal-200 transition"
                              >
                                <Volume2 size={12} className="text-teal-600" />
                              </button>
                            </div>
                          </div>
                        )}
                        
                        {gender.example_response && (
                          <div className="mb-3">
                            <p className="text-sm text-slate-600 mb-2">{gender.example_response_english}</p>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-slate-900">{gender.example_response}</p>
                              <button
                                onMouseEnter={() => playGermanText(extractGermanText(gender.example_response || ''))}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(extractGermanText(gender.example_response || ''));
                                }}
                                className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center hover:bg-teal-200 transition"
                              >
                                <Volume2 size={12} className="text-teal-600" />
                              </button>
                            </div>
                          </div>
                        )}
                        
                        {gender.example && (
                          <div className="mb-3">
                            <p className="text-sm text-slate-600 mb-2">{gender.example_english}</p>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-slate-900">{gender.example}</p>
                              <button
                                onMouseEnter={() => playGermanText(extractGermanText(gender.example || ''))}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(extractGermanText(gender.example || ''));
                                }}
                                className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center hover:bg-teal-200 transition"
                              >
                                <Volume2 size={12} className="text-teal-600" />
                              </button>
                            </div>
                          </div>
                        )}
                        
                        {gender.note && (
                          <p className="text-sm text-slate-500 italic mb-2">{gender.note}</p>
                        )}
                        
                        {gender.preposition_note && (
                          <p className="text-sm text-slate-500 italic">{gender.preposition_note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Signals */}
              {section.content.signals && (
                <div className="bg-teal-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-teal-800 mb-4">📡 Why These Endings Matter</h3>
                  <div className="space-y-4">
                    {section.content.signals.map((signal, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-teal-400">
                        <h4 className="font-bold text-teal-700 mb-2">{signal.type}</h4>
                        <p className="text-slate-700">{signal.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary Examples */}
              {section.content.examples && (
                <div className="bg-teal-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-teal-800 mb-4">💡 Summary Tip for A1</h3>
                  <p className="text-sm sm:text-base text-slate-700 mb-4">{section.description}</p>
                  <div className="space-y-3">
                    {section.content.examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-3 sm:p-4 border-l-4 border-teal-400">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-between border-b border-teal-50/50 pb-2">
                            <span className="text-xs sm:text-sm font-bold text-teal-600 uppercase tracking-wider">Article Type</span>
                            <p className="text-sm sm:text-base font-black text-slate-900">{example.article}</p>
                          </div>
                          <div className="flex items-center justify-between w-full gap-4">
                            <div className="flex flex-col items-start gap-1 flex-1">
                              <span className="text-[10px] sm:text-xs font-bold text-teal-600 uppercase tracking-wider">Question</span>
                              <p className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                                {example.question}
                              </p>
                            </div>
                            <button
                              onMouseEnter={() => playGermanText(extractGermanText(example.question))}
                              onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                playGermanText(extractGermanText(example.question));
                              }}
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-100 flex items-center justify-center hover:bg-teal-200 transition flex-shrink-0 shadow-sm"
                            >
                              <Volume2 size={16} className="text-teal-600 sm:size-5" />
                            </button>
                          </div>
                          <div className="flex items-center justify-between w-full gap-4 pt-2 border-t border-teal-50/50">
                            <div className="flex flex-col items-start gap-1 flex-1">
                              <span className="text-[10px] sm:text-xs font-bold text-teal-600 uppercase tracking-wider">Answer</span>
                              <p className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                                {example.answer}
                              </p>
                            </div>
                            <button
                              onMouseEnter={() => playGermanText(extractGermanText(example.answer))}
                              onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                playGermanText(extractGermanText(example.answer));
                              }}
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-100 flex items-center justify-center hover:bg-teal-200 transition flex-shrink-0 shadow-sm"
                            >
                              <Volume2 size={16} className="text-teal-600 sm:size-5" />
                            </button>
                          </div>
                        </div>
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
