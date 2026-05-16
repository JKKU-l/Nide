'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';

interface CaseData {
  case: string;
  description: string;
}

interface ExampleData {
  english: string;
  german: string;
  explanation: string;
  note?: string;
}

interface PrepositionData {
  preposition: string;
  case: string;
  example_english: string;
  example_german: string;
}

interface TransformationData {
  form: string;
  pronoun: string;
}

interface GroupData {
  title: string;
  note?: string;
  transformations: TransformationData[];
}

interface SectionContent {
  cases?: CaseData[];
  examples?: ExampleData[];
  note?: string;
  prepositions?: PrepositionData[];
  groups?: GroupData[];
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

export default function PersonalpronomenAkkusativDativLesson() {
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
      const response = await fetch(`/json_files/a1_personalpronomen_akkusativ_dativ_${lang}.json`);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-4">
            <span className="text-2xl">👥</span>
            <span className="text-sm font-medium text-pink-700">Topic 20 of 20</span>
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

              {/* Cases */}
              {section.content.cases && (
                <div className="bg-pink-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-pink-800 mb-4">📚 The Three Main Cases</h3>
                  <div className="space-y-3">
                    {section.content.cases.map((caseData, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-pink-400">
                        <h4 className="font-bold text-pink-700 mb-1">{caseData.case}</h4>
                        <p className="text-slate-700">{caseData.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Examples */}
              {section.content.examples && (
                <div className="bg-pink-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-pink-800 mb-4">🎯 Examples</h3>
                  <div className="space-y-4">
                    {section.content.examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-pink-400">
                        <p className="text-sm text-slate-600 mb-2">{example.english}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-bold text-slate-900">{example.german}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(example.german));
                            }}
                            className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition"
                          >
                            <Volume2 size={12} className="text-pink-600" />
                          </button>
                        </div>
                        <p className="text-sm text-slate-500 italic">{example.explanation}</p>
                        {example.note && (
                          <p className="text-sm text-slate-500 italic mt-2">{example.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  {section.content.note && (
                    <div className="mt-4 p-3 bg-pink-100 rounded-lg">
                      <p className="text-sm text-pink-800">💡 {section.content.note}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Prepositions */}
              {section.content.prepositions && (
                <div className="bg-pink-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-pink-800 mb-4">🔗 Prepositions</h3>
                  <div className="space-y-4">
                    {section.content.prepositions.map((prep, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-pink-400">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-bold text-pink-700">{prep.preposition}</span>
                          <span className="text-sm text-pink-600 bg-pink-100 px-2 py-1 rounded">{prep.case}</span>
                        </div>
                        <p className="text-sm text-slate-600 mb-2">{prep.example_english}</p>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-slate-900">{prep.example_german}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(prep.example_german))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(prep.example_german));
                            }}
                            className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition"
                          >
                            <Volume2 size={12} className="text-pink-600" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Transformations */}
              {section.content.groups && (
                <div className="bg-pink-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-pink-800 mb-4">🔄 Summary of Key Transformations</h3>
                  <div className="space-y-4">
                    {section.content.groups.map((group, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-pink-400">
                        <h4 className="font-bold text-pink-700 mb-3">{group.title}</h4>
                        {group.note && (
                          <p className="text-sm text-slate-500 italic mb-3">{group.note}</p>
                        )}
                        <div className="space-y-2">
                          {group.transformations.map((trans, j) => (
                            <div key={j} className="flex justify-between items-center">
                              <span className="text-sm text-slate-600">{trans.form}:</span>
                              <span className="font-bold text-slate-900">{trans.pronoun}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Practical Usage */}
              {section.id === 'practical_usage' && section.content.examples && (
                <div className="bg-pink-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-pink-800 mb-4">💬 Practical Usage: "How are you?"</h3>
                  <p className="text-sm sm:text-base text-slate-700 mb-4">{section.description}</p>
                  <div className="space-y-3">
                    {section.content.examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-3 sm:p-4 border-l-4 border-pink-400">
                        <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-4">
                          <div className="flex flex-col items-start gap-1 flex-1 w-full">
                            <p className="text-sm sm:text-base font-bold text-slate-900 leading-tight w-full">
                              {example.german}
                            </p>
                            <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed w-full">
                              {example.english}
                            </p>
                            {example.note && (
                              <p className="text-[10px] sm:text-xs text-slate-500 italic border-t border-pink-50/50 pt-1 mt-1 w-full">
                                {example.note}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center justify-between w-full md:w-auto md:justify-end mt-2 md:mt-0 border-t md:border-t-0 border-pink-100/50 pt-2 md:pt-0">
                            <span className="md:hidden text-[10px] font-bold text-pink-600 uppercase tracking-wider">Listen to pronunciation</span>
                            <button
                              onMouseEnter={() => playGermanText(extractGermanText(example.german))}
                              onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                playGermanText(extractGermanText(example.german));
                              }}
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition flex-shrink-0 shadow-sm"
                            >
                              <Volume2 size={16} className="text-pink-600 sm:size-5" />
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
