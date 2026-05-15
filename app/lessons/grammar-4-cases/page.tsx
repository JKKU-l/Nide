'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen, Globe, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface DeclensionRow {
  category: string;
  definite: string;
  indefinite: string;
  no_article: string;
}

interface TranslationItem {
  label: string;
  german: string;
  translation: string;
}

interface ComparisonRow {
  person: string;
  masculine: string;
  neuter: string;
  fem_plural: string;
}

interface RuleItem {
  rule: string;
  german: string;
  translation: string;
}

interface SectionContent {
  declension_table?: {
    title: string;
    headers: string[];
    rows: DeclensionRow[];
  };
  translations?: TranslationItem[];
  key_rule?: string;
  determiners?: string[];
  example?: {
    german: string;
    translation: string;
    note: string;
  };
  personal_pronouns?: {
    title: string;
    description: string;
    singular: string[];
    plural: string[];
  };
  possessive_pronouns?: {
    title: string;
    description: string;
    dependent: {
      label: string;
      explanation: string;
      german: string;
      translation: string;
    };
    independent: {
      label: string;
      explanation: string;
      german: string;
      translation: string;
    };
    comparison_table: {
      title: string;
      headers: string[];
      rows: ComparisonRow[];
    };
    example_dialogue: {
      question: string;
      german: string;
      note: string;
    };
  };
  rules?: RuleItem[];
  note?: string;
}

interface Section {
  id: string;
  title: string;
  description: string;
  content?: any;
}

interface LessonData {
  title: string;
  sections: Section[];
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'jp', name: '日本語', flag: '🇯🇵' },
  { code: 'kr', name: '한국어', flag: '🇰🇷' },
  { code: 'my', name: 'မြန်မာ', flag: '🇲🇲' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
];

const casesTabs = [
  { id: 'nominativ', label: 'Nominativ', emoji: '👤' },
  { id: 'akkusativ', label: 'Akkusativ', emoji: '🎯' },
  { id: 'dativ', label: 'Dativ', emoji: '🎁' },
  { id: 'genitiv', label: 'Genitiv', emoji: '🔑' },
];

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */

