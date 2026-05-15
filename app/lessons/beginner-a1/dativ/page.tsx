'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';

interface ExampleData {
  english: string;
  german: string;
  note?: string;
}

interface VerbExampleData {
  english: string;
  german: string;
}

interface DativeVerbData {
  verb: string;
  examples: VerbExampleData[];
  description?: string;
}

interface EndingData {
  gender: string;
  ending: string;
  examples: string;
}

interface SignalLetterData {
  letter: string;
  meaning: string;
  examples: string;
}

interface SectionContent {
  masculine_neutral?: {
    title: string;
    description: string;
    examples: ExampleData[];
  };
  feminine?: {
    title: string;
    description: string;
    examples: ExampleData[];
  };
  plural?: {
    title: string;
    description: string;
    crucial_rule: string;
    examples: ExampleData[];
  };
  logic?: string;
  transportation_examples?: {
    noun: string;
    sentence: string;
    translation: string;
  }[];
  helfern?: DativeVerbData;
  gratulieren?: DativeVerbData;
  schenken_geben?: DativeVerbData;
  endings?: EndingData[];
  example_context?: string;
  location_examples?: {
    preposition: string;
    sentence: string;
    translation: string;
  }[];
  signal_letters?: SignalLetterData[];
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

export default function DativLesson() {
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
      const response = await fetch(`/json_files/a1_dativ_${lang}.json`);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-2xl">🎁</span>
            <span className="text-sm font-medium text-green-700">Topic 17 of 20</span>
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

              {/* Masculine and Neutral */}
              {section.content.masculine_neutral && (
                <div className="bg-green-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4">{section.content.masculine_neutral.title}</h3>
                  <p className="text-slate-700 mb-4">{section.content.masculine_neutral.description}</p>
                  <div className="space-y-3">
                    {section.content.masculine_neutral.examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-green-400">
                        <p className="text-sm text-slate-600 mb-2">{example.english}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-bold text-slate-900">{example.german}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(example.german));
                            }}
                            className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                          >
                            <Volume2 size={12} className="text-green-600" />
                          </button>
                        </div>
                        {example.note && (
                          <p className="text-sm text-slate-500 italic">{example.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Feminine */}
              {section.content.feminine && (
                <div className="bg-green-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4">{section.content.feminine.title}</h3>
                  <p className="text-slate-700 mb-4">{section.content.feminine.description}</p>
                  <div className="space-y-3">
                    {section.content.feminine.examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-green-400">
                        <p className="text-sm text-slate-600 mb-2">{example.english}</p>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-slate-900">{example.german}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(example.german));
                            }}
                            className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                          >
                            <Volume2 size={12} className="text-green-600" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Plural */}
              {section.content.plural && (
                <div className="bg-green-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4">{section.content.plural.title}</h3>
                  <p className="text-slate-700 mb-4">{section.content.plural.description}</p>
                  <div className="bg-green-100 rounded-lg p-4 mb-4">
                    <p className="text-sm font-medium text-green-800">💡 {section.content.plural.crucial_rule}</p>
                  </div>
                  <div className="space-y-3">
                    {section.content.plural.examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-green-400">
                        <p className="text-sm text-slate-600 mb-2">{example.english}</p>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-slate-900">{example.german}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(example.german));
                            }}
                            className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                          >
                            <Volume2 size={12} className="text-green-600" />
                          </button>
                        </div>
                        {example.note && (
                          <p className="text-sm text-slate-500 italic">{example.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Logic */}
              {section.content.logic && (
                <div className="bg-green-50 rounded-xl p-6 mb-6">
                  <p className="text-slate-700">{section.content.logic}</p>
                </div>
              )}

              {/* Examples */}
              {section.content.transportation_examples && (
                <div className="bg-green-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4">📝 Examples</h3>
                  <div className="space-y-3">
                    {section.content.transportation_examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-green-400">
                        <p className="text-sm text-green-600 mb-2">{example.noun}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-bold text-slate-900">{example.sentence}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(example.sentence))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(example.sentence));
                            }}
                            className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                          >
                            <Volume2 size={12} className="text-green-600" />
                          </button>
                        </div>
                        <p className="text-sm text-slate-600">{example.translation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Dative Verbs */}
              {(section.content.helfern || section.content.gratulieren || section.content.schenken_geben) && (
                <div className="bg-green-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4">🔤 Dative Verbs</h3>
                  
                  {section.content.helfern && (
                    <div className="mb-6">
                      <h4 className="font-bold text-green-700 mb-3">{section.content.helfern.verb}</h4>
                      <div className="space-y-3">
                        {section.content.helfern.examples.map((example, i) => (
                          <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-green-400">
                            <p className="text-sm text-slate-600 mb-2">{example.english}</p>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-slate-900">{example.german}</p>
                              <button
                                onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(extractGermanText(example.german));
                                }}
                                className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                              >
                                <Volume2 size={12} className="text-green-600" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.content.gratulieren && (
                    <div className="mb-6">
                      <h4 className="font-bold text-green-700 mb-3">{section.content.gratulieren.verb}</h4>
                      <div className="space-y-3">
                        {section.content.gratulieren.examples.map((example, i) => (
                          <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-green-400">
                            <p className="text-sm text-slate-600 mb-2">{example.english}</p>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-slate-900">{example.german}</p>
                              <button
                                onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(extractGermanText(example.german));
                                }}
                                className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                              >
                                <Volume2 size={12} className="text-green-600" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.content.schenken_geben && (
                    <div>
                      <h4 className="font-bold text-green-700 mb-3">{section.content.schenken_geben.verb}</h4>
                      {section.content.schenken_geben.description && (
                        <p className="text-slate-700 mb-3">{section.content.schenken_geben.description}</p>
                      )}
                      <div className="space-y-3">
                        {section.content.schenken_geben.examples.map((example, i) => (
                          <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-green-400">
                            <p className="text-sm text-slate-600 mb-2">{example.english}</p>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-slate-900">{example.german}</p>
                              <button
                                onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(extractGermanText(example.german));
                                }}
                                className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                              >
                                <Volume2 size={12} className="text-green-600" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Possessive Articles */}
              {section.content.endings && (
                <div className="bg-green-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4">🔒 Possessive Articles in Dative</h3>
                  <div className="space-y-3">
                    {section.content.endings.map((ending, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-green-400">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-green-700">{ending.gender}</span>
                          <span className="text-sm text-green-600">Ending: {ending.ending}</span>
                        </div>
                        <p className="text-slate-700">{ending.examples}</p>
                      </div>
                    ))}
                  </div>
                  {section.content.example_context && (
                    <div className="mt-4 p-3 bg-green-100 rounded-lg">
                      <p className="text-sm text-green-800">{section.content.example_context}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Location Prepositions */}
              {section.content.location_examples && (
                <div className="bg-green-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4">📍 Location Prepositions</h3>
                  <div className="space-y-3">
                    {section.content.location_examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-green-400">
                        <p className="text-sm text-green-600 mb-2">{example.preposition}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-bold text-slate-900">{example.sentence}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(example.sentence))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(example.sentence));
                            }}
                            className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                          >
                            <Volume2 size={12} className="text-green-600" />
                          </button>
                        </div>
                        <p className="text-sm text-slate-600">{example.translation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Signal Letters */}
              {section.content.signal_letters && (
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4">📋 Summary of Article Endings</h3>
                  <p className="text-slate-700 mb-4">{section.description}</p>
                  <div className="space-y-3">
                    {section.content.signal_letters.map((signal, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-green-400">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-green-700">{signal.letter}</span>
                          <span className="text-sm text-green-600">{signal.meaning}</span>
                        </div>
                        <p className="text-slate-700">{signal.examples}</p>
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
