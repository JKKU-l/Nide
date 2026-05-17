'use client';

import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import WordOfTheDay from '@/components/word-of-the-day';

interface Subtopic {
  id: string;
  title: string;
  content: string;
}

interface FeaturedTopicData {
  month: number;
  title_en: string;
  title_de: string;
  icon: string;
  theme_color: string;
  image?: string;
  description?: string;
  subtopics: Subtopic[];
}

const TOPIC_FILES: Record<number, string> = {
  1: '/json_files/featured_topic_01_airport.json',
  2: '/json_files/featured_topic_02_airplane.json',
  3: '/json_files/featured_topic_03_passport_customs.json',
  4: '/json_files/featured_topic_04_train_station.json',
  5: '/json_files/featured_topic_05_berlin_daily_life.json',
  6: '/json_files/featured_topic_06_gas_station.json',
  7: '/json_files/featured_topic_07_department_store.json',
  8: '/json_files/featured_topic_08_restaurant.json',
  9: '/json_files/featured_topic_09_at_home.json',
  10: '/json_files/featured_topic_10_doctor.json',
  11: '/json_files/featured_topic_11_theater_movies.json',
  12: '/json_files/featured_topic_12_computer.json',
};

const TOPIC_LINKS: Record<number, string> = {
  1: '/featured-topic/at-the-airport',
  2: '/featured-topic/on-the-airplane',
  3: '/featured-topic/passport-customs',
  4: '/featured-topic/train-station',
  5: '/featured-topic/berlin-daily-life',
  6: '/featured-topic/automobile-gas-station',
  7: '/featured-topic/department-store',
  8: '/featured-topic/restaurant',
  9: '/featured-topic/at-home',
  10: '/featured-topic/doctor',
  11: '/featured-topic/theater-movies',
  12: '/featured-topic/computer',
};

const MONTH_NAMES = [
  '', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export default function FeaturedTopic() {
  const [topic, setTopic] = useState<FeaturedTopicData | null>(null);
  const [topicLink, setTopicLink] = useState<string>('#');

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1; // 1–12
    const filePath = TOPIC_FILES[currentMonth];
    setTopicLink(TOPIC_LINKS[currentMonth] || '#');

    fetch(filePath)
      .then((res) => res.json())
      .then((data: FeaturedTopicData) => setTopic(data))
      .catch((err) => console.error('Failed to load featured topic:', err));
  }, []);

  return (
    <div className="space-y-4">
      {/* Featured Topic Card */}
      <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900">Featured Topic</h2>
          <a href={topicLink} className="text-slate-600 hover:text-slate-900 transition">
            <ChevronRight size={24} />
          </a>
        </div>

        {/* Horizontal Content - Icon Left, Text Right */}
        <div className="flex gap-4">
          {/* Icon / Illustration */}
          <div
            className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-2xl flex items-center justify-center overflow-hidden"
            style={{
              background: topic && !topic.image
                ? `linear-gradient(135deg, ${topic.theme_color}20, ${topic.theme_color}40)`
                : undefined,
            }}
          >
            {topic?.image ? (
              <img
                src={topic.image}
                alt={topic.title_en}
                className="w-full h-full object-contain"
              />
            ) : topic ? (
              <span className="text-5xl sm:text-6xl">{topic.icon}</span>
            ) : (
              <img
                src="/cartoons/cat_on_the_mat.svg"
                alt="Loading illustration"
                className="w-full h-full object-contain"
              />
            )}
          </div>

          {/* Topic Info */}
          <div className="flex flex-col justify-center min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ color: topic?.theme_color ?? '#3B82F6' }}
            >
              {topic ? MONTH_NAMES[topic.month] : ''}
            </p>
            <h3 className="text-lg font-bold text-slate-900 mb-0.5 leading-tight">
              Topic of the Month:
            </h3>
            <p className="text-base font-bold text-slate-900 mb-0.5 truncate">
              {topic ? topic.title_en : 'Loading...'}
            </p>
            <p className="text-sm text-slate-500 italic mb-1 truncate">
              {topic ? topic.title_de : ''}
            </p>
            {topic?.description && (
              <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                {topic.description}
              </p>
            )}

            {/* Subtopic count badge */}
            {topic && topic.subtopics.length > 0 && (
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `${topic.theme_color}15`,
                    color: topic.theme_color,
                  }}
                >
                  {topic.subtopics.length} subtopics
                </span>
              </div>
            )}

            <a
              href={topicLink}
              className="self-start bg-white hover:bg-slate-50 text-slate-900 font-semibold py-2 px-5 rounded-full shadow-md hover:shadow-lg transition text-sm inline-block"
            >
              View Lesson
            </a>
          </div>
        </div>
      </div>

      {/* Word of the Day Card */}
      <WordOfTheDay />

      {/* Mini Streak Tracker */}
      <div className="backdrop-blur-xl bg-gradient-to-br from-orange-50/50 to-amber-50/50 border border-white/30 rounded-3xl p-5 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500 mb-1">Learning Streak</p>
            <p className="text-2xl font-black text-orange-600">🔥 7 Days</p>
          </div>
          <div className="flex gap-1">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div 
                key={i} 
                className={`w-6 h-8 rounded-md flex items-center justify-center text-xs font-bold ${
                  i < 5 ? 'bg-orange-400 text-white' : 'bg-white/50 text-slate-400'
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
