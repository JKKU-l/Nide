'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';

interface StructureData {
  parts?: string[];
}

interface ExampleData {
  verb?: string;
  prefix?: string;
  main_verb?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
  translation?: string;
}

interface PrefixData {
  prefix: string;
  example: string;
}

interface DetailedExample {
  verb: string;
  german_sentence: string;
  english_translation: string;
  logic_explanation: string;
}

interface SectionContent {
  description?: string;
  structure?: StructureData;
  example?: ExampleData;
  prefixes?: PrefixData[];
  rule?: {
    modal: string;
    separable: string;
  };
  example?: {
    combination: string;
    sentence: string;
    translation: string;
  };
  examples?: string[];
  examples_table?: {
    headers: string[];
    rows: string[][];
  };
  summary_table?: {
    headers: string[];
    rows: string[][];
  };
  examples?: {
    verb: string[];
    explanation: string;
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

export default function TrennbareVerbenLesson() {
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
      const response = await fetch(`/json_files/a1_trennbare_verben_${lang}.json`);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-4">
            <span className="text-2xl">✂️</span>
            <span className="text-sm font-medium text-indigo-700">Topic 7 of 20</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            {lessonData?.title}
          </h1>
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

              {/* Description */}
              {section.content.description && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <p className="text-slate-700">{section.content.description}</p>
                </div>
              )}

              {/* Structure */}
              {section.content.structure && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">🏗️ Structure</h3>
                  <ul className="space-y-3">
                    {section.content.structure.parts?.map((part, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-indigo-600 mt-1">{i + 1}.</span>
                        <span className="text-slate-700">{part}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Example */}
              {section.content.example && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">📝 Example</h3>
                  {section.content.example.verb && (
                    <p className="font-bold text-indigo-700 mb-2">{section.content.example.verb}</p>
                  )}
                  {section.content.example.prefix && (
                    <p className="text-sm text-slate-600 mb-2">
                      <strong>Prefix:</strong> {section.content.example.prefix}
                    </p>
                  )}
                  {section.content.example.main_verb && (
                    <p className="text-sm text-slate-600 mb-2">
                      <strong>Main Verb:</strong> {section.content.example.main_verb}
                    </p>
                  )}
                  {section.content.example.table && (
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white/70 rounded-lg overflow-hidden">
                        <thead className="bg-indigo-100">
                          <tr>
                            {section.content.example.table.headers.map((header, i) => (
                              <th key={i} className="px-4 py-3 text-left font-bold text-slate-700">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.content.example.table.rows.map((row, i) => (
                            <tr key={i} className="border-t border-indigo-100">
                              {row.map((cell, j) => (
                                <td key={j} className="px-4 py-3 text-slate-700">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {section.content.example.translation && (
                    <p className="text-sm text-slate-600 mt-2">
                      <strong>English Translation:</strong> {section.content.example.translation}
                    </p>
                  )}
                </div>
              )}

              {/* Prefixes */}
              {section.content.prefixes && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">🔠 Common Prefixes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.content.prefixes.map((prefix, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-3">
                        <p className="font-bold text-indigo-700">{prefix.prefix}</p>
                        <p className="text-sm text-slate-600">{prefix.example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Rule */}
              {section.content.rule && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">⚡ Rule</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span className="text-slate-700">{section.content.rule.modal}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span className="text-slate-700">{section.content.rule.separable}</span>
                    </div>
                  </div>
                  {section.content.example && (
                    <div className="mt-4 p-3 bg-white/70 rounded-lg border border-indigo-200">
                      <p className="text-sm text-slate-700 mb-2">
                        <strong>Example:</strong> {section.content.example.combination}
                      </p>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-slate-900">{section.content.example.sentence}</p>
                        <button
                          onMouseEnter={() => playGermanText(section.content.example.sentence)}
                          onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            playGermanText(section.content.example.sentence);
                          }}
                          className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition"
                        >
                          <Volume2 size={16} className="text-indigo-600" />
                        </button>
                      </div>
                      <p className="text-sm text-slate-600">{section.content.example.translation}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Pronunciation */}
              {section.content.examples && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">🗣️ Pronunciation</h3>
                  <p className="text-sm text-indigo-700 mb-4">In separable verbs, stress (accent) is always on the prefix.</p>
                  <div className="flex flex-wrap gap-4">
                    {section.content.examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-3">
                        <p className="font-bold text-indigo-700">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Examples Table */}
              {section.content.examples_table && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">📋 Detailed Examples</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white/70 rounded-lg overflow-hidden">
                      <thead className="bg-indigo-100">
                        <tr>
                          {section.content.examples_table.headers.map((header, i) => (
                            <th key={i} className="px-4 py-3 text-left font-bold text-slate-700">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.content.examples_table.rows.map((row, i) => (
                          <tr key={i} className="border-t border-indigo-100">
                            {row.map((cell, j) => (
                              <td key={j} className="px-4 py-3 text-slate-700">
                                {j === 1 ? (
                                  <div className="flex items-center gap-2">
                                    <span>{cell}</span>
                                    <button
                                      onMouseEnter={() => playGermanText(cell)}
                                      onClick={(e: React.MouseEvent) => {
                                        e.stopPropagation();
                                        playGermanText(cell);
                                      }}
                                      className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition"
                                    >
                                      <Volume2 size={12} className="text-indigo-600" />
                                    </button>
                                  </div>
                                ) : (
                                  cell
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Summary Table */}
              {section.content.summary_table && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">📊 Summary Table</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white/70 rounded-lg overflow-hidden">
                      <thead className="bg-indigo-100">
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
                          <tr key={i} className="border-t border-indigo-100">
                            {row.map((cell, j) => (
                              <td key={j} className="px-4 py-3 text-slate-700">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Examples */}
              {section.content.examples && section.content.explanation && (
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4">💡 Why do we use this?</h3>
                  <p className="text-slate-700 mb-4">{section.content.explanation}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.content.examples.map((example, i) => (
                      <div key={i} className="bg-white/70 rounded-lg p-3">
                        <p className="font-bold text-indigo-700">{example}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 mt-4">
                    This allows German to create many specific meanings from one simple base verb.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

