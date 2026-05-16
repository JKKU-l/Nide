'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Globe } from 'lucide-react';
import Navbar from '@/components/navbar';

interface VocabularyTopic {
  title: string;
  emoji: string;
  href?: string;
}

const vocabularyTopics: VocabularyTopic[] = [
  { title: 'Body and Health', emoji: '💪', href: '/vocabulary/body-health' },
  { title: 'Hygiene and Medicine', emoji: '🧼', href: '/vocabulary/hygiene-medicine' },
  { title: 'Clothing', emoji: '👕', href: '/vocabulary/clothing' },
  { title: 'Food and Drink', emoji: '🍽️', href: '/vocabulary/food-drink' },
  { title: 'Kitchen and Tableware', emoji: '🍳', href: '/vocabulary/kitchen-tableware' },
  { title: 'Colors', emoji: '🎨', href: '/vocabulary/colors' },
  { title: 'Housing', emoji: '🏠', href: '/vocabulary/housing' },
  { title: 'Numbers and Math', emoji: '🔢', href: '/vocabulary/numbers-math' },
  { title: 'Ordinal Numbers', emoji: '🏆', href: '/vocabulary/ordinal-numbers' },
  { title: 'Shopping and Money', emoji: '🛒', href: '/vocabulary/shopping-money' },
  { title: 'Personal Information', emoji: '👤', href: '/vocabulary/personal-information' },
  { title: 'Family and Friends', emoji: '👨‍👩‍👧‍👦', href: '/vocabulary/family-friends' },
  { title: 'Work (Arbeit)', emoji: '💼', href: '/vocabulary/work' },
  { title: 'Professions', emoji: '👷', href: '/vocabulary/professions' },
  { title: 'Sports and Leisure', emoji: '⚽' },
  { title: 'Invitations and Visiting', emoji: '📩' },
  { title: 'Time (Die Uhrzeit)', emoji: '🕐' },
  { title: 'The Day (Der Tag)', emoji: '📅' },
  { title: 'The Week (Die Woche)', emoji: '🗓️' },
  { title: 'Months and Year', emoji: '📆' },
  { title: 'Measurements and Weights', emoji: '⚖️' },
  { title: 'Countries and Nationalities', emoji: '🌍' },
  { title: 'Nature', emoji: '🌲' },
  { title: 'Weather', emoji: '🌤️' },
  { title: 'Learning', emoji: '📚' },
  { title: 'Communication and Media', emoji: '📱' },
  { title: 'Transport and Travel', emoji: '✈️' },
  { title: 'Adjectives', emoji: '✨' },
  { title: 'Adverbs', emoji: '⚡' },
  { title: 'Nouns and Exclamations', emoji: '❗' },
  { title: 'Verbs', emoji: '🏃' },
];

export default function VocabularyPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = vocabularyTopics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300/40 via-white to-blue-300/40">
      <Navbar searchValue={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/80 transition"
            >
              <Globe size={18} />
              <span className="mr-1">🇬🇧</span>
              <span>English</span>
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
            <span className="text-2xl">📚</span>
            <span className="text-sm font-medium text-purple-700">Vocabulary Library</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            Vocabulary
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our comprehensive vocabulary collection covering everyday topics, from basic necessities to advanced concepts.
          </p>
        </div>

        {/* Vocabulary Topics Grid */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Vocabulary Topics'}
          </h2>
          {filteredTopics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTopics.map((topic, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => {
                    if (topic.href) {
                      router.push(topic.href);
                    } else {
                      // For topics without href, show coming soon message
                      alert(`Vocabulary topic "${topic.title}" will be implemented with individual pages containing vocabulary lists, audio pronunciation, and interactive exercises.`);
                    }
                  }}
                >
                  <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/60">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                        {topic.emoji}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                        {topic.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <span>{topic.href ? 'Ready' : 'Coming Soon'}</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white/40 backdrop-blur-md rounded-3xl border border-white/20">
              <p className="text-slate-600 text-lg">No vocabulary topics found matching your search.</p>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              🎯 What's Coming Next
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h3 className="font-bold text-purple-700">📖 Vocabulary Lists</h3>
                <p className="text-sm text-slate-600">
                  Comprehensive word lists with translations, example sentences, and context usage.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-purple-700">🔊 Audio Pronunciation</h3>
                <p className="text-sm text-slate-600">
                  Native German pronunciation for every vocabulary item with adjustable playback speed.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-purple-700">🎮 Interactive Exercises</h3>
                <p className="text-sm text-slate-600">
                  Quizzes, flashcards, and games to test and reinforce your vocabulary knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
