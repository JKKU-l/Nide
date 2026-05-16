'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const router = useRouter();

  return (
    <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-6 md:p-10 shadow-xl h-full">
      {/* Golden Ratio Grid: 5:3 (≈1.667:1 ≈ 1.618:1) */}
      <div className="grid grid-cols-1 md:grid-cols-8 gap-6 items-center h-full">
        {/* Left Content - Takes ~62% (golden ratio portion) */}
        <div className="md:col-span-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Learn German with Nide
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-slate-700 mb-6 leading-relaxed">
            Your journey to mastering German starts here. Interactive lessons, real-world practice, and personalized learning paths to help you speak with confidence.
          </p>
          <button 
            onClick={() => router.push('/courses')}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Start for Free
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Illustration - Takes ~38% */}
        <div className="md:col-span-3 flex items-center justify-center">
          <img 
            src="/cartoons/study_hard.svg" 
            alt="Study hard illustration"
            className="w-full max-w-[220px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
