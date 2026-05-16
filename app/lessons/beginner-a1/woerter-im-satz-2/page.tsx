'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';
import ResponsiveTable from '@/components/responsive-table';

interface ExampleData {
  german: string;
  translation: string;
  explanation: string;
}

interface CategoryData {
  category: string;
  description: string;
  rule: string;
  examples: ExampleData[];
}

interface SectionContent {
  examples_table?: {
    headers: string[];
    rows: string[][];
  };
  categories?: CategoryData[];
  example_intro?: string;
  examples?: {
    german: string;
    translation: string;
  }[];
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

export default function WoerterImSatz2Lesson() {
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
      const response = await fetch(`/json_files/a1_woerter_im_satz_2_${lang}.json`);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
            <span className="text-2xl">📚</span>
            <span className="text-sm font-medium text-emerald-700">Topic 12 of 20</span>
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

              {/* Examples Table */}
              {section.content.examples_table && (
                <div className="bg-emerald-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-emerald-800 mb-4">📋 Examples</h3>
                  <ResponsiveTable
                    headers={section.content.examples_table.headers}
                    rows={section.content.examples_table.rows}
                    themeColor="emerald"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}

              {/* Categories */}
              {section.content.categories && (
                <div className="space-y-6">
                  {section.content.categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="bg-emerald-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-emerald-800 mb-4">
                        {category.category}
                      </h3>
                      <p className="text-slate-700 mb-4">{category.description}</p>
                      
                      {/* Rule */}
                      <div className="bg-emerald-100 rounded-lg p-4 mb-4">
                        <p className="font-medium text-emerald-800">{category.rule}</p>
                      </div>

                      {/* Examples */}
                      {category.examples && (
                        <div className="space-y-4">
                          {category.examples.map((example, i) => (
                            <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-emerald-400">
                              <div className="flex items-center gap-2 mb-2">
                                <p className="font-bold text-emerald-700">{example.german}</p>
                                <button
                                  onMouseEnter={() => playGermanText(example.german)}
                                  onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    playGermanText(example.german);
                                  }}
                                  className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition"
                                >
                                  <Volume2 size={16} className="text-emerald-600" />
                                </button>
                              </div>
                              <p className="text-sm text-slate-600 mb-2">{example.translation}</p>
                              <p className="text-sm text-slate-500 italic">{example.explanation}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Example Intro */}
              {section.content.example_intro && (
                <div className="bg-emerald-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-emerald-800 mb-4">📝 Example</h3>
                  <p className="text-slate-700 font-medium mb-4">{section.content.example_intro}</p>
                  
                  {/* Examples */}
                  {section.content.examples && (
                    <div className="space-y-3">
                      {section.content.examples.map((example, i) => (
                        <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-emerald-400">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-emerald-700">{example.german}</p>
                              <button
                                onMouseEnter={() => playGermanText(example.german)}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(example.german);
                                }}
                                className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition"
                              >
                                <Volume2 size={16} className="text-emerald-600" />
                              </button>
                            </div>
                            <span className="text-sm text-emerald-600 font-medium">{example.translation}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Note */}
              {section.content.note && (
                <div className="bg-emerald-50 rounded-xl p-6 mb-6">
                  <p className="text-sm font-medium text-emerald-800">💡 {section.content.note}</p>
                </div>
              )}

              {/* Summary Table */}
              {section.content.summary_table && (
                <div className="bg-emerald-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-emerald-800 mb-4">📊 Quick Reference Summary Table</h3>
                  <p className="text-sm text-emerald-700 mb-4">{section.description}</p>
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
