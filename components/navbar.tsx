'use client';

import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { Home, Book, Grid3x3, Pencil, Search, Menu, X, ArrowRight } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Book, label: 'Courses', href: '/courses' },
  { icon: Grid3x3, label: 'Topics', href: '/topics' },
  { icon: Pencil, label: 'Exercises', href: '/exercises' },
];

const globalSearchItems = [
  { title: 'Beginner A1', category: 'Course', href: '/lessons/beginner-a1' },
  { title: 'Alphabet & Pronunciation', category: 'Lesson', href: '/lessons/german-alphabet' },
  { title: 'Grammar: The 4 Cases', category: 'Lesson', href: '/lessons/grammar-4-cases' },
  { title: 'Vocabulary Library', category: 'Library', href: '/vocabulary' },
  { title: 'German Festivals', category: 'Culture', href: '/lessons/culture-german-festivals' },
  { title: 'Daily Life & Office', category: 'Topics', href: '/office-daily-life' },
  { title: 'Verb Conjugation', category: 'Exercise', href: '/exercises/verb-conjugation' },
  { title: 'Noun Genders', category: 'Exercise', href: '/exercises/noun-genders' },
  { title: 'My Family', category: 'Topic', href: '/topics/my-family' },
  { title: 'At the Restaurant', category: 'Topic', href: '/topics/at-restaurant' },
  { title: 'Shopping & Market', category: 'Topic', href: '/office-daily-life/shopping-market' },
];

interface NavbarProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

export default function Navbar({ searchValue: propSearchValue, onSearchChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [localSearchValue, setLocalSearchValue] = useState('');
  const [showResults, setShowResults] = useState(false);

  const searchValue = propSearchValue !== undefined ? propSearchValue : localSearchValue;

  const filteredGlobalItems = globalSearchItems.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    item.category.toLowerCase().includes(searchValue.toLowerCase())
  ).slice(0, 5);

  const handleSearchChange = (value: string) => {
    if (onSearchChange) {
      onSearchChange(value);
    } else {
      setLocalSearchValue(value);
    }
    setShowResults(value.length > 0);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/30 border-b border-white/20 shadow-lg" onMouseLeave={() => setShowResults(false)}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl md:text-3xl font-black text-slate-900 tracking-tight cursor-pointer" onClick={() => window.location.href = '/'}>
          Nide
          <Image src="/cartoons/uovo_sorridente.svg" alt="Nide mascot" width={32} height={32} className="md:w-[36px] md:h-[36px]" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition font-medium"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Search Bar & Mobile Menu Button */}
        <div className="flex items-center gap-3 relative">
          <div className="hidden sm:flex items-center gap-2 bg-white/50 backdrop-blur-md rounded-full px-4 py-2 border border-white/30 hover:border-white/50 transition focus-within:ring-2 focus-within:ring-blue-400/50">
            <Search size={18} className="text-slate-500" />
            <input
              type="text"
              placeholder="Search anything..."
              value={searchValue}
              onFocus={() => setShowResults(searchValue.length > 0)}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearchChange(e.target.value)}
              className="bg-transparent outline-none text-slate-700 placeholder-slate-400 w-24 lg:w-48 text-sm transition-all focus:w-32 lg:focus:w-64"
            />
            {searchValue && (
              <button onClick={() => handleSearchChange('')} className="text-slate-400 hover:text-slate-600 transition">
                <X size={14} />
              </button>
            )}
          </div>

          {/* Global Search Results Overlay */}
          {showResults && filteredGlobalItems.length > 0 && (
            <div className="absolute top-full right-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden z-[60]">
              <div className="p-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-2">Quick Results</p>
                {filteredGlobalItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center justify-between gap-3 px-3 py-2.5 hover:bg-blue-50 rounded-xl transition group"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-slate-800 truncate">{item.title}</p>
                      <p className="text-[10px] font-medium text-slate-500">{item.category}</p>
                    </div>
                    <ArrowRight size={14} className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/50 transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/20 bg-white/40 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-700 hover:bg-white/50 hover:text-slate-900 transition"
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
            {/* Mobile Search */}
            <div className="flex flex-col gap-2 mt-3 sm:hidden">
              <div className="flex items-center gap-2 bg-white/50 rounded-full px-4 py-2 border border-white/30">
                <Search size={18} className="text-slate-500" />
                <input
                  type="text"
                  placeholder="Search anything..."
                  value={searchValue}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearchChange(e.target.value)}
                  className="bg-transparent outline-none text-slate-700 placeholder-slate-400 w-full text-sm"
                />
                {searchValue && (
                  <button onClick={() => handleSearchChange('')} className="text-slate-400 hover:text-slate-600 transition">
                    <X size={14} />
                  </button>
                )}
              </div>
              
              {searchValue && filteredGlobalItems.length > 0 && (
                <div className="bg-white/40 rounded-2xl border border-white/20 overflow-hidden mt-1">
                  {filteredGlobalItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 hover:bg-white/40 transition border-b border-white/10 last:border-0"
                    >
                      <div>
                        <p className="text-sm font-bold text-slate-800">{item.title}</p>
                        <p className="text-[10px] text-slate-500">{item.category}</p>
                      </div>
                      <ArrowRight size={14} className="text-slate-400" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
