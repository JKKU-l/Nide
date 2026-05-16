'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen } from 'lucide-react';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import { useState } from 'react';

interface Topic {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}

const topics: Topic[] = [
  { id: 'my-family', title: 'My Family', subtitle: 'Learn family vocabulary and relationships', icon: '/cartoons/family.svg', color: '#4CAF50' },
  { id: 'my-mother', title: 'My Mother', subtitle: 'Describe your mother and her daily activities', icon: '/cartoons/mother_and_daughter.svg', color: '#E91E63' },
  { id: 'my-hobby', title: 'My Hobby', subtitle: 'Talk about your favorite hobbies and interests', icon: '/cartoons/playing_ball.svg', color: '#FF9800' },
  { id: 'my-friend', title: 'My Friend', subtitle: 'Describe your friends and friendship', icon: '/cartoons/boy.svg', color: '#2196F3' },
  { id: 'sofia-and-momo', title: 'Sofia and Momo', subtitle: 'A story about two friends and their adventures', icon: '/cartoons/girl_and_boy_driving_car.svg', color: '#9C27B0' },
  { id: 'at-school', title: 'At School', subtitle: 'School vocabulary and classroom activities', icon: '/cartoons/school_desk.svg', color: '#3F51B5' },
  { id: 'at-supermarket', title: 'At Supermarket', subtitle: 'Shopping vocabulary and grocery items', icon: '/cartoons/shopping.svg', color: '#00BCD4' },
  { id: 'at-restaurant', title: 'At Restaurant', subtitle: 'Dining vocabulary and ordering food', icon: '/cartoons/cooking.svg', color: '#FF5722' },
  { id: 'family-dinner', title: 'Family Dinner', subtitle: 'Mealtime vocabulary and family conversations', icon: '/cartoons/family1.svg', color: '#795548' },
  { id: 'summer-vacation', title: 'Summer Vacation', subtitle: 'Travel and vacation vocabulary', icon: '/cartoons/swimming.svg', color: '#FFC107' },
  { id: 'on-the-farm', title: 'On the Farm', subtitle: 'Farm animals and agricultural vocabulary', icon: '/cartoons/cow.svg', color: '#8BC34A' },
  { id: 'zoo-adventure', title: 'Zoo Adventure', subtitle: 'Wild animals and zoo vocabulary', icon: '/cartoons/elephant.svg', color: '#FF9800' },
  { id: 'reading-books', title: 'Reading Books', subtitle: 'Literature and reading comprehension', icon: '/cartoons/book.svg', color: '#673AB7' },
  { id: 'playing-music', title: 'Playing Music', subtitle: 'Musical instruments and music vocabulary', icon: '/cartoons/bandsman.svg', color: '#E91E63' },
  { id: 'important-meeting', title: 'Important Meeting', subtitle: 'Business and meeting vocabulary', icon: '/cartoons/three_people_talking.svg', color: '#607D8B' },
  { id: 'morning-routine', title: 'Morning Routine', subtitle: 'Daily activities and time expressions', icon: '/cartoons/boy_bathing.svg', color: '#009688' },
  { id: 'grocery-shopping', title: 'Grocery Shopping', subtitle: 'Food items and shopping expressions', icon: '/cartoons/shopping.svg', color: '#4CAF50' },
];

export default function Topics() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300/40 via-white to-purple-300/40">
      <Navbar searchValue={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-8">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition flex-shrink-0"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden text-sm font-medium">Back</span>
          </button>
        </div>

        {/* Title */}
        {!searchQuery && (
          <div className="text-center mb-12 px-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-4">
              <BookOpen size={18} className="text-indigo-700 sm:size-5" />
              <span className="text-xs sm:text-sm font-medium text-indigo-700">Learning Topics</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 break-words leading-tight">
              Explore Topics
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Choose a topic to start learning German through engaging stories and activities
            </p>
          </div>
        )}

        {/* Topics Grid */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Topics'}
          </h2>
          {filteredTopics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/60 cursor-pointer group"
                  onClick={() => {
                    if (topic.id === 'my-family') {
                      router.push('/topics/my-family');
                    } else if (topic.id === 'my-mother') {
                      router.push('/topics/my-mother');
                    } else if (topic.id === 'my-hobby') {
                      router.push('/topics/my-hobby');
                    } else if (topic.id === 'my-friend') {
                      router.push('/topics/my-friend');
                    } else if (topic.id === 'at-school') {
                      router.push('/topics/at-school');
                    } else if (topic.id === 'at-supermarket') {
                      router.push('/topics/at-supermarket');
                    } else if (topic.id === 'at-restaurant') {
                      router.push('/topics/at-restaurant');
                    } else if (topic.id === 'sofia-and-momo') {
                      router.push('/topics/sofia-and-momo');
                    } else {
                      alert(`Topic "${topic.title}" will be implemented soon!`);
                    }
                  }}
                >
                  <div className="flex flex-col items-center space-y-4">
                    {/* Icon */}
                    <div 
                      className="w-24 h-24 rounded-2xl flex items-center justify-center bg-white shadow-lg overflow-hidden"
                      style={{ backgroundColor: `${topic.color}20` }}
                    >
                      <Image
                        src={topic.icon}
                        alt={topic.title}
                        width={80}
                        height={80}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 text-center">
                      {topic.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm text-slate-600 text-center leading-tight">
                      {topic.subtitle}
                    </p>

                    {/* Color Indicator */}
                    <div 
                      className="w-12 h-1 rounded-full"
                      style={{ backgroundColor: topic.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white/40 backdrop-blur-md rounded-3xl border border-white/20">
              <p className="text-slate-600 text-lg">No topics found matching your search.</p>
            </div>
          )}
        </div>

        {/* Learning Tips */}
        <div className="mt-12 text-center">
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              🎯 How to Learn with Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h3 className="font-bold text-indigo-700">📖 Interactive Stories</h3>
                <p className="text-sm text-slate-600">
                  Learn German through engaging stories with colorful illustrations
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-indigo-700">🎨 Visual Learning</h3>
                <p className="text-sm text-slate-600">
                  Connect vocabulary with cartoon images for better retention
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-indigo-700">🎮 Fun Activities</h3>
                <p className="text-sm text-slate-600">
                  Practice with interactive exercises and games
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
