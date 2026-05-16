'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen, TrendingUp, Award, Star, Trophy } from 'lucide-react';
import Navbar from '@/components/navbar';
import { useState } from 'react';

interface Level {
  id: string;
  level: string;
  description: string;
  icon: React.ElementType;
  color: string;
  status: 'Ready' | 'Coming Soon';
}

const levels: Level[] = [
  {
    id: 'a1',
    level: 'A1 - Beginner',
    description: 'Basic German: Simple sentences, common expressions, and everyday topics',
    icon: BookOpen,
    color: '#4CAF50',
    status: 'Ready',
  },
  {
    id: 'a2',
    level: 'A2 - Elementary',
    description: 'Elementary German: Routine communication, simple descriptions, and basic grammar',
    icon: TrendingUp,
    color: '#2196F3',
    status: 'Coming Soon',
  },
  {
    id: 'b1',
    level: 'B1 - Intermediate',
    description: 'Intermediate German: Travel situations, opinions, and standard language',
    icon: Award,
    color: '#FF9800',
    status: 'Coming Soon',
  },
  {
    id: 'b2',
    level: 'B2 - Upper Intermediate',
    description: 'Upper Intermediate: Complex texts, technical discussions, and fluency',
    icon: Star,
    color: '#9C27B0',
    status: 'Coming Soon',
  },
  {
    id: 'c1',
    level: 'C1 - Advanced',
    description: 'Advanced: Academic and professional language, nuanced expression',
    icon: Trophy,
    color: '#E91E63',
    status: 'Coming Soon',
  },
  {
    id: 'c2',
    level: 'C2 - Mastery',
    description: 'Mastery: Near-native fluency, complete understanding of complex topics',
    icon: Trophy,
    color: '#F44336',
    status: 'Coming Soon',
  },
];

export default function Courses() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLevels = levels.filter((level) =>
    level.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
    level.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300/40 via-white to-purple-300/40">
      <Navbar searchValue={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <BookOpen size={20} className="text-blue-700" />
            <span className="text-sm font-medium text-blue-700">German Courses</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            CEFR Language Levels
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose your proficiency level and start learning German with structured lessons and exercises.
          </p>
        </div>

        {/* Levels Grid */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Levels'}
          </h2>
          {filteredLevels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLevels.map((level) => (
                <div
                  key={level.id}
                  className={`backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/60 cursor-pointer ${
                    level.status === 'Ready' ? 'hover:border-green-400' : 'opacity-75'
                  }`}
                  onClick={() => {
                    if (level.id === 'a1') {
                      router.push('/lessons/beginner-a1');
                    } else {
                      alert(`Course "${level.level}" will be implemented soon!`);
                    }
                  }}
                >
                  <div className="space-y-4">
                    {/* Icon */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white"
                      style={{ backgroundColor: level.color }}
                    >
                      <level.icon size={32} />
                    </div>

                    {/* Level */}
                    <h3 className="text-2xl font-bold text-slate-900">{level.level}</h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600">{level.description}</p>

                    {/* Status Badge */}
                    <div className="text-center">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                        level.status === 'Ready' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {level.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white/40 backdrop-blur-md rounded-3xl border border-white/20">
              <p className="text-slate-600 text-lg">No levels found matching your search.</p>
            </div>
          )}
        </div>

        {/* Learning Path */}
        <div className="mt-12 text-center">
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              🎯 Your Learning Path
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="text-sm text-slate-600">A1 - Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span className="text-sm text-slate-600">A2 - Coming Soon</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                <span className="text-sm text-slate-600">B1 - Coming Soon</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <span className="text-sm text-slate-600">B2 - Coming Soon</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-pink-500"></div>
                <span className="text-sm text-slate-600">C1 - Coming Soon</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <span className="text-sm text-slate-600">C2 - Coming Soon</span>
              </div>
            </div>
            <p className="text-sm text-slate-500">
              Start with A1 Beginner level and progress through the CEFR levels to achieve German mastery.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
