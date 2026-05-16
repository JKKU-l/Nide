'use client';

import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import HeroSection from '@/components/hero-section';
import FeaturedTopic from '@/components/featured-topic';
import LessonCard from '@/components/lesson-card';
import { MessageCircle, Briefcase, BookMarked, Globe, Plane, Smile } from 'lucide-react';
import { useState } from 'react';

const lessons = [
  {
    icon: <MessageCircle size={24} />,
    title: 'Beginner A1',
    description: 'Build a strong foundation in beginner German with essential grammar and vocabulary',
    progress: 65,
    color: 'blue' as const,
    href: '/lessons/beginner-a1',
  },
  {
    icon: <Briefcase size={24} />,
    title: 'German Alphabet & Pronunciation',
    description: 'Master the German alphabet, letter sounds, and pronunciation basics.',
    progress: 45,
    color: 'green' as const,
    href: '/lessons/german-alphabet',
  },
  {
    icon: <BookMarked size={24} />,
    title: 'Grammar: The 4 Cases',
    description: 'Master the four German grammatical cases: Nominative, Accusative, Dative, and Genitive.',
    progress: 85,
    color: 'emerald' as const,
    href: '/lessons/grammar-4-cases',
  },
  {
    icon: <Globe size={24} />,
    title: 'Vocabulary',
    description: 'Explore comprehensive vocabulary collections covering everyday topics, from basic necessities to advanced concepts.',
    progress: 60,
    color: 'green' as const,
    href: '/vocabulary',
  },
  {
    icon: <Plane size={24} />,
    title: 'Culture: German Festivals',
    description: 'Discover German traditions, celebrations, holidays, and cultural etiquette.',
    progress: 30,
    color: 'orange' as const,
    href: '/lessons/culture-german-festivals',
  },
  {
    icon: <Smile size={24} />,
    title: 'Daily Life',
    description: 'Learn vocabulary for everyday situations, from daily routines to work and social interactions.',
    progress: 50,
    color: 'blue' as const,
    href: '/office-daily-life',
  },
];

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLessons = lessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lesson.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300/40 via-white to-orange-300/40">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px',
      }}></div>

      <Navbar searchValue={searchQuery} onSearchChange={setSearchQuery} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="w-full space-y-8">
            {!searchQuery && (
              /* Hero + Featured Topic Row - 3:2 ratio (60%:40%) */
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Hero - Takes 60% */}
                <div className="lg:col-span-3">
                  <HeroSection />
                </div>
                {/* Featured Topic - Takes 40% */}
                <div className="lg:col-span-2">
                  <FeaturedTopic />
                </div>
              </div>
            )}

            {/* Lessons Grid */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'Your Lessons'}
              </h2>
              {filteredLessons.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredLessons.map((lesson, index) => {
                    const { icon, title, description, color, href, progress } = lesson;
                    return (
                      <LessonCard 
                        key={index}
                        icon={icon} 
                        title={title} 
                        description={description} 
                        color={color}
                        href={href}
                        progress={progress}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12 bg-white/40 backdrop-blur-md rounded-3xl border border-white/20">
                  <p className="text-slate-600 text-base md:text-lg">No lessons found matching your search.</p>
                </div>
              )}
            </div>
        </div>
      </main>

      {/* Early Access & Beta Testing */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
        {/* Decorative blurred circles */}
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-60px] right-[-60px] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            
            {/* Left Column - Images */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="flex items-center gap-4 md:gap-6">
                {/* App Features Image */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-3xl blur-2xl scale-105"></div>
                  <img
                    src="/images/app_features.jpg"
                    alt="HalloDeutsch App Features"
                    className="relative w-full max-w-[10rem] sm:max-w-[14rem] md:max-w-[16rem] rounded-2xl md:rounded-3xl shadow-2xl shadow-indigo-900/30 border border-white/10"
                    style={{
                      animation: 'floatImage 6s ease-in-out infinite',
                    }}
                  />
                </div>
                {/* Get App Image */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl blur-2xl scale-105"></div>
                  <img
                    src="/images/get_app.jpg"
                    alt="HalloDeutsch Mobile App Preview"
                    className="relative w-full max-w-[10rem] sm:max-w-[14rem] md:max-w-[16rem] rounded-2xl md:rounded-3xl shadow-2xl shadow-cyan-900/30 border border-white/10"
                    style={{
                      animation: 'floatImage 6s ease-in-out infinite',
                      animationDelay: '1s',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-semibold text-cyan-300 uppercase tracking-wider">Beta Program Open</span>
              </div>

              <h2 className="text-xl md:text-3xl font-black text-white leading-tight mb-3">
                Master German on the Go –{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Get Early Access!
                </span>
              </h2>

              <p className="text-slate-400 leading-relaxed mb-5 text-sm md:text-base">
                Our <strong className="text-white">HalloDeutsch</strong> mobile app is almost ready! We are looking for{' '}
                <strong className="text-cyan-300">20 dedicated testers</strong> to join our closed beta and help us improve.
                Be the first to experience our interactive German lessons.
              </p>

              {/* Step Buttons */}
              <div className="space-y-3">
                {/* Step 1 */}
                <a
                  href="https://groups.google.com/g/hallodeutsch-testers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 w-full px-4 py-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan-400/30 hover:border-cyan-400/60 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-cyan-300 font-black text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm md:text-base">Join Testing Group</p>
                    <p className="text-slate-500 text-xs">Sign up on Google Groups to become a beta tester</p>
                  </div>
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>

                {/* Step 2 */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.ccxstudio.hallo_deutsch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 w-full px-4 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-white font-black text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm md:text-base">Download Early Access (Play Store)</p>
                    <p className="text-blue-100/70 text-xs">Get the app and start learning German today</p>
                  </div>
                  <svg className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>

              {/* Requirement Note */}
              <div className="flex items-start gap-3 mt-4 px-4 py-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/25 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-amber-400/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-base">ℹ️</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-300/90 mb-0.5">Recommended: Android 10+</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Devices below Android 10 may experience issues with TTS audio and emoji rendering.
                  </p>
                </div>
              </div>

              {/* Trust indicator */}
              <div className="flex items-center gap-3 mt-5 text-xs text-slate-500">
                <div className="flex -space-x-2">
                  {['🇩🇪', '🇯🇵', '🇰🇷', '🇲🇲', '🇹🇭'].map((flag, i) => (
                    <span key={i} className="w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-sm">{flag}</span>
                  ))}
                </div>
                <span>Available in 6 languages · Android</span>
              </div>
            </div>
          </div>
        </div>

        {/* Float animation keyframes */}
        <style jsx>{`
          @keyframes floatImage {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer className="relative">
        {/* Gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

        <div className="backdrop-blur-xl bg-white/30 border-t border-white/20">
          {/* Main footer content */}
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200/50">
                    <span className="text-white font-black text-sm">N</span>
                  </div>
                  <span className="text-xl font-black text-slate-900 tracking-tight">Nide</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">
                  Your comprehensive German language learning platform. Master grammar, vocabulary, and culture at your own pace.
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: '𝕏', href: '#' },
                    { icon: 'in', href: '#' },
                    { icon: 'f', href: '#' },
                    { icon: '▶', href: '#' },
                  ].map((social, i) => (
                    <a key={i} href={social.href} className="w-9 h-9 rounded-xl bg-white/50 border border-white/30 flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 text-xs font-bold shadow-sm">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  {['Beginner A1', 'German Alphabet', 'Grammar: 4 Cases', 'Vocabulary', 'Daily Life'].map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Resources</h3>
                <ul className="space-y-3">
                  {['Practice Exercises', 'Grammar Reference', 'Vocabulary Lists', 'Audio Pronunciation', 'Study Tips'].map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Newsletter */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Stay Updated</h3>
                <p className="text-sm text-slate-500 mb-4">Get tips, new lessons, and study resources delivered to your inbox.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-3 py-2 text-sm rounded-xl bg-white/60 border border-white/40 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-300 transition"
                  />
                  <button className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 active:scale-95">
                    →
                  </button>
                </div>
                <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                  <span>🌍</span>
                  <span>Available in 6 languages</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/20">
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
              <p className="text-xs text-slate-400">
                © {new Date().getFullYear()} Nide.matznn.org — All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((link, i) => (
                  <a key={i} href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
