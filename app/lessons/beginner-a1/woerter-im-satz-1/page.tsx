'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';
import ResponsiveTable from '@/components/responsive-table';

interface ExampleData {
  question: string;
}

interface ExampleAnalysisData {
  sentence: string;
  translation: string;
  breakdown: string[];
}

interface SectionContent {
  rules?: string[];
  examples_table?: {
    headers: string[];
    rows: string[][];
  };
  note?: string;
  structure?: string;
  examples?: ExampleData[];
  example_analysis?: ExampleAnalysisData;
  more_examples?: string[];
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

export default function WoerterImSatz1Lesson() {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState('en');
  const [lessonData, setLessonData] = useState<LessonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchLessonData(selectedLang);
  }, [selectedLang]);

  const fetchLessonData = async (lang: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/json_files/a1_woerter_im_satz_1_${lang}.json`);
      const data = await response.json();
      setLessonData(data);
    } catch (error) {
      console.error('Error loading lesson data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredSections = lessonData?.sections.filter((section) =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.rules?.some(rule => rule.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
        <Navbar searchValue={searchQuery} onSearchChange={setSearchQuery} />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300/40 via-white to-orange-300/40">
      <Navbar searchValue={searchQuery} onSearchChange={setSearchQuery} />
      
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
            <span className="text-xl sm:text-2xl">📖</span>
            <span className="text-xs sm:text-sm font-medium text-amber-700">Topic 11 of 20</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 break-words leading-tight">
            {lessonData?.title}
          </h1>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {searchQuery && (
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
              Search Results for "{searchQuery}"
            </h2>
          )}
          {filteredSections && filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <div
                key={section.id}
                className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  {section.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mb-6">{section.description}</p>

                {/* Rules */}
                {section.content.rules && (
                  <div className="bg-amber-50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-bold text-amber-800 mb-4">📋 Rules</h3>
                    <ul className="space-y-3">
                      {section.content.rules.map((rule, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-amber-600 mt-1">•</span>
                          <span className="text-slate-700">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* ... existing section content rendering ... */}

              {/* Examples Table */}
              {section.content.examples_table && (
                <div className="bg-amber-50 rounded-xl p-4 sm:p-6 mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-amber-800 mb-4">📝 Examples</h3>
                  <ResponsiveTable
                    headers={section.content.examples_table.headers}
                    rows={section.content.examples_table.rows}
                    themeColor="amber"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}

              {/* Structure */}
              {section.content.structure && (
                <div className="bg-amber-50 rounded-xl p-4 sm:p-6 mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-amber-800 mb-4">🏗️ Structure</h3>
                  <p className="text-sm sm:text-base text-slate-700 font-medium">{section.content.structure}</p>
                </div>
              )}

              {/* Examples */}
              {section.content.examples && (
                <div className="bg-amber-50 rounded-xl p-4 sm:p-6 mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-amber-800 mb-4">💬 Examples</h3>
                  <div className="space-y-3">
                    {section.content.examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-3 sm:p-4 border-l-4 border-amber-400">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm sm:text-base font-medium text-slate-900">{example.question}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(example.question))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(example.question));
                            }}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 transition"
                          >
                            <Volume2 size={14} className="text-amber-600 sm:size-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Example Analysis */}
              {section.content.example_analysis && (
                <div className="bg-amber-50 rounded-xl p-4 sm:p-6 mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-amber-800 mb-4">🔍 Example Analysis</h3>
                  <div className="space-y-4">
                    <div className="bg-white/70 rounded-lg p-3 sm:p-4">
                      <p className="text-xs sm:text-sm font-bold text-amber-700 mb-2 uppercase tracking-wider">Sentence:</p>
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-sm sm:text-base text-slate-900 font-medium">{section.content.example_analysis?.sentence}</p>
                        <button
                          onMouseEnter={() => playGermanText(extractGermanText(section.content.example_analysis?.sentence || ''))}
                          onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            playGermanText(extractGermanText(section.content.example_analysis?.sentence || ''));
                          }}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 transition"
                        >
                          <Volume2 size={14} className="text-amber-600 sm:size-4" />
                        </button>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mb-3 italic">{section.content.example_analysis?.translation}</p>
                      <div className="space-y-2 pt-2 border-t border-amber-100">
                        <p className="text-xs sm:text-sm font-bold text-amber-700">Breakdown:</p>
                        {section.content.example_analysis?.breakdown?.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-amber-600 mt-1">•</span>
                            <span className="text-sm text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* More Examples */}
              {section.content.more_examples && (
                <div className="bg-amber-50 rounded-xl p-4 sm:p-6 mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-amber-800 mb-4">📚 More Examples</h3>
                  <div className="space-y-3">
                    {section.content.more_examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-3 sm:p-4 border-l-4 border-amber-400">
                        <div className="flex items-center gap-2">
                          <p className="text-sm sm:text-base text-slate-900">{example}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(example))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(example));
                            }}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 transition"
                          >
                            <Volume2 size={14} className="text-amber-600 sm:size-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Note */}
              {section.content.note && (
                <div className="bg-amber-50 rounded-xl p-6 mb-6">
                  <p className="text-sm font-medium text-amber-800">💡 {section.content.note}</p>
                </div>
              )}

              {/* Summary Table */}
              {section.content.summary_table && (
                <div className="bg-amber-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-amber-800 mb-4">📊 Summary Table of Word Order</h3>
                  <p className="text-sm text-amber-700 mb-4">{section.description}</p>
                  <ResponsiveTable
                    headers={section.content.summary_table.headers}
                    rows={section.content.summary_table.rows}
                    themeColor="amber"
                    mobileCardTitleIndex={0}
                  />
                  {section.content.note && (
                    <div className="mt-4 p-3 bg-amber-100 rounded-lg">
                      <p className="text-sm text-amber-800">{section.content.note}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white/40 backdrop-blur-md rounded-3xl border border-white/20">
            <p className="text-slate-600 text-lg">No sections found matching your search.</p>
          </div>
        )}
      </div>
      </main>
    </div>
  );
}
