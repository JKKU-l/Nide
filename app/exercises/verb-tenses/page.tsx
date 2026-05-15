'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Volume2, Clock } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';

interface Tenses {
  present?: { [key: string]: string };
  past?: { [key: string]: string };
  perfect?: { [key: string]: string };
  future?: { [key: string]: string };
}

interface Verb {
  id: number;
  verb: string;
  translation: string;
  type: string;
  tenses: Tenses;
}

interface VerbTensesData {
  verbs: Verb[];
}

export default function VerbTenses() {
  const router = useRouter();
  const [verbData, setVerbData] = useState<VerbTensesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTense, setSelectedTense] = useState<string>('present');

  useEffect(() => {
    fetchVerbData();
  }, []);

  const fetchVerbData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/json_files/verb_tenses_en.json');
      const data = await response.json();
      setVerbData(data);
    } catch (error) {
      console.error('Error loading verb tenses data:', error);
    } finally {
      setLoading(false);
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
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getTenseColor = (tense: string) => {
    return 'bg-green-600';
  };

  const getTenseLabel = (tense: string) => {
    switch (tense) {
      case 'present':
        return 'Present (Präsens)';
      case 'past':
        return 'Past (Präteritum)';
      case 'perfect':
        return 'Perfect (Perfekt)';
      case 'future':
        return 'Future (Futur)';
      default:
        return tense;
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Clock size={20} className="text-blue-700" />
            <span className="text-sm font-medium text-blue-700">Verb Tenses Practice</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            German Verb Tenses
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Master the four main German verb tenses: Present, Past, Perfect, and Future
          </p>
        </div>

        {/* Tense Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['present', 'past', 'perfect', 'future'].map((tense) => (
            <button
              key={tense}
              onClick={() => setSelectedTense(tense)}
              className={`px-6 py-3 rounded-xl font-medium transition ${
                selectedTense === tense
                  ? 'text-white shadow-lg bg-teal-500'
                  : 'bg-white/60 backdrop-blur-md border border-teal-300 hover:bg-teal-50 text-slate-700'
              }`}
            >
              {getTenseLabel(tense)}
            </button>
          ))}
        </div>

        {/* Verbs Grid */}
        {verbData && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verbData.verbs.map((verb) => (
              <div
                key={verb.id}
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

                  {/* Selected Tense Conjugations */}
                  {verb.tenses[selectedTense as keyof Tenses] && (
                    <div className="border-t border-blue-200 pt-4">
                      <div className="space-y-2">
                        {Object.entries(verb.tenses[selectedTense as keyof Tenses]!).map(([pronoun, conjugation]) => (
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
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Learning Tips */}
        <div className="mt-12 text-center">
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              🎯 Verb Tense Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="space-y-2">
                <h3 className="font-bold text-green-700">🟢 Present (Präsens)</h3>
                <p className="text-sm text-slate-600">
                  Used for actions happening now, habitual actions, and future plans
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-orange-700">🟠 Past (Präteritum)</h3>
                <p className="text-sm text-slate-600">
                  Simple past tense, mainly used in formal writing and storytelling
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-blue-700">🔵 Perfect (Perfekt)</h3>
                <p className="text-sm text-slate-600">
                  Most common past tense in spoken German, formed with haben/sein + participle
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-purple-700">🟣 Future (Futur)</h3>
                <p className="text-sm text-slate-600">
                  Used for future actions and predictions, formed with werden + infinitive
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
