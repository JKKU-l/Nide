'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';
import ResponsiveTable from '@/components/responsive-table';

interface BreakdownData {
  part: string;
  role: string;
}

interface ExampleData {
  english: string;
  german: string;
  note: string;
  gender?: string;
}

interface ChangeData {
  gender: string;
  nominative: string;
  accusative: string;
}

interface QuestionWordData {
  word: string;
  meaning: string;
  usage: string;
  example_question: string;
  example_answer: string;
}

interface VerbData {
  verb: string;
  example: string;
}

interface ContextExampleData {
  sentence: string;
  german: string;
  case: string;
  reason: string;
}

interface SectionContent {
  example_sentence?: {
    sentence: string;
    breakdown: BreakdownData[];
  };
  golden_rule?: {
    title: string;
    description: string;
    changes: ChangeData[];
  };
  masculine_examples?: {
    title: string;
    examples: ExampleData[];
  };
  neutral_feminine_examples?: {
    title: string;
    examples: ExampleData[];
  };
  negative_examples?: ExampleData[];
  question_words?: QuestionWordData[];
  common_verbs?: VerbData[];
  logic_summary?: string;
  context_examples?: ContextExampleData[];
  examples?: ContextExampleData[];
  key_insight?: string;
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

export default function AkkusativLesson() {
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
      const response = await fetch(`/json_files/a1_akkusativ_${lang}.json`);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
            <span className="text-2xl">🎯</span>
            <span className="text-sm font-medium text-purple-700">Topic 16 of 20</span>
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

              {/* Example Sentence */}
              {section.content.example_sentence && (
                <div className="bg-purple-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-purple-800 mb-4">📝 Example Sentence</h3>
                  <p className="text-slate-700 mb-4">{section.content.example_sentence.sentence}</p>
                  <div className="space-y-2">
                    {section.content.example_sentence.breakdown.map((item, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-3 border-l-4 border-purple-400">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-purple-700">{item.part}</span>
                          <span className="text-sm text-purple-600">{item.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Golden Rule */}
              {section.content.golden_rule && (
                <div className="bg-purple-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-purple-800 mb-4">{section.content.golden_rule.title}</h3>
                  <p className="text-slate-700 mb-4">{section.content.golden_rule.description}</p>
                  <ResponsiveTable
                    headers={['Gender', 'Nominative', 'Accusative']}
                    rows={section.content.golden_rule.changes.map((change) => [
                      change.gender,
                      change.nominative,
                      change.accusative
                    ])}
                    themeColor="purple"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}

              {/* Masculine Examples */}
              {section.content.masculine_examples && (
                <div className="bg-purple-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-purple-800 mb-4">{section.content.masculine_examples.title}</h3>
                  <div className="space-y-4">
                    {section.content.masculine_examples.examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-purple-400">
                        <p className="text-sm text-slate-600 mb-2">{example.english}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-bold text-slate-900">{example.german}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(example.german));
                            }}
                            className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition"
                          >
                            <Volume2 size={12} className="text-purple-600" />
                          </button>
                        </div>
                        <p className="text-sm text-slate-500 italic">{example.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Neutral/Feminine Examples */}
              {section.content.neutral_feminine_examples && (
                <div className="bg-purple-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-purple-800 mb-4">{section.content.neutral_feminine_examples.title}</h3>
                  <div className="space-y-4">
                    {section.content.neutral_feminine_examples.examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-purple-400">
                        <p className="text-sm text-slate-600 mb-2">{example.english}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-bold text-slate-900">{example.german}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(example.german));
                            }}
                            className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition"
                          >
                            <Volume2 size={12} className="text-purple-600" />
                          </button>
                        </div>
                        <p className="text-sm text-slate-500 italic">{example.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Negative Articles */}
              {section.content.negative_examples && (
                <div className="bg-purple-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-purple-800 mb-4">📝 Examples</h3>
                  <div className="space-y-4">
                    {section.content.negative_examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-purple-400">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-purple-600">{example.gender}</span>
                          <span className="text-sm text-slate-600">{example.english}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-slate-900">{example.german}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(example.german));
                            }}
                            className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition"
                          >
                            <Volume2 size={12} className="text-purple-600" />
                          </button>
                        </div>
                        <p className="text-sm text-slate-500 italic">{example.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Question Words */}
              {section.content.question_words && (
                <div className="bg-purple-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-purple-800 mb-4">❓ Question Words</h3>
                  <div className="space-y-4">
                    {section.content.question_words.map((word, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-purple-400">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-bold text-purple-700 text-lg">{word.word}</span>
                          <span className="text-sm text-purple-600">({word.meaning})</span>
                        </div>
                        <p className="text-slate-700 mb-3">{word.usage}</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-purple-600">Q:</span>
                            <p className="text-slate-900">{word.example_question}</p>
                            <button
                              onMouseEnter={() => playGermanText(extractGermanText(word.example_question))}
                              onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                playGermanText(extractGermanText(word.example_question));
                              }}
                              className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition"
                            >
                              <Volume2 size={12} className="text-purple-600" />
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-purple-600">A:</span>
                            <p className="text-slate-900">{word.example_answer}</p>
                            <button
                              onMouseEnter={() => playGermanText(extractGermanText(word.example_answer))}
                              onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                playGermanText(extractGermanText(word.example_answer));
                              }}
                              className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition"
                            >
                              <Volume2 size={12} className="text-purple-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Common Verbs */}
              {section.content.common_verbs && (
                <div className="bg-purple-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-purple-800 mb-4">🔤 Common Verbs</h3>
                  <div className="space-y-3">
                    {section.content.common_verbs.map((verb, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-purple-400">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-purple-700">{verb.verb}</span>
                          <div className="flex items-center gap-2">
                            <p className="text-slate-900">{verb.example}</p>
                            <button
                              onMouseEnter={() => playGermanText(extractGermanText(verb.example))}
                              onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                playGermanText(extractGermanText(verb.example));
                              }}
                              className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition"
                            >
                              <Volume2 size={12} className="text-purple-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {section.content.logic_summary && (
                    <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                      <p className="text-sm text-purple-800">{section.content.logic_summary}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Context Examples */}
              {section.id === 'context_example' && (
                <div className="bg-purple-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-purple-800 mb-4">🔄 Context Examples</h3>
                  <p className="text-slate-700 mb-4">{section.description}</p>
                  <div className="space-y-4">
                    {section.content.examples?.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-purple-400">
                        <p className="text-sm text-slate-600 mb-2">{example.sentence}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-bold text-slate-900">{example.german}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(example.german));
                            }}
                            className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition"
                          >
                            <Volume2 size={12} className="text-purple-600" />
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-purple-600">{example.case}</span>
                          <span className="text-sm text-slate-500">{example.reason}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {section.content.key_insight && (
                    <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                      <p className="text-sm text-purple-800">💡 {section.content.key_insight}</p>
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
