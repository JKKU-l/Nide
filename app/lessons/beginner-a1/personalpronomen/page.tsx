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
  gender?: string;
  example?: string;
  explanation?: string;
  rule?: string;
  german?: string;
  english?: string;
  original?: string;
  replacement?: string;
  type?: string;
  pronoun?: string;
  usage?: string;
}

interface SectionContent {
  table?: TableData;
  examples?: Example[];
  rules?: Example[];
  conversational_context?: {
    title: string;
    examples: Example[];
  };
  replacing_names_objects?: {
    title: string;
    examples: Example[];
  };
  guidelines?: Example[];
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

export default function PersonalPronounsLesson() {
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
      const response = await fetch(`/json_files/a1_personalpronomen_${lang}.json`);
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
              className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white/60 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/80 transition"
            >
              <Globe size={18} />
              <span className="mr-0.5 sm:mr-1">{selectedLanguage?.flag}</span>
              <span className="text-sm sm:text-base">{selectedLanguage?.name}</span>
            </button>

            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl border border-white/30 z-50">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-xl sm:text-2xl">👤</span>
            <span className="text-xs sm:text-sm font-medium text-blue-700">Topic 1 of 20</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 break-words leading-tight">
            {lessonData?.title}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
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
                        const germanWord = cell.includes('(') ? cell.split('(')[0].trim() : cell;
                        const isGermanPronoun = j > 0 && cell.includes('(');
                        if (cell.includes('(')) {
                          return (
                            <div className="flex items-center gap-2">
                              <span>
                                <strong>{cell.split('(')[0]}</strong>
                                <span className="text-slate-500">({cell.split('(')[1]}</span>
                              </span>
                              {isGermanPronoun && (
                                <button
                                  onMouseEnter={() => playGermanText(germanWord)}
                                  onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    playGermanText(germanWord);
                                  }}
                                  className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition ml-1"
                                >
                                  <Volume2 size={12} className="text-blue-600" />
                                </button>
                              )}
                            </div>
                          );
                        }
                        return cell;
                      })
                    )}
                    themeColor="blue"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}

              {/* Examples Grid */}
              {section.content.examples && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.content.examples.map((example, i) => (
                    <div key={i} className="bg-white/50 rounded-xl p-4">
                      {example.gender && (
                        <p className="text-sm font-bold text-blue-600 mb-2">{example.gender}</p>
                      )}
                      {example.example && (
                        <div className="flex items-center gap-2">
                          <p className="text-lg font-medium text-slate-900">{example.example}</p>
                          <button
                            onMouseEnter={() => playGermanText(example.example?.split('→')[0]?.trim() || '')}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(example.example?.split('→')[0]?.trim() || '');
                            }}
                            className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition"
                          >
                            <Volume2 size={16} className="text-blue-600" />
                          </button>
                        </div>
                      )}
                      {example.explanation && (
                        <p className="text-sm text-slate-600 mt-1">{example.explanation}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Rules */}
              {section.content.rules && (
                <div className="space-y-4">
                  {section.content.rules.map((rule, i) => (
                    <div key={i} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                      <p className="font-bold text-slate-900 mb-1">{rule.rule}</p>
                      <p className="text-sm text-slate-600">{rule.example}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Conversational Examples */}
              {section.content.conversational_context && (
                <div className="bg-white/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    {section.content.conversational_context.title}
                  </h3>
                  <div className="space-y-3">
                    {section.content.conversational_context.examples.map((ex, i) => (
                      <div key={i} className="flex items-center justify-between bg-white rounded-lg p-3">
                        <div className="flex items-center gap-3">
                          <p className="font-medium text-slate-900">{ex.german}</p>
                          <button
                            onMouseEnter={() => playGermanText(ex.german || '')}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(ex.german || '');
                            }}
                            className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition"
                          >
                            <Volume2 size={16} className="text-blue-600" />
                          </button>
                        </div>
                        <p className="text-sm text-slate-600">{ex.english}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Replacing Names */}
              {section.content.replacing_names_objects && (
                <div className="bg-white/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    {section.content.replacing_names_objects.title}
                  </h3>
                  <div className="space-y-3">
                    {section.content.replacing_names_objects.examples.map((ex, i) => (
                      <div key={i} className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-slate-400 line-through">{ex.original}</span>
                          <span className="text-slate-400">→</span>
                          <span className="font-bold text-blue-600">{ex.replacement}</span>
                          <button
                            onMouseEnter={() => playGermanText(ex.replacement || '')}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(ex.replacement || '');
                            }}
                            className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition ml-auto"
                          >
                            <Volume2 size={16} className="text-blue-600" />
                          </button>
                        </div>
                        <p className="text-sm text-slate-600">{ex.english}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Guidelines */}
              {section.content.guidelines && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.content.guidelines.map((guide, i) => (
                    <div key={i} className={`rounded-xl p-4 ${guide.type === 'Formal' ? 'bg-purple-50 border border-purple-100' : 'bg-green-50 border border-green-100'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${guide.type === 'Formal' ? 'bg-purple-200 text-purple-700' : 'bg-green-200 text-green-700'}`}>
                          {guide.type}
                        </span>
                      </div>
                      <p className="font-bold text-slate-900 mb-1">{guide.pronoun}</p>
                      <p className="text-sm text-slate-600">{guide.usage}</p>
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

