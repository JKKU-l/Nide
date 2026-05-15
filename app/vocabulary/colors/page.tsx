'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowLeft, Volume2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';

interface VocabularyItem {
  german: string;
  english?: string;
  japanese?: string;
  korean?: string;
  myanmar?: string;
  thai?: string;
  vietnamese?: string;
  article: string;
  word: string;
  emoji: string;
}

interface Section {
  vocabulary: VocabularyItem[];
}

interface VocabularyData {
  theme_color: string;
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

export default function ColorsVocabulary() {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState('en');
  const [vocabularyData, setVocabularyData] = useState<VocabularyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  useEffect(() => {
    fetchVocabularyData(selectedLang);
  }, [selectedLang]);

  const fetchVocabularyData = async (lang: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/json_files/vocabulary_color_${lang}.json`);
      const data = await response.json();
      setVocabularyData(data);
    } catch (error) {
      console.error('Error loading vocabulary data:', error);
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

  const getTranslation = (item: VocabularyItem, lang: string) => {
    switch (lang) {
      case 'en':
        return item.english || '';
      case 'jp':
        return item.japanese || '';
      case 'kr':
        return item.korean || '';
      case 'my':
        return item.myanmar || '';
      case 'th':
        return item.thai || '';
      case 'vi':
        return item.vietnamese || '';
      default:
        return item.english || '';
    }
  };

  const selectedLanguage = languages.find(l => l.code === selectedLang);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-300/40 via-white to-purple-300/40">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300/40 via-white to-purple-300/40">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.push('/vocabulary')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Vocabulary</span>
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
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-pink-50/80 transition first:rounded-t-xl last:rounded-b-xl ${
                      selectedLang === lang.code ? 'bg-pink-50/80' : ''
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-4">
            <span className="text-2xl">🎨</span>
            <span className="text-sm font-medium text-pink-700">Colors</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            Colors
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Learn essential German vocabulary for colors and how to describe the world around you in vibrant detail.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {vocabularyData?.sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🌈</span>
                <h2 className="text-2xl font-bold text-slate-900">Color Vocabulary</h2>
              </div>

              {/* Vocabulary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.vocabulary.map((item, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/60"
                  >
                    <div className="space-y-4">
                      {/* Emoji */}
                      <div className="text-4xl text-center">{item.emoji}</div>

                      {/* Article Badge */}
                      {item.article && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-100 rounded-full">
                          <span className="text-sm font-bold text-pink-700">{item.article}</span>
                          <span className="text-xs text-pink-600">
                            ({item.article === 'der' ? 'masculine' : item.article === 'die' ? 'feminine' : item.article === 'das' ? 'neutral' : ''})
                          </span>
                        </div>
                      )}

                      {/* German Word */}
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900">{item.word}</h3>
                        <div className="flex items-center gap-2">
                          <p className="text-lg text-slate-700">{item.german}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(item.german))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(item.german));
                            }}
                            className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition"
                          >
                            <Volume2 size={16} className="text-pink-600" />
                          </button>
                        </div>
                      </div>

                      {/* Translation */}
                      <div className="border-t border-pink-200 pt-3">
                        <p className="text-sm text-slate-500 mb-1">Translation:</p>
                        <p className="text-lg font-medium text-slate-800">{getTranslation(item, selectedLang)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Tips */}
        <div className="mt-12 text-center">
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              🎯 Learning Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h3 className="font-bold text-pink-700">🎨 Color Descriptions</h3>
                <p className="text-sm text-slate-600">
                  Practice describing objects using colors: "Das Auto ist rot" (The car is red).
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-pink-700">👚 Clothing Colors</h3>
                <p className="text-sm text-slate-600">
                  Combine colors with clothing vocabulary: "Ich trage ein blaues Hemd" (I'm wearing a blue shirt).
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-pink-700">🌈 Color Adjectives</h3>
                <p className="text-sm text-slate-600">
                  Remember that German color adjectives need proper endings based on the noun's gender and case.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
