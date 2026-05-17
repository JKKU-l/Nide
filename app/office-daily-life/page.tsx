'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/navbar';

interface Topic {
  id: string;
  title: string;
  emoji: string;
  description: string;
  color: string;
}

const topics: Topic[] = [
  {
    id: 'daily_routine_time',
    title: 'Daily Routine & Time',
    emoji: '⏰',
    description: 'Daily activities and time expressions',
    color: '#2196F3',
  },
  {
    id: 'home_living',
    title: 'Home & Living',
    emoji: '🏠',
    description: 'House, furniture, and daily life at home',
    color: '#4CAF50',
  },
  {
    id: 'family_relationships',
    title: 'Family & Relationships',
    emoji: '👨‍👩‍👧‍👦',
    description: 'Family members and relationships',
    color: '#E91E63',
  },
  {
    id: 'social_life_community',
    title: 'Social Life & Community',
    emoji: '👥',
    description: 'Social interactions and community',
    color: '#9C27B0',
  },
  {
    id: 'food_cooking',
    title: 'Food & Cooking',
    emoji: '🍳',
    description: 'Food, cooking, and kitchen vocabulary',
    color: '#FF9800',
  },
  {
    id: 'clothing_appearance',
    title: 'Clothing & Appearance',
    emoji: '👔',
    description: 'Clothes, accessories, and personal appearance',
    color: '#3F51B5',
  },
  {
    id: 'shopping_market',
    title: 'Shopping & Market',
    emoji: '🛒',
    description: 'Shopping, stores, and marketplaces',
    color: '#009688',
  },
  {
    id: 'transportation_travel',
    title: 'Transportation & Travel',
    emoji: '🚗',
    description: 'Vehicles, travel, and transportation',
    color: '#F44336',
  },
  {
    id: 'health_body',
    title: 'Health & Body',
    emoji: '🏥',
    description: 'Health, body parts, and medical terms',
    color: '#8BC34A',
  },
  {
    id: 'education_school',
    title: 'Education & School',
    emoji: '🎓',
    description: 'School, education, and learning',
    color: '#FFC107',
  },
  {
    id: 'work_office',
    title: 'Work & Office',
    emoji: '💼',
    description: 'Workplace, office, and professional life',
    color: '#795548',
  },
  {
    id: 'technology_media',
    title: 'Technology & Media',
    emoji: '💻',
    description: 'Technology, devices, and media',
    color: '#00BCD4',
  },
  {
    id: 'nature_environment',
    title: 'Nature & Environment',
    emoji: '🌿',
    description: 'Nature, environment, and weather',
    color: '#8BC34A',
  },
  {
    id: 'sports_fitness',
    title: 'Sports & Fitness',
    emoji: '⚽',
    description: 'Sports, fitness, and physical activities',
    color: '#FF5722',
  },
  {
    id: 'leisure_hobbies',
    title: 'Leisure & Hobbies',
    emoji: '🎨',
    description: 'Free time activities and hobbies',
    color: '#9C27B0',
  },
  {
    id: 'emotions_communication',
    title: 'Emotions & Communication',
    emoji: '💬',
    description: 'Feelings and communication',
    color: '#2196F3',
  },
  {
    id: 'banking_money',
    title: 'Banking & Money',
    emoji: '💰',
    description: 'Banking, finance, and money',
    color: '#4CAF50',
  },
  {
    id: 'government_official',
    title: 'Government & Official Life',
    emoji: '🏛️',
    description: 'Government offices and official matters',
    color: '#9E9E9E',
  },
  {
    id: 'weather_seasons',
    title: 'Weather & Seasons',
    emoji: '🌤️',
    description: 'Weather conditions and seasons',
    color: '#03A9F4',
  },
];

export default function OfficeDailyLife() {
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
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-2xl">🏢</span>
            <span className="text-sm font-medium text-blue-700">Daily Life</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            Daily Life
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive vocabulary for daily life, work, and social situations.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/60 cursor-pointer"
              onClick={() => {
                if (topic.id === 'daily_routine_time') {
                  router.push('/office-daily-life/daily-routine-time');
                } else if (topic.id === 'home_living') {
                  router.push('/office-daily-life/home-living');
                } else if (topic.id === 'family_relationships') {
                  router.push('/office-daily-life/family-relationships');
                } else if (topic.id === 'social_life_community') {
                  router.push('/office-daily-life/social-life-community');
                } else if (topic.id === 'food_cooking') {
                  router.push('/office-daily-life/food-cooking');
                } else if (topic.id === 'clothing_appearance') {
                  router.push('/office-daily-life/clothing-appearance');
                } else if (topic.id === 'shopping_market') {
                  router.push('/office-daily-life/shopping-market');
                } else if (topic.id === 'health_body' || 
                    topic.id === 'work_office') {
                  alert(`Topic "${topic.title}" will be implemented soon!`);
                } else {
                  alert(`Vocabulary topic "${topic.title}" will be implemented...`);
                }
              }}
            >
              <div className="space-y-4">
                {/* Emoji */}
                <div className="text-5xl text-center">{topic.emoji}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 text-center">{topic.title}</h3>

                {/* Description */}
                <p className="text-sm text-slate-600 text-center">{topic.description}</p>

                {/* Status Badge */}
                <div className="text-center">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                    topic.id === 'daily_routine_time' || 
                    topic.id === 'home_living' || 
                    topic.id === 'family_relationships' || 
                    topic.id === 'social_life_community' || 
                    topic.id === 'food_cooking' || 
                    topic.id === 'clothing_appearance' || 
                    topic.id === 'shopping_market' || 
                    topic.id === 'health_body' || 
                    topic.id === 'work_office' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {topic.id === 'daily_routine_time' || 
                     topic.id === 'home_living' || 
                     topic.id === 'family_relationships' || 
                     topic.id === 'social_life_community' || 
                     topic.id === 'food_cooking' || 
                     topic.id === 'clothing_appearance' || 
                     topic.id === 'shopping_market' || 
                     topic.id === 'health_body' || 
                     topic.id === 'work_office' ? 'Ready' : 'Coming Soon'}
                  </span>
                </div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h3 className="font-bold text-blue-700">📚 Daily Practice</h3>
                <p className="text-sm text-slate-600">
                  Practice vocabulary daily for better retention.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-blue-700">🎯 Context Learning</h3>
                <p className="text-sm text-slate-600">
                  Learn words in context for practical use.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-blue-700">💬 Active Use</h3>
                <p className="text-sm text-slate-600">
                  Use new vocabulary in conversations immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
