'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen, Clock, Languages, Layers, Scale, ArrowRight, HelpCircle } from 'lucide-react';
import Navbar from '@/components/navbar';

interface ExerciseTopic {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  status: 'Available' | 'Coming Soon';
}

const exerciseTopics: ExerciseTopic[] = [
  {
    id: 'verb-conjugation',
    title: 'Verb Conjugation',
    description: 'Master German verb conjugation patterns for regular, irregular, and modal verbs',
    icon: BookOpen,
    color: '#4CAF50',
    status: 'Available',
  },
  {
    id: 'verb-tenses',
    title: 'Verb Tenses',
    description: 'Learn present, past, perfect, and future tenses with proper usage',
    icon: Clock,
    color: '#2196F3',
    status: 'Available',
  },
  {
    id: 'noun-genders',
    title: 'Noun Genders',
    description: 'Understand masculine, feminine, and neuter noun genders with rules and patterns',
    icon: Languages,
    color: '#FF9800',
    status: 'Available',
  },
  {
    id: 'noun-plurals',
    title: 'Noun Plurals',
    description: 'Learn the various plural formation rules and exceptions in German',
    icon: Layers,
    color: '#9C27B0',
    status: 'Available',
  },
  {
    id: 'german-cases',
    title: 'German Cases',
    description: 'Master Nominative, Accusative, Dative, and Genitive cases with practical examples',
    icon: Scale,
    color: '#E91E63',
    status: 'Coming Soon',
  },
  {
    id: 'prepositions',
    title: 'Prepositions',
    description: 'Learn accusative, dative, and two-way prepositions with correct case usage',
    icon: ArrowRight,
    color: '#3F51B5',
    status: 'Coming Soon',
  },
  {
    id: 'word-order-questions',
    title: 'Word Order and Questions',
    description: 'Understand German sentence structure, word order rules, and question formation',
    icon: HelpCircle,
    color: '#00BCD4',
    status: 'Coming Soon',
  },
];

export default function Exercises() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300/40 via-white to-purple-300/40">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <BookOpen size={20} className="text-blue-700" />
            <span className="text-sm font-medium text-blue-700">German Grammar Exercises</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            Grammar Topics
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Practice and master essential German grammar topics with interactive exercises and detailed explanations.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exerciseTopics.map((topic) => (
            <div
              key={topic.id}
              className={`backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/60 cursor-pointer ${
                topic.status === 'Available' ? 'hover:border-green-400' : 'opacity-75'
              }`}
              onClick={() => {
                if (topic.id === 'verb-conjugation') {
                  router.push('/exercises/verb-conjugation');
                } else if (topic.id === 'verb-tenses') {
                  router.push('/exercises/verb-tenses');
                } else if (topic.id === 'noun-genders') {
                  router.push('/exercises/noun-genders');
                } else if (topic.id === 'noun-plurals') {
                  router.push('/exercises/noun-plurals');
                } else {
                  alert(`Exercise topic "${topic.title}" will be implemented soon!`);
                }
              }}
            >
              <div className="space-y-4">
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white"
                  style={{ backgroundColor: topic.color }}
                >
                  <topic.icon size={32} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900">{topic.title}</h3>

                {/* Description */}
                <p className="text-sm text-slate-600">{topic.description}</p>

                {/* Status Badge */}
                <div className="text-center">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                    topic.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {topic.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-12 text-center">
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              🎯 Recommended Learning Path
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="text-sm text-slate-600">Verb Conjugation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span className="text-sm text-slate-600">Verb Tenses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                <span className="text-sm text-slate-600">Noun Genders</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <span className="text-sm text-slate-600">Noun Plurals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-pink-500"></div>
                <span className="text-sm text-slate-600">German Cases</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
                <span className="text-sm text-slate-600">Prepositions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
                <span className="text-sm text-slate-600">Word Order & Questions</span>
              </div>
            </div>
            <p className="text-sm text-slate-500">
              Start with verb conjugation and progress through the topics to build a solid German grammar foundation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
