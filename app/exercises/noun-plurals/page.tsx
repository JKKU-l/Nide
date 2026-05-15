'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Volume2, Layers } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';

interface Noun {
  noun: string;
  translation: string;
  plural: string;
  type: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  nouns: Noun[];
}

interface NounPluralsData {
  categories: Category[];
}

export default function NounPlurals() {
  const router = useRouter();
  const [nounData, setNounData] = useState<NounPluralsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('regular');

  useEffect(() => {
    fetchNounData();
  }, []);

  const fetchNounData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/json_files/noun_plurals_en.json');
      const data = await response.json();
      setNounData(data);
    } catch (error) {
      console.error('Error loading noun plurals data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTypeColor = (type: string) => {
    if (type === 'no change') return 'bg-gray-100 text-gray-700 border-gray-300';
    if (type === 'irregular') return 'bg-red-100 text-red-700 border-red-300';
    return 'bg-purple-100 text-purple-700 border-purple-300';
  };

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'category':
        return '📂';
      case 'psychology':
        return '🧠';
      case 'language':
        return '🌐';
      case 'child_care':
        return '👶';
      case 'shuffle':
        return '🔀';
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
            <Layers size={20} className="text-purple-700" />
            <span className="text-sm font-medium text-purple-700">Noun Plurals Practice</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            German Noun Plurals
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Master the various plural formation rules and exceptions in German
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
                  ? 'text-white shadow-lg bg-purple-500'
                  : 'bg-white/60 backdrop-blur-md border border-purple-300 hover:bg-purple-50 text-slate-700'
              }`}
            >
              <span>{getCategoryIcon(category.icon)}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Description */}
        {currentCategory && (
          <div className="text-center mb-6">
            <p className="text-slate-600">{currentCategory.description}</p>
          </div>
        )}

        {/* Nouns Grid */}
        {currentCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory.nouns.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/60"
              >
                <div className="space-y-3">
                  {/* Singular */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-500">Singular:</span>
                    <div className="flex items-center gap-2 flex-1">
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
                  </div>

                  {/* Plural */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-500">Plural:</span>
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-lg font-bold text-purple-700">{item.plural}</span>
                      <button
                        onMouseEnter={() => playGermanText(item.plural)}
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          playGermanText(item.plural);
                        }}
                        className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition flex-shrink-0"
                      >
                        <Volume2 size={12} className="text-purple-600" />
                      </button>
                    </div>
                  </div>

                  {/* Translation */}
                  <p className="text-sm text-slate-600">{item.translation}</p>

                  {/* Type Badge */}
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold border-2 ${getTypeColor(item.type)}`}>
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Learning Tips */}
        <div className="mt-12 text-center">
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              🎯 German Plural Formation Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h3 className="font-bold text-purple-700">🟣 Regular Patterns</h3>
                <p className="text-sm text-slate-600">
                  Common endings: +e, +n, +en, +er, +s. Many nouns follow predictable patterns
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-red-700">🔴 Irregular Forms</h3>
                <p className="text-sm text-slate-600">
                  Some nouns change vowels (a→ä, au→äu, o→ö) or have completely different forms
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-gray-700">⚫ Special Cases</h3>
                <p className="text-sm text-slate-600">
                  Diminutives (-chen, -lein) and some foreign words don't change in plural
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
