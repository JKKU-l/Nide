'use client';

import { BookOpen, Bookmark, Heart, GraduationCap, Clock, Target } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-xs h-full">
      {/* Quick Stats */}
      <div className="backdrop-blur-xl bg-white/30 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition hidden xl:block">
        <h3 className="text-slate-700 font-semibold mb-3 text-sm">Quick Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-white/30 rounded-xl">
            <p className="text-3xl font-bold text-blue-600">24</p>
            <p className="text-sm text-slate-600">Lessons</p>
          </div>
          <div className="text-center p-4 bg-white/30 rounded-xl">
            <p className="text-3xl font-bold text-emerald-600">156</p>
            <p className="text-sm text-slate-600">Vocabulary</p>
          </div>
        </div>
      </div>

      {/* Daily Goal */}
      <div className="backdrop-blur-xl bg-white/30 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition hidden xl:block">
        <div className="flex items-center gap-2 mb-3">
          <Target size={18} className="text-orange-500" />
          <h3 className="text-slate-700 font-semibold text-sm">Daily Goal</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1 h-3 bg-white/40 rounded-full overflow-hidden">
            <div className="h-full w-3/5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
          </div>
          <span className="text-sm text-slate-600 font-medium">15/25 min</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="backdrop-blur-xl bg-white/30 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition hidden xl:block">
        <h3 className="text-slate-700 font-semibold mb-3 text-sm">Quick Actions</h3>
        <div className="flex flex-col gap-3">
          <button className="flex items-center gap-3 px-4 py-4 bg-white/40 hover:bg-white/60 rounded-xl transition group">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition">
              <Bookmark size={20} className="text-blue-600" />
            </div>
            <span className="text-sm font-medium text-slate-700">Saved Lessons</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-4 bg-white/40 hover:bg-white/60 rounded-xl transition group">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition">
              <GraduationCap size={20} className="text-emerald-600" />
            </div>
            <span className="text-sm font-medium text-slate-700">Grammar Guide</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-4 bg-white/40 hover:bg-white/60 rounded-xl transition group">
            <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center group-hover:bg-rose-200 transition">
              <Heart size={20} className="text-rose-600" />
            </div>
            <span className="text-sm font-medium text-slate-600">Favorites</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-4 bg-white/40 hover:bg-white/60 rounded-xl transition group">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition">
              <Clock size={20} className="text-purple-600" />
            </div>
            <span className="text-sm font-medium text-slate-600">History</span>
          </button>
        </div>
      </div>

      {/* Learning Resources */}
      <div className="backdrop-blur-xl bg-white/30 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition hidden xl:block">
        <h3 className="text-slate-700 font-semibold mb-3 text-sm">Learning Resources</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-white/40 rounded-xl hover:bg-white/60 transition cursor-pointer">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen size={16} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-700">Grammar Book</p>
              <p className="text-xs text-slate-500">Complete reference guide</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white/40 rounded-xl hover:bg-white/60 transition cursor-pointer">
            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
              <GraduationCap size={16} className="text-emerald-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-700">Video Lessons</p>
              <p className="text-xs text-slate-500">48 HD videos available</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white/40 rounded-xl hover:bg-white/60 transition cursor-pointer">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <Heart size={16} className="text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-700">Practice Tests</p>
              <p className="text-xs text-slate-500">12 quizzes ready</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
