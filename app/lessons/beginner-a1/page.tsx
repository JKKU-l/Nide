'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/navbar';
import { useState } from 'react';

const grammarTopics = [
  { title: 'Personalpronomen (Personal Pronouns)', emoji: '👤', href: '/lessons/beginner-a1/personalpronomen' },
  { title: 'Konjugation Präsens (Present Tense Conjugation)', emoji: '📝', href: '/lessons/beginner-a1/konjugation-praesens' },
  { title: 'Sein, haben und besondere Verben (To be, to have, and special verbs)', emoji: '🔧', href: '/lessons/beginner-a1/sein-haben-besondere-verben' },
  { title: 'Verben mit Vokalwechsel (Verbs with vowel changes)', emoji: '🔄', href: '/lessons/beginner-a1/verben-mit-vokalwechsel' },
  { title: 'Modalverben: Konjugation und Position (Modal verbs: Conjugation and position)', emoji: '⚡', href: '/lessons/beginner-a1/modalverben-konjugation-position' },
  { title: 'Modalverben: Gebrauch (Modal verbs: Usage)', emoji: '💡', href: '/lessons/beginner-a1/modalverben-gebrauch' },
  { title: 'Trennbare Verben (Separable verbs)', emoji: '✂️', href: '/lessons/beginner-a1/trennbare-verben' },
  { title: 'Imperativ (Imperative/Commands)', emoji: '📢', href: '/lessons/beginner-a1/imperativ' },
  { title: 'Fragen mit Fragewort (Questions with question words)', emoji: '❓', href: '/lessons/beginner-a1/fragen-mit-fragewort' },
  { title: 'Ja/Nein-Fragen (Yes/No questions)', emoji: '👍👎', href: '/lessons/beginner-a1/ja-nein-fragen' },
  { title: 'Wörter im Satz 1 (Word order in sentences 1)', emoji: '📖', href: '/lessons/beginner-a1/woerter-im-satz-1' },
  { title: 'Wörter im Satz 2 (Word order in sentences 2)', emoji: '📚', href: '/lessons/beginner-a1/woerter-im-satz-2' },
  { title: 'Nomen: Plural (Nouns: Plural forms)', emoji: '🔢', href: '/lessons/beginner-a1/nomen-plural' },
  { title: 'Artikel: definit, indefinit, kein Artikel (Definite, indefinite, and zero articles)', emoji: '📰', href: '/lessons/beginner-a1/artikel' },
  { title: 'Negation (Negation)', emoji: '🚫', href: '/lessons/beginner-a1/negation' },
  { title: 'Akkusativ (Accusative case)', emoji: '🎯', href: '/lessons/beginner-a1/akkusativ' },
  { title: 'Dativ (Dative case)', emoji: '🎁', href: '/lessons/beginner-a1/dativ' },
  { title: 'Possessivartikel (Possessive articles)', emoji: '🔒', href: '/lessons/beginner-a1/possessivartikel' },
  { title: 'Artikel: interrogativ und demonstrativ (Interrogative and demonstrative articles)', emoji: '🔍', href: '/lessons/beginner-a1/artikel-interrogativ-demonstrativ' },
  { title: 'Personalpronomen: Akkusativ und Dativ (Personal pronouns: Accusative and Dative)', emoji: '👥', href: '/lessons/beginner-a1/personalpronomen-akkusativ-dativ' },
];

export default function BeginnerA1Lesson() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = grammarTopics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300/40 via-white to-orange-300/40">
      <Navbar searchValue={searchQuery} onSearchChange={setSearchQuery} />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-10 px-2">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 break-words">
            Beginner A1
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Build a strong foundation in beginner German with essential grammar and vocabulary
          </p>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Master the fundamentals of German grammar with 20 essential topics
          </p>
        </div>

        {/* Topics Grid */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Grammar Topics'}
          </h2>
          {filteredTopics.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredTopics.map((topic) => {
                const card = (
                  <div
                    className={`backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group ${topic.href ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition">
                        {topic.emoji}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-slate-900 leading-tight mb-1">
                          {topic.title}
                        </h3>
                        {topic.href && (
                          <span className="text-xs text-blue-600 font-medium">Click to learn →</span>
                        )}
                      </div>
                    </div>
                  </div>
                );

                return topic.href ? (
                  <Link key={topic.href} href={topic.href} className="block">
                    {card}
                  </Link>
                ) : (
                  <div key={topic.title}>{card}</div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-white/40 backdrop-blur-md rounded-3xl border border-white/20">
              <p className="text-slate-600 text-lg">No grammar topics found matching your search.</p>
            </div>
          )}
        </div>

        {/* Progress Summary */}
        <div className="mt-10 backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">Your Progress</h2>
              <p className="text-slate-600">Track your learning journey through A1 level</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-blue-600">0/20</p>
              <p className="text-sm text-slate-600">Topics completed</p>
            </div>
          </div>
          <div className="mt-4 h-3 bg-white/50 rounded-full overflow-hidden">
            <div className="h-full w-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

