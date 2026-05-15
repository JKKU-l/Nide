'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Volume2, Languages } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';

interface Noun {
  article: string;
  noun: string;
  translation: string;
}

interface Category {
  id: string;
  title: string;
  icon: string;
  nouns: Noun[];
}

interface NounGendersData {
  title: string;
  description: string;
  categories: Category[];
}

export default function NounGenders() {
  const router = useRouter();
  const [nounData, setNounData] = useState<NounGendersData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('people_relationships');

  useEffect(() => {
    fetchNounData();
  }, []);

  const fetchNounData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/json_files/noun_genders_en.json');
      const data = await response.json();
      setNounData(data);
    } catch (error) {
      console.error('Error loading noun genders data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getArticleColor = (article: string) => {
    switch (article) {
      case 'der':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'die':
        return 'bg-pink-100 text-pink-700 border-pink-300';
      case 'das':
        return 'bg-green-100 text-green-700 border-green-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'people':
        return '👥';
      case 'home':
        return '🏠';
      case 'shopping_bag':
        return '🛍️';
      case 'restaurant':
        return '🍽️';
      case 'place':
        return '📍';
      case 'work':
        return '💼';
      case 'access_time':
        return '⏰';
      case 'checkroom':
        return '👔';
      case 'favorite':
        return '❤️';
      case 'sports_esports':
        return '🎮';
      default:
        return '📚';
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

  const currentCategory = nounData?.categories.find(cat => cat.id === selectedCategory);

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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
            <Languages size={20} className="text-orange-700" />
            <span className="text-sm font-medium text-orange-700">Noun Genders Practice</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            {nounData?.title}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {nounData?.description}
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {nounData?.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl font-medium transition flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'text-white shadow-lg bg-orange-500'
                  : 'bg-white/60 backdrop-blur-md border border-orange-300 hover:bg-orange-50 text-slate-700'
              }`}
            >
              <span>{getCategoryIcon(category.icon)}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Nouns Grid */}
        {currentCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory.nouns.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/60"
              >
                <div className="flex items-center gap-3">
                  {/* Article Badge */}
                  <span className={`px-3 py-1 rounded-lg text-sm font-bold border-2 ${getArticleColor(item.article)}`}>
                    {item.article}
                  </span>
                  
                  {/* Noun */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-slate-900">{item.noun}</span>
                      <button
                        onMouseEnter={() => playGermanText(item.noun)}
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          playGermanText(item.noun);
                        }}
                        className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition flex-shrink-0"
                      >
                        <Volume2 size={12} className="text-blue-600" />
                      </button>
                    </div>
                    <p className="text-sm text-slate-600">{item.translation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Learning Tips */}
        <div className="mt-12 text-center">
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              🎯 German Noun Genders Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h3 className="font-bold text-blue-700">🔵 Der (Masculine)</h3>
                <p className="text-sm text-slate-600">
                  About 40% of German nouns are masculine. Common patterns: male people, days, seasons, weather elements
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-pink-700">🔴 Die (Feminine)</h3>
                <p className="text-sm text-slate-600">
                  About 40% of German nouns are feminine. Common patterns: female people, flowers, many -e endings
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-green-700">🟢 Das (Neuter)</h3>
                <p className="text-sm text-slate-600">
                  About 20% of German nouns are neuter. Common patterns: young people, metals, collective nouns
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
