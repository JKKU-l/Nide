'use client';

import { useEffect, useState } from 'react';
import { Volume2, Globe } from 'lucide-react';

interface WotdWord {
  de: string;
  word: string;
  article: string;
  en: string;
  jp: string;
  kr: string;
  my: string;
  th: string;
  vi: string;
  pronunciation: string;
  example_de: string;
  example_en: string;
}

interface WotdCategory {
  category: string;
  category_de: string;
  icon: string;
  words: WotdWord[];
}

const WOTD_FILES = [
  '/json_files/wotd_home_living.json',
  '/json_files/wotd_family_people.json',
  '/json_files/wotd_food_drink.json',
  '/json_files/wotd_common_verbs.json',
  '/json_files/wotd_body_health.json',
  '/json_files/wotd_adjectives.json',
  '/json_files/wotd_time_calendar.json',
  '/json_files/wotd_phrases.json',
  '/json_files/wotd_places_transport.json',
  '/json_files/wotd_weather_clothing.json',
  '/json_files/wotd_school_work.json',
  '/json_files/wotd_conjunctions.json',
  '/json_files/wotd_hobbies_culture.json',
];

const LANG_OPTIONS = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'jp', label: 'JP', flag: '🇯🇵' },
  { code: 'kr', label: 'KR', flag: '🇰🇷' },
  { code: 'my', label: 'MY', flag: '🇲🇲' },
  { code: 'th', label: 'TH', flag: '🇹🇭' },
  { code: 'vi', label: 'VI', flag: '🇻🇳' },
];

export default function WordOfTheDay() {
  const [word, setWord] = useState<WotdWord | null>(null);
  const [category, setCategory] = useState<{ name: string; icon: string } | null>(null);
  const [selectedLang, setSelectedLang] = useState('en');

  useEffect(() => {
    // Determine which word to show based on day of year
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

    // Load all category files and pick one word
    Promise.all(WOTD_FILES.map((f) => fetch(f).then((r) => r.json())))
      .then((categories: WotdCategory[]) => {
        // Flatten all words with their category info
        const allWords: { word: WotdWord; category: string; icon: string }[] = [];
        categories.forEach((cat) => {
          cat.words.forEach((w) => {
            allWords.push({ word: w, category: cat.category, icon: cat.icon });
          });
        });

        if (allWords.length > 0) {
          const idx = dayOfYear % allWords.length;
          const picked = allWords[idx];
          setWord(picked.word);
          setCategory({ name: picked.category, icon: picked.icon });
        }
      })
      .catch((err) => console.error('Failed to load WotD:', err));
  }, []);

  const speakGerman = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getTranslation = (item: any, lang: string): string => {
    return item[lang] || item.en || '';
  };

  const articleColor = (article: string) => {
    if (article === 'der') return { bg: '#3B82F620', text: '#2563EB' };
    if (article === 'die') return { bg: '#EC489920', text: '#DB2777' };
    if (article === 'das') return { bg: '#10B98120', text: '#059669' };
    return { bg: 'transparent', text: '#64748b' };
  };

  if (!word) {
    return (
      <div className="backdrop-blur-xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 border border-white/30 rounded-3xl p-5 shadow-xl">
        <div className="animate-pulse h-24 rounded-xl bg-white/30"></div>
      </div>
    );
  }

  const colors = articleColor(word.article);
  const selectedLangInfo = LANG_OPTIONS.find((l) => l.code === selectedLang)!;

  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 border border-white/30 rounded-3xl p-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Daily</span>
          <h3 className="text-sm font-bold text-slate-700">Word of the Day</h3>
        </div>
        {category && (
          <span className="text-[10px] text-slate-400 font-medium">
            {category.icon} {category.name}
          </span>
        )}
      </div>

      {/* Word */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="text-2xl font-black text-slate-900">{word.de}</p>
            {word.article && (
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                style={{ backgroundColor: colors.bg, color: colors.text }}
              >
                {word.article}
              </span>
            )}
          </div>
          <p className="text-sm text-slate-400 mb-1">{word.pronunciation}</p>
          <p className="text-sm text-slate-700 font-semibold">
            {selectedLangInfo.flag} {getTranslation(word, selectedLang)}
          </p>
        </div>
        <button
          onClick={() => speakGerman(word.de)}
          className="p-2 rounded-full bg-white/50 hover:bg-white transition hover:shadow-md"
          title="Listen to pronunciation"
        >
          <Volume2 size={20} className="text-blue-600" />
        </button>
      </div>

      {/* Example */}
      <p className="text-xs text-slate-500 mt-3 italic border-l-2 border-blue-200 pl-2">
        &quot;{word.example_de}&quot;
      </p>
      <p className="text-[10px] text-slate-400 mt-1 pl-2">
        {word.example_en}
      </p>

      {/* Language Switcher */}
      <div className="flex items-center gap-1 mt-3 pt-3 border-t border-white/30">
        <Globe size={12} className="text-slate-400 mr-1" />
        {LANG_OPTIONS.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setSelectedLang(lang.code)}
            className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md transition ${
              selectedLang === lang.code
                ? 'bg-blue-500 text-white'
                : 'bg-white/40 text-slate-500 hover:bg-white/70'
            }`}
          >
            {lang.flag}
          </button>
        ))}
      </div>
    </div>
  );
}
