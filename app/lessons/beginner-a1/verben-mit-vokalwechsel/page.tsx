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

interface ImportantVerbs {
  e_to_i_ie: string;
  a_to_ä: string;
}

interface Exercise {
  conjugated?: string;
  infinitive?: string;
  translation?: string;
  verb?: string;
  has_change?: string;
}

interface Speaker {
  speaker: string;
  german: string;
  english: string;
}

interface Dialogue {
  verb: string;
  speakers: Speaker[];
}

interface SectionContent {
  table?: TableData;
  important_verbs?: ImportantVerbs;
  exercises?: Exercise[];
  dialogues?: Dialogue[];
  text?: string;
  letter?: string;
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

export default function VerbenMitVokalwechselLesson() {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState('en');
  const [lessonData, setLessonData] = useState<LessonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [exercise4Answers, setExercise4Answers] = useState<{[key: string]: string}>({});

  useEffect(() => {
    fetchLessonData(selectedLang);
  }, [selectedLang]);

  const fetchLessonData = async (lang: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/json_files/a1_verben_mit_vokalwechsel_${lang}.json`);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
            <span className="text-2xl">🔄</span>
            <span className="text-sm font-medium text-purple-700">Topic 4 of 20</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            {lessonData?.title}
          </h1>
          <p className="text-slate-600 text-lg">
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
                        const isGermanVerb = j >= 1 && cell.length > 0;
                        if (isGermanVerb) {
                          return (
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
                          );
                        }
                        return cell;
                      })
                    )}
                    themeColor="purple"
                    mobileCardTitleIndex={0}
                  />
                </div>
              )}

              {/* Important Verbs */}
              {section.content.important_verbs && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-purple-50 rounded-xl p-4">
                    <h3 className="font-bold text-purple-800 mb-2">e → i / ie</h3>
                    <p className="text-sm text-slate-700">{section.content.important_verbs.e_to_i_ie}</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <h3 className="font-bold text-purple-800 mb-2">a → ä</h3>
                    <p className="text-sm text-slate-700">{section.content.important_verbs.a_to_ä}</p>
                  </div>
                </div>
              )}

              {/* Exercises */}
              {section.content.exercises && (
                <>
                  {section.id === 'exercise_4' ? (
                    // Special layout for Exercise 4 with Yes/No buttons
                    <div className="space-y-4">
                      <div className="bg-purple-50 rounded-xl p-4 mb-4">
                        <p className="text-sm font-medium text-purple-800">📝 Instructions: Look at each verb and decide if it has a vowel change. Click "Yes" or "No" for each one.</p>
                      </div>
                      {section.content.exercises.map((exercise, i) => (
                        <div key={i} className="bg-white/50 rounded-xl p-4 border border-purple-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="font-bold text-purple-700 text-lg">{exercise.verb}</span>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => setExercise4Answers({...exercise4Answers, [exercise.verb || '']: 'Yes'})}
                                  className={`px-4 py-2 rounded-lg font-medium transition ${
                                    exercise4Answers[exercise.verb || ''] === 'Yes'
                                      ? 'bg-green-500 text-white'
                                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                                  }`}
                                >
                                  Yes ✓
                                </button>
                                <button
                                  onClick={() => setExercise4Answers({...exercise4Answers, [exercise.verb || '']: 'No'})}
                                  className={`px-4 py-2 rounded-lg font-medium transition ${
                                    exercise4Answers[exercise.verb || ''] === 'No'
                                      ? 'bg-red-500 text-white'
                                      : 'bg-red-100 text-red-700 hover:bg-red-200'
                                  }`}
                                >
                                  No ✗
                                </button>
                              </div>
                            </div>
                            {exercise4Answers[exercise.verb || ''] && (
                              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                                exercise4Answers[exercise.verb || ''] === exercise.has_change
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {exercise4Answers[exercise.verb || ''] === exercise.has_change ? '✓ Correct' : '✗ Try again'}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Regular layout for other exercises
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.content.exercises.map((exercise, i) => (
                        <div key={i} className="bg-white/50 rounded-xl p-4 border border-purple-200">
                          <div className="space-y-2">
                            {exercise.conjugated && (
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-purple-700">{exercise.conjugated}</span>
                                <button
                                  onMouseEnter={() => exercise.conjugated && playGermanText(exercise.conjugated)}
                                  onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    exercise.conjugated && playGermanText(exercise.conjugated);
                                  }}
                                  className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition"
                                >
                                  <Volume2 size={12} className="text-purple-600" />
                                </button>
                              </div>
                            )}
                            {exercise.infinitive && (
                              <p className="font-medium text-slate-900">→ {exercise.infinitive}</p>
                            )}
                            {exercise.translation && (
                              <p className="text-sm text-slate-600">{exercise.translation}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* Dialogues */}
              {section.content.dialogues && (
                <div className="space-y-6">
                  {section.content.dialogues.map((dialogue, i) => (
                    <div key={i} className="bg-white/50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-purple-700 mb-4">
                        💬 {dialogue.verb}
                      </h3>
                      <div className="space-y-3">
                        {dialogue.speakers.map((speaker, j) => (
                          <div key={j} className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                            <div className="flex items-start justify-between mb-2">
                              <span className="font-bold text-purple-600">{speaker.speaker}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-lg font-medium text-slate-900">{speaker.german}</p>
                              <button
                                onMouseEnter={() => playGermanText(speaker.german)}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  playGermanText(speaker.german);
                                }}
                                className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition"
                              >
                                <Volume2 size={16} className="text-purple-600" />
                              </button>
                            </div>
                            <p className="text-sm text-slate-600 italic">{speaker.english}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Text Exercise */}
              {section.content.text && (
                <div className="bg-white/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-purple-700 mb-4">📖 Reading Exercise</h3>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {section.content.text}
                    </p>
                  </div>
                </div>
              )}

              {/* Letter Exercise */}
              {section.content.letter && (
                <div className="bg-white/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-purple-700 mb-4">💌 Letter Exercise</h3>
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap font-serif">
                      {section.content.letter}
                    </p>
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

