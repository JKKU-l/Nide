'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';

interface WHPositionTable {
  title: string;
  headers: string[];
  rows: string[][];
}

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
  wh_position_table?: WHPositionTable;
  key_rule?: string;
  categories?: CategoryData[];
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

export default function FragenMitFragewortLesson() {
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
      const response = await fetch(`/json_files/a1_fragen_mit_fragewort_${lang}.json`);
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

  const shouldShowAudioForTableCell = (header: string, cell: string) => {
    if (!cell) return false;
    const germanText = extractGermanText(cell);
    if (!germanText) return false;
    return header === 'Form' || header === 'Question Word' || header === 'Example Question' || header === 'Example Answer';
  };

  const selectedLanguage = languages.find(l => l.code === selectedLang);

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
            <span className="text-2xl">❓</span>
            <span className="text-sm font-medium text-purple-700">Topic 9 of 20</span>
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

              {/* WH Position Table */}
              {section.content.wh_position_table && (
                <div className="bg-purple-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-purple-800 mb-4">📊 W-Question Position Chart</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white/70 rounded-lg overflow-hidden">
                      <thead className="bg-purple-100">
                        <tr>
                          {section.content.wh_position_table.headers.map((header, i) => (
                            <th key={i} className="px-4 py-3 text-left font-bold text-slate-700">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.content.wh_position_table.rows.map((row, i) => (
                          <tr key={i} className="border-t border-purple-100">
                            {row.map((cell, j) => {
                              const isGermanQuestion = j === 0 && cell.includes('?');
                              const isGermanVerb = j === 1 && cell.length > 0;
                              return (
                                <td key={j} className="px-4 py-3 text-slate-700">
                                  {isGermanQuestion || isGermanVerb ? (
                                    <div className="flex items-center gap-2">
                                      <span className="font-bold text-purple-700">{cell}</span>
                                      <button
                                        onMouseEnter={() => playGermanText(cell)}
                                        onClick={(e: React.MouseEvent) => {
                                          e.stopPropagation();
                                          playGermanText(cell);
                                        }}
                                        className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition"
                                      >
                                        <Volume2 size={12} className="text-purple-600" />
                                      </button>
                                    </div>
                                  ) : (
                                    cell
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {section.content.key_rule && (
                    <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
                      <p className="text-sm font-medium text-purple-800">
                        <strong>Key Rule:</strong> {section.content.key_rule}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Categories */}
              {section.content.categories && (
                <div className="space-y-6">
                  {section.content.categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="bg-purple-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-purple-800 mb-4">
                        {category.category}
                      </h3>
                      <p className="text-slate-700 mb-4">{category.description}</p>

                      {/* Table */}
                      {category.table && (
                        <div className="overflow-x-auto">
                          <table className="w-full bg-white/70 rounded-lg overflow-hidden">
                            <thead className="bg-purple-100">
                              <tr>
                                {category.table.headers.map((header, i) => (
                                  <th key={i} className="px-4 py-3 text-left font-bold text-slate-700">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {category.table.rows.map((row, i) => (
                                <tr key={i} className="border-t border-purple-100">
                                  {row.map((cell, j) => {
                                    const header = category.table?.headers[j] ?? '';
                                    const audioText = extractGermanText(cell);
                                    const showAudio = shouldShowAudioForTableCell(header, cell);
                                    return (
                                      <td key={j} className="px-4 py-3 text-slate-700">
                                        {showAudio ? (
                                          <div className="flex items-center gap-2">
                                            <span>{cell}</span>
                                            <button
                                              onMouseEnter={() => playGermanText(audioText)}
                                              onClick={(e: React.MouseEvent) => {
                                                e.stopPropagation();
                                                playGermanText(audioText);
                                              }}
                                              className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition"
                                            >
                                              <Volume2 size={12} className="text-purple-600" />
                                            </button>
                                          </div>
                                        ) : (
                                          cell
                                        )}
                                      </td>
                                    );
                                  })}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Examples */}
                      {category.examples && (
                        <div className="mt-4 space-y-3">
                          {category.examples.map((example, i) => {
                            const questionAudio = extractGermanText(example.question);
                            return (
                              <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-purple-400">
                                <div className="flex items-center gap-2 mb-1">
                                  <p className="font-medium text-purple-700">{example.question}</p>
                                  <button
                                    onMouseEnter={() => playGermanText(questionAudio)}
                                    onClick={(e: React.MouseEvent) => {
                                      e.stopPropagation();
                                      playGermanText(questionAudio);
                                    }}
                                    className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition"
                                  >
                                    <Volume2 size={16} className="text-purple-600" />
                                  </button>
                                </div>
                                <p className="text-sm text-slate-600">{example.answer}</p>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Summary Table */}
              {section.content.summary_table && (
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-purple-800 mb-4">📊 Summary Table for Students</h3>
                  <p className="text-sm text-purple-700 mb-4">{section.description}</p>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white/70 rounded-lg overflow-hidden">
                      <thead className="bg-purple-100">
                        <tr>
                          {section.content.summary_table.headers.map((header, i) => (
                            <th key={i} className="px-4 py-3 text-left font-bold text-slate-700">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.content.summary_table.rows.map((row, i) => (
                          <tr key={i} className="border-t border-purple-100">
                            {row.map((cell, j) => {
                              const isGermanWord = j === 0 && cell.length > 0;
                              return (
                                <td key={j} className="px-4 py-3 text-slate-700">
                                  {isGermanWord ? (
                                    <div className="flex items-center gap-2">
                                      <span className="font-bold text-purple-700">{cell}</span>
                                      <button
                                        onMouseEnter={() => playGermanText(cell)}
                                        onClick={(e: React.MouseEvent) => {
                                          e.stopPropagation();
                                          playGermanText(cell);
                                        }}
                                        className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition"
                                      >
                                        <Volume2 size={12} className="text-purple-600" />
                                      </button>
                                    </div>
                                  ) : (
                                    cell
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

