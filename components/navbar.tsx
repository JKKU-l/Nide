'use client';

import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { Home, Book, Grid3x3, Pencil, Search, Menu, X } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Book, label: 'Courses', href: '/courses' },
  { icon: Grid3x3, label: 'Topics', href: '/topics' },
  { icon: Pencil, label: 'Exercises', href: '/exercises' },
];

interface NavbarProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

export default function Navbar({ searchValue = '', onSearchChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/30 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-3xl font-black text-slate-900 tracking-tight">
          Nide
          <Image src="/cartoons/uovo_sorridente.svg" alt="Nide mascot" width={36} height={36} />
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
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-white/50 backdrop-blur-md rounded-full px-4 py-2 border border-white/30 hover:border-white/50 transition">
            <Search size={18} className="text-slate-500" />
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onSearchChange?.(e.target.value)}
              className="bg-transparent outline-none text-slate-700 placeholder-slate-400 w-24 lg:w-32 text-sm"
            />
          </div>

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
            <div className="flex items-center gap-2 bg-white/50 rounded-full px-4 py-2 border border-white/30 mt-3 sm:hidden">
              <Search size={18} className="text-slate-500" />
              <input
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onSearchChange?.(e.target.value)}
                className="bg-transparent outline-none text-slate-700 placeholder-slate-400 w-full text-sm"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
