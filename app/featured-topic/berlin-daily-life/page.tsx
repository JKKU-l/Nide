'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, Volume2, ChevronDown, ChevronUp, Globe } from 'lucide-react';
import Navbar from '@/components/navbar';

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
  content: string;
  vocabulary: VocabItem[];
}

interface StoryParagraph {
  de: string;
  en: string;
  jp: string;
  kr: string;
  my: string;
  th: string;
  vi: string;
  vocab_highlights: string[];
}

interface Story {
  title_de: string;
  title_en: string;
  paragraphs: StoryParagraph[];
}

interface TopicData {
  title_en: string;
  title_de: string;
  icon: string;
  theme_color: string;
  image?: string;
  description: string;
  story?: Story;
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

export default function BerlinDailyLifePage() {
  const [topic, setTopic] = useState<TopicData | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedLang, setSelectedLang] = useState('en');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [showStoryTranslation, setShowStoryTranslation] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/json_files/featured_topic_05_berlin_daily_life.json')
      .then((res) => res.json())
      .then((data: TopicData) => {
        setTopic(data);
        if (data.subtopics.length > 0) {
          setExpandedSection(data.subtopics[0].id);
        }
      })
      .catch((err) => console.error('Failed to load topic:', err));
  }, []);

  const filteredSubtopics = topic?.subtopics.filter((subtopic) =>
    subtopic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subtopic.title_de.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subtopic.vocabulary.some(v => 
      v.de.toLowerCase().includes(searchQuery.toLowerCase()) || 
      v.en.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getTranslation = (item: any, lang: string): string => {
    return item[lang] || item.en || '';
  };

  const highlightVocab = (text: string, highlights: string[]): React.ReactNode => {
    if (!highlights.length) return text;
    // Sort by length descending to match longest first
    const sorted = [...highlights].sort((a, b) => b.length - a.length);
    const escaped = sorted.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escaped.join('|')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => {
      const isHighlight = sorted.some((h) => h.toLowerCase() === part.toLowerCase());
      if (isHighlight) {
        return (
          <span
            key={i}
            className="font-bold px-0.5 rounded cursor-help"
            style={{ backgroundColor: `${topic?.theme_color || '#3B82F6'}25`, color: topic?.theme_color }}
            title={part}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const selectedLangInfo = LANG_OPTIONS.find((l) => l.code === selectedLang)!;

  const speakGerman = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.85;
      speechSynthesis.speak(utterance);
    }
  };

  if (!topic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-300/40 via-white to-orange-300/40 flex items-center justify-center">
        <div className="animate-pulse text-slate-400 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300/40 via-white to-orange-300/40">
      {/* Background Grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px',
      }}></div>

      <Navbar searchValue={searchQuery} onSearchChange={setSearchQuery} />

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

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Illustration */}
            <div className="w-40 h-40 md:w-52 md:h-52 flex-shrink-0 rounded-2xl flex items-center justify-center overflow-hidden">
              {topic.image ? (
                <img src={topic.image} alt={topic.title_en} className="w-full h-full object-contain drop-shadow-lg" />
              ) : (
                <span className="text-7xl">{topic.icon}</span>
              )}
            </div>

            {/* Info */}
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: `${topic.theme_color}15`, color: topic.theme_color }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: topic.theme_color }}></span>
                <span className="text-xs font-bold uppercase tracking-wider">Featured Topic · May</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-1">{topic.title_en}</h1>
              <p className="text-xl text-slate-500 italic mb-4">{topic.title_de}</p>
              <p className="text-base text-slate-600 leading-relaxed max-w-lg">{topic.description}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mt-5 justify-center md:justify-start">
                <div className="flex items-center gap-1.5 text-sm text-slate-500">
                  <span className="font-bold text-slate-800">{topic.subtopics.length}</span> Sections
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

        {/* Story Section */}
        {topic.story && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ backgroundColor: `${topic.theme_color}15` }}>
                📖
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">{topic.story.title_de}</h2>
                <p className="text-sm text-slate-500 italic">{topic.story.title_en}</p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/50 border border-white/30 rounded-3xl shadow-xl overflow-hidden">
              {/* Story Toggle Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-6 py-4 border-b border-white/20 bg-white/30">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${topic.theme_color}12`, color: topic.theme_color }}>
                    {topic.story.paragraphs.reduce((sum, p) => sum + p.vocab_highlights.length, 0)} vocab words used
                  </span>
                  <span className="text-xs text-slate-400 hidden sm:inline">· Highlighted words are from the vocabulary sections</span>
                </div>
                <div className="flex items-center gap-1">
                  {/* German Only Button */}
                  <button
                    onClick={() => setShowStoryTranslation(false)}
                    className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-full transition ${
                      !showStoryTranslation
                        ? 'bg-slate-800 text-white shadow-md'
                        : 'bg-white/50 text-slate-500 hover:bg-white/80'
                    }`}
                  >
                    🇩🇪 DE
                  </button>
                  {/* Language Options */}
                  {LANG_OPTIONS.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setShowStoryTranslation(true);
                      }}
                      className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-full transition ${
                        showStoryTranslation && selectedLang === lang.code
                          ? 'shadow-md'
                          : 'bg-white/50 text-slate-500 hover:bg-white/80'
                      }`}
                      style={
                        showStoryTranslation && selectedLang === lang.code
                          ? { backgroundColor: `${topic.theme_color}15`, color: topic.theme_color }
                          : undefined
                      }
                    >
                      {lang.flag}
                      <span className="hidden md:inline">{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Story Paragraphs */}
              <div className="p-6 md:p-8 space-y-6">
                {topic.story.paragraphs.map((para, idx) => (
                  <div key={idx} className="group">
                    {/* German Text */}
                    <p className="text-base md:text-lg leading-relaxed text-slate-800">
                      <span className="font-bold text-slate-400 mr-2 text-sm">{idx + 1}.</span>
                      {highlightVocab(para.de, para.vocab_highlights)}
                    </p>

                    {/* Translation (togglable) */}
                    {showStoryTranslation && (
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed pl-6 border-l-2 ml-2"
                        style={{ borderColor: `${topic.theme_color}30` }}
                      >
                        {getTranslation(para, selectedLang)}
                      </p>
                    )}

                    {/* Vocab pills */}
                    <div className="flex flex-wrap gap-1.5 mt-2.5 pl-6">
                      {para.vocab_highlights.slice(0, 6).map((word, wi) => (
                        <button
                          key={wi}
                          onClick={() => speakGerman(word)}
                          className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full border transition hover:shadow-sm"
                          style={{
                            borderColor: `${topic.theme_color}25`,
                            color: topic.theme_color,
                            backgroundColor: `${topic.theme_color}08`,
                          }}
                        >
                          <Volume2 size={10} />
                          {word}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Story Footer */}
              <div className="px-6 py-4 bg-white/20 border-t border-white/20 flex items-center gap-3">
                <img src="/cartoons/reader_boy.svg" alt="" className="w-8 h-8 object-contain opacity-60" />
                <p className="text-xs text-slate-400 italic">
                  Tip: Read the story once in German, then toggle the translation to check your understanding!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Language Selector */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">Explore Sections</h2>

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
                    className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-left hover:bg-blue-50 transition ${
                      selectedLang === lang.code ? 'bg-blue-50 font-semibold text-blue-700' : 'text-slate-700'
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

        {/* Sections */}
        <div className="space-y-4">
          {filteredSubtopics && filteredSubtopics.length > 0 ? (
            filteredSubtopics.map((section, sectionIdx) => {
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
                  {/* ... header ... */}
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
                  <div className="w-12 h-12 flex-shrink-0 hidden sm:flex items-center justify-center">
                    <img src={section.image} alt={section.title} className="w-full h-full object-contain" />
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
                    {/* Description */}
                    <div className="flex items-start gap-4 mb-6 p-4 rounded-xl bg-white/40 border border-white/30">
                      <div className="w-16 h-16 flex-shrink-0 hidden md:flex items-center justify-center">
                        <img src={section.image} alt="" className="w-full h-full object-contain opacity-70" />
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{section.content}</p>
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
                                <div className="font-bold text-slate-900">{word.de}</div>
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
                                  onClick={() => speakGerman(word.de)}
                                  className="p-1.5 rounded-lg hover:bg-blue-50 transition opacity-50 group-hover/row:opacity-100"
                                  title="Listen to pronunciation"
                                >
                                  <Volume2 size={16} className="text-blue-500" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile Examples (visible on small screens) */}
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
            })
          ) : (
            <div className="text-center py-12 bg-white/40 backdrop-blur-md rounded-3xl border border-white/20">
              <p className="text-slate-600 text-lg">No sections or vocabulary found matching your search.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl inline-block">
            <img src="/cartoons/cat_on_the_mat.svg" alt="" className="w-20 h-20 mx-auto mb-4 opacity-80" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Keep Exploring!</h3>
            <p className="text-sm text-slate-500 mb-5 max-w-sm mx-auto">
              A new featured topic appears every month. Practice these words daily and you&apos;ll master Berlin life in no time!
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm"
            >
              Back to Dashboard
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
