'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';
import ResponsiveTable from '@/components/responsive-table';

interface FormsData {
  title: string;
  form_1: string;
  form_2: string;
  form_3: string;
}

interface FormationTableData {
  headers: string[];
  rows: string[][];
}

interface PolitenessData {
  headers: string[];
  rows: string[][];
}

interface SectionContent {
  forms?: FormsData;
  formation_table?: FormationTableData;
  special_verbs_table?: {
    headers: string[];
    rows: string[][];
  };
  politeness_table?: PolitenessData;
  practical_examples_table?: {
    headers: string[];
    rows: string[][];
  };
  checklist?: string[];
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

export default function ImperativLesson() {
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
      const response = await fetch(`/json_files/a1_imperativ_${lang}.json`);
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
    return text.includes('(') ? text.split('(')[0].trim() : text.trim();
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
        <div className="text-center mb-10 px-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-4">
            <span className="text-xl sm:text-2xl">📢</span>
            <span className="text-xs sm:text-sm font-medium text-red-700">Topic 8 of 20</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 break-words">
            {lessonData?.title}
          </h1>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {lessonData?.sections?.map((section) => (
            <div
              key={section.id}
              className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                {section.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-6">{section.description}</p>

              {/* Forms */}
              {section.content.forms && (
                <div className="bg-red-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-red-800 mb-4">📝 Three Main Forms</h3>
                  <p className="text-sm font-medium text-red-700 mb-4">{section.content.forms.title}</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">1.</span>
                      <span className="text-slate-700">{section.content.forms.form_1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">2.</span>
                      <span className="text-slate-700">{section.content.forms.form_2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">3.</span>
                      <span className="text-slate-700">{section.content.forms.form_3}</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Formation Table */}
              {section.content.formation_table && (
                <div className="bg-red-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-red-800 mb-4">🏗️ How to Form Imperative</h3>
                  <ResponsiveTable
                    headers={section.content.formation_table.headers}
                    rows={section.content.formation_table.rows?.map((row: string[]) =>
                      row?.map((cell: string, j: number) => {
                        const audioText = extractGermanText(cell);
                        const isGermanExample = j === 3 && audioText.includes('!');
                        if (isGermanExample) {
                          return (
                            <div className="flex items-center gap-2">
                              <span>{cell}</span>
                              <button
                                onMouseEnter={() => playGermanText(audioText)}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(audioText);
                                }}
                                className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition"
                              >
                                <Volume2 size={12} className="text-red-600" />
                              </button>
                            </div>
                          );
                        }
                        return cell;
                      })
                    ) || []}
                    themeColor="red"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}

              {/* Special Verbs Table */}
              {section.content.special_verbs_table && (
                <div className="bg-red-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-red-800 mb-4">🔠 Specialized Verb Categories</h3>
                  <ResponsiveTable
                    headers={section.content.special_verbs_table.headers}
                    rows={section.content.special_verbs_table.rows?.map((row: string[]) =>
                      row?.map((cell: string, j: number) => {
                        const audioText = extractGermanText(cell);
                        const isGermanVerb = [3, 4, 5].includes(j) && audioText.includes('!');
                        if (isGermanVerb) {
                          return (
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-red-700">{cell}</span>
                              <button
                                onMouseEnter={() => playGermanText(audioText)}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(audioText);
                                }}
                                className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition"
                              >
                                <Volume2 size={12} className="text-red-600" />
                              </button>
                            </div>
                          );
                        }
                        return cell;
                      })
                    ) || []}
                    themeColor="red"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}

              {/* Politeness Table */}
              {section.content.politeness_table && (
                <div className="bg-red-50 rounded-xl p-4 sm:p-6 mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-red-800 mb-4">🤝 Softening Commands (Politeness)</h3>
                  <ResponsiveTable
                    headers={section.content.politeness_table.headers}
                    rows={section.content.politeness_table.rows?.map((row: string[]) =>
                      row?.map((cell: string, j: number) => {
                        const audioText = extractGermanText(cell);
                        const isGermanExample = j === 2 && audioText.includes('!');
                        if (isGermanExample) {
                          return (
                            <div className="flex items-center gap-2">
                              <span className="text-sm sm:text-base font-medium text-slate-900">{cell}</span>
                              <button
                                onMouseEnter={() => playGermanText(audioText)}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(audioText);
                                }}
                                className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition"
                              >
                                <Volume2 size={12} className="text-red-600" />
                              </button>
                            </div>
                          );
                        }
                        return <span className="text-sm sm:text-base text-slate-700">{cell}</span>;
                      })
                    ) || []}
                    themeColor="red"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}

              {/* Practical Examples Table */}
              {section.content.practical_examples_table && (
                <div className="bg-red-50 rounded-xl p-4 sm:p-6 mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-red-800 mb-4">🌍 Practical Examples for Everyday Situations</h3>
                  <ResponsiveTable
                    headers={section.content.practical_examples_table.headers}
                    rows={section.content.practical_examples_table.rows?.map((row: string[]) =>
                      row?.map((cell: string, j: number) => {
                        const audioText = extractGermanText(cell);
                        const isGermanSentence = j === 3 && audioText.includes('!');
                        if (isGermanSentence) {
                          return (
                            <div className="flex items-center gap-2">
                              <span className="text-sm sm:text-base font-medium text-slate-900">{cell}</span>
                              <button
                                onMouseEnter={() => playGermanText(audioText)}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(audioText);
                                }}
                                className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition"
                              >
                                <Volume2 size={12} className="text-red-600" />
                              </button>
                            </div>
                          );
                        }
                        return <span className="text-sm sm:text-base text-slate-700">{cell}</span>;
                      })
                    ) || []}
                    themeColor="red"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}

              {/* Summary Checklist */}
              {section.content.checklist && (
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-red-800 mb-4">📋 Summary Checklist for Students</h3>
                  <ul className="space-y-3">
                    {section.content.checklist?.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">•</span>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

