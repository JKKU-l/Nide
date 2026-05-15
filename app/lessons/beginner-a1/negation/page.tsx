'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';

interface RuleData {
  rule: string;
}

interface ExampleData {
  context: string;
  example: string;
  translation: string;
}

interface OppositeData {
  category: string;
  positive: string;
  negative: string;
}

interface ExplanationData {
  type: string;
  description: string;
  example: string;
}

interface UsageRuleData {
  question: string;
  yes_indefinite?: string;
  yes_definite?: string;
  answer?: string;
}

interface SectionContent {
  how_to_use?: {
    title: string;
    rules: RuleData[];
  };
  examples?: ExampleData[];
  opposites?: OppositeData[];
  explanation?: ExplanationData[];
  rules?: UsageRuleData[];
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

export default function NegationLesson() {
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
      const response = await fetch(`/json_files/a1_negation_${lang}.json`);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-4">
            <span className="text-2xl">🚫</span>
            <span className="text-sm font-medium text-red-700">Topic 15 of 20</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
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

              {/* How to Use */}
              {section.content.how_to_use && (
                <div className="bg-red-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-red-800 mb-4">{section.content.how_to_use.title}</h3>
                  <div className="space-y-4">
                    {section.content.how_to_use.rules.map((rule, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-red-400">
                        <p className="text-slate-700">{rule.rule}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Examples */}
              {section.content.examples && (
                <div className="bg-red-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-red-800 mb-4">📝 Examples</h3>
                  <div className="space-y-4">
                    {section.content.examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-red-400">
                        <p className="text-sm text-red-600 mb-2">{example.context}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-bold text-slate-900">{example.example}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(example.example))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(example.example));
                            }}
                            className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition"
                          >
                            <Volume2 size={12} className="text-red-600" />
                          </button>
                        </div>
                        <p className="text-sm text-slate-600">{example.translation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Opposites */}
              {section.content.opposites && (
                <div className="bg-red-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-red-800 mb-4">🔄 Opposite Words</h3>
                  <div className="space-y-4">
                    {section.content.opposites.map((opposite, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-red-400">
                        <h4 className="font-bold text-red-700 mb-3">{opposite.category}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-green-50 rounded-lg p-3">
                            <p className="text-sm font-medium text-green-700 mb-1">Positive:</p>
                            <div className="flex items-center gap-2">
                              <p className="text-slate-900">{opposite.positive}</p>
                              <button
                                onMouseEnter={() => playGermanText(extractGermanText(opposite.positive))}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(extractGermanText(opposite.positive));
                                }}
                                className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                              >
                                <Volume2 size={12} className="text-green-600" />
                              </button>
                            </div>
                          </div>
                          <div className="bg-red-50 rounded-lg p-3">
                            <p className="text-sm font-medium text-red-700 mb-1">Negative:</p>
                            <div className="flex items-center gap-2">
                              <p className="text-slate-900">{opposite.negative}</p>
                              <button
                                onMouseEnter={() => playGermanText(extractGermanText(opposite.negative))}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(extractGermanText(opposite.negative));
                                }}
                                className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition"
                              >
                                <Volume2 size={12} className="text-red-600" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Explanation */}
              {section.content.explanation && (
                <div className="bg-red-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-red-800 mb-4">🧠 Explanation</h3>
                  <div className="space-y-4">
                    {section.content.explanation.map((explanation, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-red-400">
                        <h4 className="font-bold text-red-700 mb-2">{explanation.type}</h4>
                        <p className="text-slate-700 mb-3">{explanation.description}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-slate-600">{explanation.example}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(explanation.example))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(explanation.example));
                            }}
                            className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition"
                          >
                            <Volume2 size={12} className="text-red-600" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Usage Rules */}
              {section.content.rules && (
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-red-800 mb-4">📋 Usage Logic</h3>
                  <p className="text-sm text-red-700 mb-4">{section.description}</p>
                  <div className="space-y-4">
                    {section.content.rules.map((rule, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-red-400">
                        <p className="font-bold text-red-700 mb-2">{rule.question}</p>
                        {rule.yes_indefinite && (
                          <p className="text-slate-700 mb-1">✅ {rule.yes_indefinite}</p>
                        )}
                        {rule.yes_definite && (
                          <p className="text-slate-700 mb-1">✅ {rule.yes_definite}</p>
                        )}
                        {rule.answer && (
                          <p className="text-slate-700">✅ {rule.answer}</p>
                        )}
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
