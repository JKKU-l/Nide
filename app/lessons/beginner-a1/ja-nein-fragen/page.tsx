'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';
import ResponsiveTable from '@/components/responsive-table';

interface CategoryData {
  category: string;
  description: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
  examples?: {
    question: string;
    answer: string;
  }[];
}

interface SectionContent {
  categories?: CategoryData[];
  note?: string;
  summary_table?: {
    headers: string[];
    rows: string[][];
  };
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

export default function JaNeinFragenLesson() {
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
      const response = await fetch(`/json_files/a1_ja_nein_fragen_${lang}.json`);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-4">
            <span className="text-2xl">👍👎</span>
            <span className="text-sm font-medium text-teal-700">Topic 10 of 20</span>
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

              {/* Categories */}
              {section.content.categories && (
                <div className="space-y-6">
                  {section.content.categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="bg-teal-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-teal-800 mb-4">
                        {categoryIndex + 1}. {category.category}
                      </h3>
                      <p className="text-slate-700 mb-4">{category.description}</p>

                      {/* Table */}
                      {category.table && (
                        <ResponsiveTable
                          headers={category.table.headers}
                          rows={category.table.rows}
                          themeColor="emerald"
                          mobileCardTitleIndex={0}
                        />
                      )}

                      {/* Examples */}
                      {category.examples && (
                        <div className="mt-4 space-y-3">
                          {category.examples.map((example, i) => (
                            <div key={i} className="bg-white/70 rounded-lg p-3 sm:p-4 border-l-4 border-teal-400">
                              <div className="flex flex-col gap-3">
                                {/* Question Row */}
                                <div className="flex items-start justify-between w-full gap-4">
                                  <div className="flex flex-col items-start gap-1 flex-1">
                                    <span className="text-[10px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider">Question</span>
                                    <p className="text-sm sm:text-base font-medium text-slate-900 leading-tight">
                                      {example.question}
                                    </p>
                                  </div>
                                  <button
                                    onMouseEnter={() => playGermanText(example.question)}
                                    onClick={(e: React.MouseEvent) => {
                                      e.stopPropagation();
                                      playGermanText(example.question);
                                    }}
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-100 flex items-center justify-center hover:bg-teal-200 transition flex-shrink-0 shadow-sm"
                                  >
                                    <Volume2 size={16} className="text-teal-600 sm:size-5" />
                                  </button>
                                </div>
                                {/* Answer Row */}
                                <div className="flex flex-col items-start gap-1 pt-2 border-t border-teal-50">
                                  <span className="text-[10px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider">Answer</span>
                                  <p className="text-sm sm:text-base text-slate-600 italic leading-relaxed">
                                    {example.answer}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Note */}
              {section.content.note && (
                <div className="bg-teal-50 rounded-xl p-6 mb-6">
                  <p className="text-sm font-medium text-teal-800">💡 {section.content.note}</p>
                </div>
              )}

              {/* Summary Table */}
              {section.content.summary_table && (
                <div className="bg-teal-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-teal-800 mb-4">📊 Summary Table for Quick Learning</h3>
                  <ResponsiveTable
                    headers={section.content.summary_table.headers}
                    rows={section.content.summary_table.rows}
                    themeColor="emerald"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
