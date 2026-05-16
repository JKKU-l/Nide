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
  verb?: string;
  meaning?: string;
  example?: string;
  german?: string;
  english?: string;
}

interface SectionContent {
  table?: TableData;
  examples?: Example[];
  note?: string;
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

export default function SeinHabenBesondereVerbenLesson() {
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
      const response = await fetch(`/json_files/a1_sein_haben_besondere_verben_${lang}.json`);
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
    section.content.examples?.some(ex => 
      (ex.german || ex.example || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ex.english || '').toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-2xl">🔧</span>
            <span className="text-sm font-medium text-orange-700">Topic 3 of 20</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 break-words leading-tight">
            {lessonData?.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            {lessonData?.subtitle}
          </p>
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
                        const isGermanExample = j === 3 && typeof cell === 'string' && cell.includes('('); // Example column
                        const isGermanVerb = j >= 1 && j <= 4 && typeof cell === 'string' && cell.length > 0 && !cell.includes('('); // Verb columns
                        
                        if (isGermanExample) {
                          const [german, translation] = cell.split('(');
                          const cleanGerman = german.trim();
                          const cleanTranslation = translation.replace(')', '').trim();
                          
                          return (
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2 sm:gap-4">
                              <div className="flex flex-col items-start gap-0.5 flex-1 w-full">
                                <span className="text-sm sm:text-base font-bold text-slate-900 leading-tight w-full">
                                  {cleanGerman}
                                </span>
                                <span className="text-xs sm:text-sm text-slate-500 italic leading-relaxed w-full">
                                  {cleanTranslation}
                                </span>
                              </div>
                              <div className="flex items-center justify-between w-full sm:w-auto mt-1 sm:mt-0 border-t sm:border-t-0 border-orange-100/50 pt-1 sm:pt-0">
                                <span className="sm:hidden text-[10px] font-bold text-orange-600 uppercase tracking-wider">Listen</span>
                                <button
                                  onMouseEnter={() => playGermanText(cleanGerman)}
                                  onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    playGermanText(cleanGerman);
                                  }}
                                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition flex-shrink-0"
                                >
                                  <Volume2 size={12} className="text-orange-600" />
                                </button>
                              </div>
                            </div>
                          );
                        } else if (isGermanVerb) {
                          return (
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2 sm:gap-4">
                              <span className="text-sm sm:text-base font-bold text-orange-700 leading-tight flex-1 w-full">
                                {cell}
                              </span>
                              <div className="flex items-center justify-between w-full sm:w-auto mt-1 sm:mt-0 border-t sm:border-t-0 border-orange-100/50 pt-1 sm:pt-0">
                                <span className="sm:hidden text-[10px] font-bold text-orange-600 uppercase tracking-wider">Listen</span>
                                <button
                                  onMouseEnter={() => playGermanText(cell)}
                                  onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    playGermanText(cell);
                                  }}
                                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition flex-shrink-0"
                                >
                                  <Volume2 size={12} className="text-orange-600" />
                                </button>
                              </div>
                            </div>
                          );
                        }
                        return cell;
                      })
                    )}
                    themeColor="orange"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}

              {/* Note */}
              {section.content.note && (
                <div className="mb-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <p className="text-sm text-amber-800">📝 {section.content.note}</p>
                </div>
              )}

              {/* Examples */}
              {section.content.examples && (
                <div className="space-y-3">
                  {section.content.examples.map((example, i) => (
                    <div key={i} className="bg-white/70 rounded-lg p-3 sm:p-4 border-l-4 border-orange-400">
                      <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-4">
                        <div className="flex flex-col items-start gap-1 flex-1 w-full">
                          {example.verb && (
                            <p className="text-xs sm:text-sm font-bold text-orange-700 mb-1 uppercase tracking-wider">
                              {example.verb}
                            </p>
                          )}
                          {example.meaning && (
                            <p className="text-xs sm:text-sm text-slate-700 font-medium mb-1">
                              {example.meaning}
                            </p>
                          )}
                          <div className="w-full">
                            <p className="text-sm sm:text-base font-bold text-slate-900 leading-tight w-full">
                              {example.german || example.example}
                            </p>
                            <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mt-0.5 w-full">
                              {example.english}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full md:w-auto md:justify-end mt-2 md:mt-0 border-t md:border-t-0 border-orange-100/50 pt-2 md:pt-0">
                          <span className="md:hidden text-[10px] font-bold text-orange-600 uppercase tracking-wider">Listen to pronunciation</span>
                          <button
                            onMouseEnter={() => playGermanText((example.german || example.example) || '')}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText((example.german || example.example) || '');
                            }}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition flex-shrink-0 shadow-sm"
                          >
                            <Volume2 size={16} className="text-orange-600 sm:size-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
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

