'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, Volume2, ChevronDown, ChevronUp, Globe, Sparkles } from 'lucide-react';
import Navbar from '@/components/navbar';
import { playGermanText } from '@/lib/tts';

interface VocabItem {
  de: string;
  article: string;
  en: string;
  jp: string;
  kr: string;
  my: string;
  th: string;
  vi: string;
  example_de: string;
  example_en: string;
}

interface Subtopic {
  id: string;
  title: string;
  title_de: string;
  image: string;
  banner_image?: string;
  content: string;
  content_de?: string;
  vocabulary: VocabItem[];
}

interface Fact {
  de: string;
  en: string;
  jp: string;
  kr: string;
  my: string;
  th: string;
  vi: string;
}

interface TopicData {
  title_en: string;
  title_de: string;
  icon: string;
  theme_color: string;
  description: string;
  interesting_facts?: {
    title: string;
    title_de: string;
    facts: Fact[];
  };
  subtopics: Subtopic[];
}

const LANG_OPTIONS = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'jp', label: '日本語', flag: '🇯🇵' },
  { code: 'kr', label: '한국어', flag: '🇰🇷' },
  { code: 'my', label: 'မြန်မာ', flag: '🇲🇲' },
  { code: 'th', label: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
];

export default function CultureGermanFestivalsPage() {
  const [topic, setTopic] = useState<TopicData | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedLang, setSelectedLang] = useState('en');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    fetch('/json_files/culture_german_festivals.json')
      .then((res) => res.json())
      .then((data: TopicData) => {
        setTopic(data);
        if (data.subtopics.length > 0) {
          setExpandedSection(data.subtopics[0].id);
        }
      })
      .catch((err) => console.error('Failed to load topic:', err));
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getTranslation = (item: any, lang: string): string => {
    return item[lang] || item.en || '';
  };

  const selectedLangInfo = LANG_OPTIONS.find((l) => l.code === selectedLang)!;



  if (!topic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-200/40 via-white to-amber-200/40 flex items-center justify-center">
        <div className="animate-pulse text-slate-400 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200/40 via-white to-amber-200/40">
      {/* Background Grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px',
      }}></div>

      <Navbar />

      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 relative z-10">
        {/* Back Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition mb-6 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </a>

        {/* Hero Banner */}
        <div
          className="relative overflow-hidden rounded-3xl p-8 md:p-10 mb-10 shadow-2xl border border-white/20"
          style={{
            background: `linear-gradient(135deg, ${topic.theme_color}15, ${topic.theme_color}30, white)`,
          }}
        >
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none"
            style={{ backgroundColor: `${topic.theme_color}10` }}
          ></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl pointer-events-none"
            style={{ backgroundColor: `${topic.theme_color}08` }}
          ></div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Icon */}
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-2xl flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${topic.theme_color}20, ${topic.theme_color}05)` }}
            >
              <span className="text-7xl md:text-8xl">{topic.icon}</span>
            </div>

            {/* Info */}
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: `${topic.theme_color}15`, color: topic.theme_color }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: topic.theme_color }}></span>
                <span className="text-xs font-bold uppercase tracking-wider">Culture · Festivals</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-1">{topic.title_en}</h1>
              <p className="text-xl text-slate-500 italic mb-4">{topic.title_de}</p>
              <p className="text-base text-slate-600 leading-relaxed max-w-lg">{topic.description}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mt-5 justify-center md:justify-start">
                <div className="flex items-center gap-1.5 text-sm text-slate-500">
                  <span className="font-bold text-slate-800">{topic.subtopics.length}</span> Festivals
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-500">
                  <span className="font-bold text-slate-800">
                    {topic.subtopics.reduce((sum, s) => sum + s.vocabulary.length, 0)}
                  </span> Vocabulary Words
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-500">
                  <span className="font-bold text-slate-800">6</span> Languages
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interesting Facts Section */}
        {topic.interesting_facts && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ backgroundColor: `${topic.theme_color}15` }}
              >
                <Sparkles size={20} style={{ color: topic.theme_color }} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{topic.interesting_facts.title}</h2>
                <p className="text-sm text-slate-500 italic">{topic.interesting_facts.title_de}</p>
              </div>
            </div>

            <div className="grid gap-3">
              {topic.interesting_facts.facts.map((fact, idx) => (
                <div
                  key={idx}
                  className="backdrop-blur-xl bg-white/50 border border-white/30 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-lg mt-0.5">💡</span>
                    <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed flex-1">
                      {fact.de}
                    </p>
                    <button
                      onClick={() => playGermanText(fact.de)}
                      className="p-1.5 rounded-lg hover:bg-orange-50 transition flex-shrink-0"
                      title="Listen to German"
                    >
                      <Volume2 size={16} className="text-orange-500" />
                    </button>
                  </div>
                  <p className="text-sm text-slate-500 pl-7 border-l-2 ml-2"
                    style={{ borderColor: `${topic.theme_color}30` }}
                  >
                    {getTranslation(fact, selectedLang)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Language Selector */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">Explore Festivals</h2>

          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-md hover:shadow-lg transition text-sm font-medium text-slate-700"
            >
              <Globe size={16} className="text-slate-400" />
              <span>{selectedLangInfo.flag} {selectedLangInfo.label}</span>
              <ChevronDown size={14} className={`text-slate-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white/90 backdrop-blur-xl border border-white/40 rounded-xl shadow-xl z-50 overflow-hidden">
                {LANG_OPTIONS.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-left hover:bg-orange-50 transition ${
                      selectedLang === lang.code ? 'bg-orange-50 font-semibold text-orange-700' : 'text-slate-700'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Festival Sections */}
        <div className="space-y-4">
          {topic.subtopics.map((section, sectionIdx) => {
            const isExpanded = expandedSection === section.id;
            return (
              <div
                key={section.id}
                className="rounded-2xl border border-white/30 shadow-lg overflow-hidden transition-all duration-300"
                style={{
                  background: isExpanded
                    ? `linear-gradient(135deg, white, ${topic.theme_color}05)`
                    : 'rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Section Header */}
                <button
                  onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                  className="w-full flex items-center gap-4 p-5 md:p-6 text-left hover:bg-white/30 transition group"
                >
                  {/* Number Badge */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: topic.theme_color }}
                  >
                    {sectionIdx + 1}
                  </div>

                  {/* Section Image */}
                  <div className="w-14 h-14 flex-shrink-0 hidden sm:flex items-center justify-center rounded-xl overflow-hidden border border-white/30 shadow-sm">
                    <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                  </div>

                  {/* Title */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900">{section.title}</h3>
                    <p className="text-sm text-slate-500 italic">{section.title_de}</p>
                  </div>

                  {/* Word count + toggle */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full hidden sm:inline-block"
                      style={{ backgroundColor: `${topic.theme_color}12`, color: topic.theme_color }}
                    >
                      {section.vocabulary.length} words
                    </span>
                    {isExpanded ? (
                      <ChevronUp size={20} className="text-slate-400" />
                    ) : (
                      <ChevronDown size={20} className="text-slate-400" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-5 md:px-6 pb-6">
                    {/* Festival Image + Description */}
                    <div className="mb-6 rounded-2xl overflow-hidden border border-white/30 shadow-md">
                      {/* Large festival image */}
                      <div className="relative w-full h-48 md:h-64 overflow-hidden">
                        <img
                          src={section.banner_image || section.image}
                          alt={section.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4 className="text-white font-bold text-lg md:text-xl drop-shadow-lg">{section.title}</h4>
                          <p className="text-white/80 text-sm italic drop-shadow">{section.title_de}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="p-5 bg-white/40">
                        <p className="text-sm text-slate-700 leading-relaxed">{section.content}</p>
                        {section.content_de && (
                          <div className="flex items-start gap-3 mt-3 pt-3 border-t border-white/30">
                            <p className="text-sm text-slate-500 italic leading-relaxed flex-1">
                              {section.content_de}
                            </p>
                            <button
                              onClick={() => playGermanText(section.content_de!)}
                              className="p-2 rounded-xl bg-orange-50 hover:bg-orange-100 transition flex-shrink-0"
                              title="Listen to German description"
                            >
                              <Volume2 size={16} className="text-orange-500" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Vocabulary Table */}
                    <div className="overflow-x-auto rounded-xl border border-white/30">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-white/50">
                            <th className="text-left py-3 px-4 font-bold text-slate-700 whitespace-nowrap">🇩🇪 Deutsch</th>
                            <th className="text-left py-3 px-4 font-bold text-slate-700 whitespace-nowrap">
                              {selectedLangInfo.flag} {selectedLangInfo.label}
                            </th>
                            <th className="text-left py-3 px-4 font-bold text-slate-700 whitespace-nowrap hidden md:table-cell">Beispiel</th>
                            <th className="py-3 px-3 w-10"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.vocabulary.map((word, wordIdx) => (
                            <tr
                              key={wordIdx}
                              className="border-t border-white/20 hover:bg-white/40 transition group/row"
                            >
                              <td className="py-3.5 px-4">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-bold text-slate-900">{word.de}</span>
                                  <button
                                    onClick={() => playGermanText(word.de)}
                                    className="p-1 rounded-md hover:bg-orange-50 transition opacity-40 hover:opacity-100"
                                    title="Listen to word"
                                  >
                                    <Volume2 size={13} className="text-orange-500" />
                                  </button>
                                </div>
                                {word.article && (
                                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded mt-0.5 inline-block"
                                    style={{
                                      backgroundColor:
                                        word.article === 'der' ? '#3B82F620' :
                                        word.article === 'die' ? '#EC489920' :
                                        '#10B98120',
                                      color:
                                        word.article === 'der' ? '#2563EB' :
                                        word.article === 'die' ? '#DB2777' :
                                        '#059669',
                                    }}
                                  >
                                    {word.article}
                                  </span>
                                )}
                              </td>
                              <td className="py-3.5 px-4 text-slate-700">
                                {getTranslation(word, selectedLang)}
                              </td>
                              <td className="py-3.5 px-4 text-slate-500 text-xs hidden md:table-cell">
                                <div className="italic">&quot;{word.example_de}&quot;</div>
                                <div className="text-slate-400 mt-0.5">{word.example_en}</div>
                              </td>
                              <td className="py-3.5 px-3">
                                <button
                                  onClick={() => playGermanText(word.example_de)}
                                  className="p-1.5 rounded-lg hover:bg-orange-50 transition opacity-50 group-hover/row:opacity-100"
                                  title="Listen to example sentence"
                                >
                                  <Volume2 size={16} className="text-orange-500" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile Examples */}
                    <div className="mt-4 space-y-2 md:hidden">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Example Sentences</p>
                      {section.vocabulary.map((word, wordIdx) => (
                        <div key={wordIdx} className="p-3 rounded-lg bg-white/30 text-xs">
                          <p className="font-semibold text-slate-800 italic">&quot;{word.example_de}&quot;</p>
                          <p className="text-slate-500 mt-0.5">{word.example_en}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl inline-block">
            <span className="text-5xl block mb-4">🇩🇪🎉</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Prost! Keep Exploring!</h3>
            <p className="text-sm text-slate-500 mb-5 max-w-sm mx-auto">
              German festivals are a wonderful way to experience the culture. Practice these words and impress everyone at the next Volksfest!
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm"
            >
              Back to Dashboard
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
