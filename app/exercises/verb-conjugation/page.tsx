'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Volume2, BookOpen } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';

interface Conjugations {
  ich?: string;
  du?: string;
  'er/sie/es'?: string;
  wir?: string;
  ihr?: string;
  'sie/Sie'?: string;
}

interface Verb {
  verb: string;
  translation: string;
  type: string;
  conjugations?: Conjugations;
}

interface Level {
  name: string;
  description: string;
  verbs: Verb[];
}

interface VerbData {
  title: string;
  description: string;
  levels: {
    [key: string]: Level;
  };
}

export default function VerbConjugation() {
  const router = useRouter();
  const [verbData, setVerbData] = useState<VerbData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState<string>('level1');

  useEffect(() => {
    fetchVerbData();
  }, []);

  const fetchVerbData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/json_files/verb_conjugation_en.json');
      const data = await response.json();
      setVerbData(data);
    } catch (error) {
      console.error('Error loading verb data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getConjugation = (verb: Verb, pronoun: string) => {
    if (verb.conjugations && verb.conjugations[pronoun as keyof Conjugations]) {
      return verb.conjugations[pronoun as keyof Conjugations];
    }
    // For regular verbs, generate conjugation
    const stem = verb.verb.slice(0, -2); // Remove 'en'
    switch (pronoun) {
      case 'ich':
        return stem + 'e';
      case 'du':
        return stem + 'st';
      case 'er/sie/es':
        return stem + 't';
      case 'wir':
        return verb.verb;
      case 'ihr':
        return stem + 't';
      case 'sie/Sie':
        return verb.verb;
      default:
        return verb.verb;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'irregular':
        return 'bg-red-100 text-red-700';
      case 'regular':
        return 'bg-green-100 text-green-700';
      case 'separable':
        return 'bg-blue-100 text-blue-700';
      case 'reflexive':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-300/40 via-white to-purple-300/40">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  const currentLevel = verbData?.levels[selectedLevel as keyof typeof verbData.levels];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300/40 via-white to-purple-300/40">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => router.push('/exercises')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Exercises</span>
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
            <BookOpen size={20} className="text-green-700" />
            <span className="text-sm font-medium text-green-700">Verb Conjugation Practice</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            {verbData?.title}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {verbData?.description}
          </p>
        </div>

        {/* Level Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.entries(verbData?.levels || {}).map(([key, level]) => (
            <button
              key={key}
              onClick={() => setSelectedLevel(key)}
              className={`px-6 py-3 rounded-xl font-medium transition ${
                selectedLevel === key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/60 backdrop-blur-md border border-white/30 hover:bg-white/80'
              }`}
            >
              {level.name}
            </button>
          ))}
        </div>

        {/* Level Description */}
        {currentLevel && (
          <div className="text-center mb-8">
            <p className="text-slate-600">{currentLevel.description}</p>
          </div>
        )}

        {/* Verbs Grid */}
        {currentLevel && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentLevel.verbs.map((verb, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/60"
              >
                <div className="space-y-4">
                  {/* Verb Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{verb.verb}</h3>
                      <p className="text-sm text-slate-600">{verb.translation}</p>
                    </div>
                    <button
                      onMouseEnter={() => playGermanText(verb.verb)}
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        playGermanText(verb.verb);
                      }}
                      className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition flex-shrink-0"
                    >
                      <Volume2 size={16} className="text-blue-600" />
                    </button>
                  </div>

                  {/* Type Badge */}
                  <div>
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(verb.type)}`}>
                      {verb.type}
                    </span>
                  </div>

                  {/* Conjugations Table */}
                  {verb.conjugations && (
                    <div className="border-t border-blue-200 pt-4">
                      <div className="space-y-2">
                        {Object.entries(verb.conjugations).map(([pronoun, conjugation]) => (
                          <div key={pronoun} className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-700">{pronoun}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-slate-900 font-semibold">{conjugation}</span>
                              <button
                                onMouseEnter={() => conjugation && playGermanText(conjugation)}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  if (conjugation) playGermanText(conjugation);
                                }}
                                className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition"
                              >
                                <Volume2 size={12} className="text-blue-600" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Regular Verb Conjugations */}
                  {!verb.conjugations && (
                    <div className="border-t border-blue-200 pt-4">
                      <div className="space-y-2">
                        {['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'].map((pronoun) => {
                          const conjugation = getConjugation(verb, pronoun);
                          return (
                            <div key={pronoun} className="flex items-center justify-between">
                              <span className="text-sm font-medium text-slate-700">{pronoun}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-900 font-semibold">{conjugation}</span>
                                <button
                                  onMouseEnter={() => conjugation && playGermanText(conjugation)}
                                  onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    if (conjugation) playGermanText(conjugation);
                                  }}
                                  className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition"
                                >
                                  <Volume2 size={12} className="text-blue-600" />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Learning Tips */}
        <div className="mt-12 text-center">
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              🎯 Verb Conjugation Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h3 className="font-bold text-green-700">🟢 Regular Verbs</h3>
                <p className="text-sm text-slate-600">
                  Follow standard patterns: ich -e, du -st, er/sie/es -t
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-red-700">🔴 Irregular Verbs</h3>
                <p className="text-sm text-slate-600">
                  Have unique conjugation patterns that must be memorized
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-blue-700">🔵 Separable Verbs</h3>
                <p className="text-sm text-slate-600">
                  Prefix separates in sentences: "Ich stehe auf"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