export default function Grammar4CasesPage() {
  const router = useRouter();
  const [activeCase, setActiveCase] = useState('nominativ');
  const [selectedLang, setSelectedLang] = useState('en');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [lessonData, setLessonData] = useState<LessonData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLessonData(activeCase, selectedLang);
  }, [activeCase, selectedLang]);

  const fetchLessonData = async (caseId: string, lang: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/json_files/${caseId}_${lang}.json`);
      if (!response.ok) {
        setLessonData(null);
        return;
      }
      const data = await response.json();
      setLessonData(data);
    } catch (error) {
      console.error('Error loading lesson data:', error);
      setLessonData(null);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300/40 via-white to-orange-300/40">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            <BookOpen size={16} />
            Grammar Lesson
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            The 4 German Cases
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Master Nominativ, Akkusativ, Dativ &amp; Genitiv — the backbone of German sentence structure
          </p>
        </div>

        {/* Case Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {casesTabs.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(c.id)}
              className={`relative backdrop-blur-xl border rounded-2xl p-5 shadow-lg transition-all duration-300 text-left group
                ${
                  activeCase === c.id
                    ? 'bg-white/60 border-white/50 scale-[1.03] shadow-2xl ring-2 ring-offset-2 ring-emerald-400'
                    : 'bg-white/30 border-white/20 hover:bg-white/50 hover:shadow-xl hover:scale-[1.02]'
                }`}
            >
              <span className="text-3xl mb-2 block">{c.emoji}</span>
              <h3 className="text-lg font-bold text-slate-900">{c.label}</h3>
            </button>
          ))}
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        ) : !lessonData ? (
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-12 shadow-xl text-center">
            <p className="text-5xl mb-4">🚧</p>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Coming Soon</h2>
            <p className="text-slate-600">
              The {casesTabs.find(c => c.id === activeCase)?.label} lesson in {selectedLanguage?.name} is not yet available.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Lesson Title */}
            <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-black text-slate-900 mb-2">
                {casesTabs.find(c => c.id === activeCase)?.emoji}{' '}
                {lessonData.title}
              </h2>
            </div>

            {/* Sections */}
            {lessonData.sections.map((section) => (
              <div
                key={section.id}
                className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {section.title}
                </h2>
                <p className="text-slate-600 mb-6">{section.description}</p>

                {section.content && (
                  <div className="space-y-6">
                    {/* Questions (Dativ identification) */}
                    {section.content.questions && (
                      <div className="bg-emerald-50/60 rounded-xl p-6 space-y-4">
                        {section.content.questions.map((q: any, i: number) => (
                          <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-emerald-400">
                            <p className="text-sm font-bold text-emerald-700 mb-1">{q.question}</p>
                            <p className="text-sm text-slate-600 mb-2">{q.explanation}</p>
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-bold text-slate-900">{q.german}</p>
                              <button onClick={() => playGermanText(extractGermanText(q.german))} className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition flex-shrink-0"><Volume2 size={12} className="text-emerald-600" /></button>
                            </div>
                            <p className="text-sm text-slate-500 italic">{q.translation}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Declension Table */}
                    {section.content.declension_table && (
                      <div className="bg-emerald-50/60 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-emerald-800 mb-4">
                          📋 {section.content.declension_table.title}
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="w-full bg-white/70 rounded-lg overflow-hidden text-sm">
                            <thead className="bg-emerald-100">
                              <tr>
                                {section.content.declension_table.headers.map((h: any, i: number) => (
                                  <th key={i} className="px-4 py-3 text-left font-bold text-slate-700">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {section.content.declension_table.rows.map((row: any, i: number) => (
                                <tr key={i} className="border-t border-emerald-100">
                                  <td className="px-4 py-3 font-medium text-slate-700">{row.category}</td>
                                  <td className="px-4 py-3 text-slate-900 font-semibold">
                                    <div className="flex items-center gap-1">
                                      {row.definite}
                                      <button
                                        onClick={() => playGermanText(extractGermanText(row.definite))}
                                        className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition flex-shrink-0"
                                      >
                                        <Volume2 size={10} className="text-emerald-600" />
                                      </button>
                                    </div>
                                  </td>
                                  <td className="px-4 py-3 text-slate-900 font-semibold">
                                    <div className="flex items-center gap-1">
                                      {row.indefinite}
                                      <button
                                        onClick={() => playGermanText(extractGermanText(row.indefinite))}
                                        className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition flex-shrink-0"
                                      >
                                        <Volume2 size={10} className="text-emerald-600" />
                                      </button>
                                    </div>
                                  </td>
                                  <td className="px-4 py-3 text-slate-900 font-semibold">
                                    <div className="flex items-center gap-1">
                                      {row.no_article || row.adjective}
                                      {(row.no_article || row.adjective) && (
                                        <button
                                          onClick={() => playGermanText(extractGermanText(row.no_article || row.adjective))}
                                          className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition flex-shrink-0"
                                        >
                                          <Volume2 size={10} className="text-emerald-600" />
                                        </button>
                                      )}
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Translations */}
                    {section.content.translations && (
                      <div className="bg-emerald-50/60 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-emerald-800 mb-4">💬 Translation &amp; Context</h3>
                        <div className="space-y-3">
                          {section.content.translations.map((t: any, i: number) => (
                            <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-emerald-400">
                              <span className="text-xs font-semibold text-emerald-600 mb-1 block">{t.label}</span>
                              <div className="flex items-center gap-2 mb-1">
                                <p className="font-bold text-slate-900">{t.german}</p>
                                <button
                                  onClick={() => playGermanText(extractGermanText(t.german))}
                                  className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition flex-shrink-0"
                                >
                                  <Volume2 size={12} className="text-emerald-600" />
                                </button>
                              </div>
                              <p className="text-sm text-slate-500 italic">{t.translation}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Rule */}
                    {section.content.key_rule && (
                      <div className="bg-amber-50/60 rounded-xl p-5 border-l-4 border-amber-400">
                        <p className="text-sm font-semibold text-amber-800 mb-1">🔑 Key Rule</p>
                        <p className="text-slate-700">{section.content.key_rule}</p>
                      </div>
                    )}

                    {/* Determiners */}
                    {section.content.determiners && (
                      <div className="bg-emerald-50/60 rounded-xl p-6">
                        <div className="flex flex-wrap gap-3 mb-4">
                          {section.content.determiners.map((d: any, i: number) => (
                            <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700 shadow-sm">
                              {d}
                            </span>
                          ))}
                        </div>
                        {section.content.example && (
                          <div className="bg-white/70 rounded-lg p-4 border-l-4 border-emerald-400">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-bold text-slate-900">{section.content.example.german}</p>
                              <button
                                onClick={() => playGermanText(extractGermanText(section.content!.example!.german))}
                                className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition flex-shrink-0"
                              >
                                <Volume2 size={12} className="text-emerald-600" />
                              </button>
                            </div>
                            <p className="text-sm text-slate-500 italic mb-1">{section.content.example.translation}</p>
                            <p className="text-xs text-emerald-600 font-medium">{section.content.example.note}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Personal Pronouns */}
                    {section.content.personal_pronouns && (
                      <div className="bg-emerald-50/60 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-emerald-800 mb-2">
                          👤 {section.content.personal_pronouns.title}
                        </h3>
                        <p className="text-slate-600 mb-4">{section.content.personal_pronouns.description}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Singular</p>
                            <div className="space-y-2">
                              {section.content.personal_pronouns.singular.map((p: any, i: number) => (
                                <div key={i} className="bg-white/70 rounded-lg px-4 py-2 text-slate-900 font-medium">{p}</div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Plural</p>
                            <div className="space-y-2">
                              {section.content.personal_pronouns.plural.map((p: any, i: number) => (
                                <div key={i} className="bg-white/70 rounded-lg px-4 py-2 text-slate-900 font-medium">{p}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Possessive Pronouns */}
                    {section.content.possessive_pronouns && (
                      <div className="bg-emerald-50/60 rounded-xl p-6 space-y-5">
                        <div>
                          <h3 className="text-lg font-bold text-emerald-800 mb-2">
                            🔒 {section.content.possessive_pronouns.title}
                          </h3>
                          <p className="text-slate-600 mb-4">{section.content.possessive_pronouns.description}</p>
                        </div>

                        {/* Dependent */}
                        <div className="bg-white/70 rounded-lg p-4 border-l-4 border-emerald-400">
                          <p className="text-sm font-bold text-emerald-700 mb-1">{section.content.possessive_pronouns.dependent.label}</p>
                          <p className="text-sm text-slate-600 mb-2">{section.content.possessive_pronouns.dependent.explanation}</p>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-bold text-slate-900">{section.content.possessive_pronouns.dependent.german}</p>
                            <button
                              onClick={() => playGermanText(extractGermanText(section.content!.possessive_pronouns!.dependent.german))}
                              className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition flex-shrink-0"
                            >
                              <Volume2 size={12} className="text-emerald-600" />
                            </button>
                          </div>
                          <p className="text-sm text-slate-500 italic">{section.content.possessive_pronouns.dependent.translation}</p>
                        </div>

                        {/* Independent */}
                        <div className="bg-white/70 rounded-lg p-4 border-l-4 border-blue-400">
                          <p className="text-sm font-bold text-blue-700 mb-1">{section.content.possessive_pronouns.independent.label}</p>
                          <p className="text-sm text-slate-600 mb-2">{section.content.possessive_pronouns.independent.explanation}</p>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-bold text-slate-900">{section.content.possessive_pronouns.independent.german}</p>
                            <button
                              onClick={() => playGermanText(extractGermanText(section.content!.possessive_pronouns!.independent.german))}
                              className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition flex-shrink-0"
                            >
                              <Volume2 size={12} className="text-blue-600" />
                            </button>
                          </div>
                          <p className="text-sm text-slate-500 italic">{section.content.possessive_pronouns.independent.translation}</p>
                        </div>

                        {/* Comparison Table */}
                        <div>
                          <h4 className="text-sm font-bold text-emerald-700 mb-3">
                            {section.content.possessive_pronouns.comparison_table.title}
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full bg-white/70 rounded-lg overflow-hidden text-sm">
                              <thead className="bg-emerald-100">
                                <tr>
                                  {section.content.possessive_pronouns.comparison_table.headers.map((h: any, i: number) => (
                                    <th key={i} className="px-4 py-3 text-left font-bold text-slate-700">{h}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {section.content.possessive_pronouns.comparison_table.rows.map((row: any, i: number) => (
                                  <tr key={i} className="border-t border-emerald-100">
                                    <td className="px-4 py-3 font-medium text-slate-700">{row.person}</td>
                                    <td className="px-4 py-3 font-semibold text-slate-900">{row.masculine}</td>
                                    <td className="px-4 py-3 font-semibold text-slate-900">{row.neuter}</td>
                                    <td className="px-4 py-3 font-semibold text-slate-900">{row.fem_plural}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Example Dialogue */}
                        <div className="bg-amber-50/60 rounded-lg p-4 border-l-4 border-amber-400">
                          <p className="text-sm text-slate-700 mb-1">{section.content.possessive_pronouns.example_dialogue.question}</p>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-bold text-slate-900">{section.content.possessive_pronouns.example_dialogue.german}</p>
                            <button
                              onClick={() => playGermanText('Wessen Ball ist das? Es ist meiner.')}
                              className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 transition flex-shrink-0"
                            >
                              <Volume2 size={12} className="text-amber-600" />
                            </button>
                          </div>
                          <p className="text-xs text-amber-700 italic">{section.content.possessive_pronouns.example_dialogue.note}</p>
                        </div>
                      </div>
                    )}

                    {/* Summary Rules */}
                    {section.content.rules && (
                      <div className="bg-emerald-50/60 rounded-xl p-6">
                        <div className="space-y-3">
                          {section.content.rules.map((r: any, i: number) => (
                            <div key={i} className="bg-white/70 rounded-lg p-4 border-l-4 border-emerald-400">
                              <p className="text-sm font-semibold text-emerald-700 mb-2">{r.rule}</p>
                              <div className="flex items-center gap-2 mb-1">
                                <p className="font-bold text-slate-900">{r.german}</p>
                                <button
                                  onClick={() => playGermanText(extractGermanText(r.german))}
                                  className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition flex-shrink-0"
                                >
                                  <Volume2 size={12} className="text-emerald-600" />
                                </button>
                              </div>
                              <p className="text-sm text-slate-500 italic">{r.translation}</p>
                            </div>
                          ))}
                        </div>
                        {section.content.note && (
                          <div className="mt-4 p-3 bg-amber-50/60 rounded-lg border-l-4 border-amber-400">
                            <p className="text-sm text-amber-800">💡 {section.content.note}</p>
                          </div>
                        )}
                      </div>
                    )}
                    {/* Adjective Note */}
                    {section.content.adjective_note && (
                      <div className="bg-amber-50/60 rounded-xl p-5 border-l-4 border-amber-400">
                        <p className="text-sm font-semibold text-amber-800 mb-1">📝 Note on Adjectives</p>
                        <p className="text-slate-700">{section.content.adjective_note}</p>
                      </div>
                    )}

                    {/* Standalone Example (when no determiners present) */}
                    {section.content.example && !section.content.determiners && (
                      <div className="bg-emerald-50/60 rounded-xl p-6">
                        <div className="bg-white/70 rounded-lg p-4 border-l-4 border-emerald-400">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-bold text-slate-900">{section.content.example.german}</p>
                            <button onClick={() => playGermanText(extractGermanText(section.content.example.german))} className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition flex-shrink-0"><Volume2 size={12} className="text-emerald-600" /></button>
                          </div>
                          <p className="text-sm text-slate-500 italic mb-1">{section.content.example.translation}</p>
                          <p className="text-xs text-emerald-600 font-medium">{section.content.example.note}</p>
                        </div>
                      </div>
                    )}

                    {/* Pronoun Table */}
                    {section.content.pronoun_table && (
                      <div className="bg-emerald-50/60 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-emerald-800 mb-4">👥 {section.content.pronoun_table.title}</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full bg-white/70 rounded-lg overflow-hidden text-sm">
                            <thead className="bg-emerald-100">
                              <tr>
                                <th className="px-4 py-3 text-left font-bold text-slate-700">Nominativ</th>
                                <th className="px-4 py-3 text-center font-bold text-slate-700">→</th>
                                <th className="px-4 py-3 text-left font-bold text-slate-700">Akkusativ</th>
                                <th className="px-4 py-3 text-left font-bold text-slate-700">Meaning</th>
                              </tr>
                            </thead>
                            <tbody>
                              {section.content.pronoun_table.rows.map((row: any, i: number) => (
                                <tr key={i} className="border-t border-emerald-100">
                                  <td className="px-4 py-3 font-semibold text-slate-700">{row.nominative}</td>
                                  <td className="px-4 py-3 text-center text-emerald-500">→</td>
                                  <td className="px-4 py-3 font-bold text-emerald-700">{row.accusative}</td>
                                  <td className="px-4 py-3 text-slate-600 italic">{row.meaning}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Triggers (Akkusativ verbs, prepositions, two-way) */}
                    {section.content.triggers && section.content.triggers.map((trigger: any) => (
                      <div key={trigger.id} className="bg-emerald-50/60 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-emerald-800 mb-2">{trigger.title}</h3>
                        <p className="text-slate-600 mb-4">{trigger.description}</p>
                        {trigger.subcategories && trigger.subcategories.map((sub: any, si: number) => (
                          <div key={si} className="bg-white/70 rounded-lg p-4 border-l-4 border-emerald-400 mb-3">
                            <p className="text-xs font-semibold text-emerald-600 mb-1">{sub.label}: {sub.verbs}</p>
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-bold text-slate-900">{sub.german}</p>
                              <button onClick={() => playGermanText(extractGermanText(sub.german))} className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition flex-shrink-0"><Volume2 size={12} className="text-emerald-600" /></button>
                            </div>
                            <p className="text-sm text-slate-500 italic">{sub.translation}</p>
                          </div>
                        ))}
                        {trigger.prepositions && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {trigger.prepositions.map((p: string, pi: number) => (
                              <span key={pi} className="px-3 py-1.5 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700 shadow-sm">{p}</span>
                            ))}
                          </div>
                        )}
                        {trigger.rule && (
                          <div className="bg-amber-50/60 rounded-lg p-3 border-l-4 border-amber-400 mb-4">
                            <p className="text-sm text-amber-800">🔑 {trigger.rule}</p>
                          </div>
                        )}
                        {trigger.examples && trigger.examples.map((ex: any, ei: number) => (
                          <div key={ei} className="bg-white/70 rounded-lg p-4 border-l-4 border-emerald-400 mb-3">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-bold text-slate-900">{ex.german}</p>
                              <button onClick={() => playGermanText(extractGermanText(ex.german))} className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition flex-shrink-0"><Volume2 size={12} className="text-emerald-600" /></button>
                            </div>
                            <p className="text-sm text-slate-500 italic">{ex.translation}</p>
                          </div>
                        ))}
                      </div>
                    ))}

                    {/* Detailed Examples with Nominativ/Akkusativ comparison */}
                    {section.content.examples && Array.isArray(section.content.examples) && section.content.examples[0]?.explanation && section.content.examples.map((ex: any, i: number) => (
                      <div key={i} className="bg-emerald-50/60 rounded-xl p-6">
                        <h4 className="text-sm font-bold text-emerald-700 mb-3">{ex.label}</h4>
                        {ex.nominative && (
                          <div className="bg-white/70 rounded-lg p-3 mb-2 border-l-4 border-blue-300">
                            <span className="text-xs font-semibold text-blue-600">Nominativ:</span>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-slate-900">{ex.nominative.german}</p>
                              <button onClick={() => playGermanText(extractGermanText(ex.nominative.german))} className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition flex-shrink-0"><Volume2 size={10} className="text-blue-600" /></button>
                            </div>
                            <p className="text-sm text-slate-500 italic">{ex.nominative.translation}</p>
                          </div>
                        )}
                        <div className="bg-white/70 rounded-lg p-3 mb-2 border-l-4 border-emerald-400">
                          <span className="text-xs font-semibold text-emerald-600">Akkusativ:</span>
                          <div className="flex items-center gap-2">
                            <p className="font-bold text-slate-900">{ex.accusative.german}</p>
                            <button onClick={() => playGermanText(extractGermanText(ex.accusative.german))} className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition flex-shrink-0"><Volume2 size={10} className="text-emerald-600" /></button>
                          </div>
                          <p className="text-sm text-slate-500 italic">{ex.accusative.translation}</p>
                        </div>
                        <p className="text-xs text-slate-600 mt-2">💡 {ex.explanation}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
