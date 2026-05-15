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
  example_german?: string;
  example_english?: string;
  example_japanese?: string;
  example_korean?: string;
  example_myanmar?: string;
  example_thai?: string;
  example_vietnamese?: string;
}

interface Content {
  vocabulary: VocabularyItem[];
}

interface Section {
  id: string;
  content: Content;
}

interface VocabularyData {
  title: string;
  emoji: string;
  theme_color: string;
  description: string;
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

export default function HomeLiving() {
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
      const response = await fetch(`/json_files/home_living_${lang}.json`);
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

  // Separable verbs with their prefixes and stems
  const separableVerbs: Record<string, { prefix: string; stem: string }> = {
    'aufwachen': { prefix: 'auf', stem: 'wachen' },
    'aufstehen': { prefix: 'auf', stem: 'stehen' },
  };

  const highlightSeparableVerbs = (text: string, mainVerb: string) => {
    if (!text || !mainVerb) return text;
    
    const verbInfo = separableVerbs[mainVerb];
    if (!verbInfo) return text;

    let highlightedText = text;
    
    // Highlight the separable prefix (red)
    highlightedText = highlightedText.replace(
      new RegExp(verbInfo.prefix, 'gi'),
      `<span class="text-red-600 font-bold">${verbInfo.prefix}</span>`
    );
    
    // Highlight the verb stem (blue)
    highlightedText = highlightedText.replace(
      new RegExp(verbInfo.stem, 'gi'),
      `<span class="text-blue-600 font-bold">${verbInfo.stem}</span>`
    );
    
    return highlightedText;
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

  const getExampleTranslation = (item: VocabularyItem, lang: string) => {
    switch (lang) {
      case 'en':
        return item.example_english || '';
      case 'jp':
        return item.example_japanese || '';
      case 'kr':
        return item.example_korean || '';
      case 'my':
        return item.example_myanmar || '';
      case 'th':
        return item.example_thai || '';
      case 'vi':
        return item.example_vietnamese || '';
      default:
        return item.example_english || '';
    }
  };

  const selectedLanguage = languages.find(l => l.code === selectedLang);

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
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.push('/office-daily-life')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Daily Life</span>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-2xl">{vocabularyData?.emoji}</span>
            <span className="text-sm font-medium text-blue-700">{vocabularyData?.title}</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            {vocabularyData?.title}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {vocabularyData?.description}
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
                <span className="text-3xl">🏠</span>
                <h2 className="text-2xl font-bold text-slate-900">Home & Living Vocabulary</h2>
              </div>

              {/* Vocabulary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.content.vocabulary.map((item, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/60"
                  >
                    <div className="space-y-4">
                      {/* German Word */}
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900">{item.german}</h3>
                        <div className="flex items-center gap-2">
                          <p className="text-lg text-slate-700">{getTranslation(item, selectedLang)}</p>
                          <button
                            onMouseEnter={() => playGermanText(extractGermanText(item.german))}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              playGermanText(extractGermanText(item.german));
                            }}
                            className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition"
                          >
                            <Volume2 size={16} className="text-blue-600" />
                          </button>
                        </div>
                      </div>

                      {/* Example Section */}
                      {item.example_german && (
                        <div className="border-t border-blue-200 pt-4 space-y-2">
                          <p className="text-sm text-slate-500 mb-1">Example:</p>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <span className="text-xs font-bold text-blue-600 mt-1">DE:</span>
                              <div className="flex-1 flex items-start gap-2">
                                <p 
                                  className="text-sm text-slate-700 italic flex-1"
                                  dangerouslySetInnerHTML={{ 
                                    __html: highlightSeparableVerbs(item.example_german, item.german) 
                                  }}
                                />
                                <button
                                  onMouseEnter={() => item.example_german && playGermanText(extractGermanText(item.example_german))}
                                  onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    if (item.example_german) {
                                      playGermanText(extractGermanText(item.example_german));
                                    }
                                  }}
                                  className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition flex-shrink-0 mt-0.5"
                                >
                                  <Volume2 size={12} className="text-blue-600" />
                                </button>
                              </div>
                            </div>
                            {getExampleTranslation(item, selectedLang) && (
                              <div className="flex items-start gap-2">
                                <span className="text-xs font-bold text-slate-500 mt-1">
                                  {selectedLang === 'en' ? 'EN' : selectedLang === 'jp' ? 'JP' : selectedLang === 'kr' ? 'KR' : selectedLang === 'my' ? 'MY' : selectedLang === 'th' ? 'TH' : 'VI'}:
                                </span>
                                <p className="text-sm text-slate-600">{getExampleTranslation(item, selectedLang)}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
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
            
            {/* Color Legend */}
            <div className="mb-6 p-4 bg-blue-50 rounded-xl">
              <h3 className="font-bold text-slate-700 mb-3">🎨 Color Legend for Separable Verbs (Trennbare Verben)</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">auf</span>
                  <span className="text-sm text-slate-600">= Separable prefix</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">stehen</span>
                  <span className="text-sm text-slate-600">= Verb stem</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                In German, separable verbs split when used in sentences: "Ich <span className="text-blue-600 font-bold">stehe</span> um 7 Uhr <span className="text-red-600 font-bold">auf</span>"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h3 className="font-bold text-blue-700">🏠 Home Activities</h3>
                <p className="text-sm text-slate-600">
                  Practice describing home activities: "Ich koche, ich putze, ich wasche".
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-blue-700">🛏️ Daily Routine</h3>
                <p className="text-sm text-slate-600">
                  Talk about your daily routine at home: "Ich dusche morgens, ich schlafe abends".
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-blue-700">🍽️ Kitchen Tasks</h3>
                <p className="text-sm text-slate-600">
                  Learn kitchen vocabulary: "kochen" (to cook), "backen" (to bake), "braten" (to fry).
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
