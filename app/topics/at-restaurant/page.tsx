'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Volume2, Play, Pause, Languages, BookOpen, CheckCircle } from 'lucide-react';
import Navbar from '@/components/navbar';
import Image from 'next/image';

interface Exercise {
  id: number;
  type: string;
  question: string;
  options?: string[];
  correct_answer?: string;
  answer?: string;
}

interface Section {
  id: string;
  title: string;
  content: {
    german_text?: string;
    german_translation?: string;
    english_translation?: string;
    japanese_translation?: string;
    korean_translation?: string;
    myanmar_translation?: string;
    thai_translation?: string;
    vietnamese_translation?: string;
    exercises?: Exercise[];
  };
}

interface TopicData {
  title: string;
  theme_color: string;
  description?: string;
  audio_file: string;
  difficulty: string;
  duration_minutes: number;
  sections: Section[];
}

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'jp', name: '日本語', flag: '🇯🇵' },
  { code: 'kr', name: '한국어', flag: '🇰🇷' },
  { code: 'my', name: 'မြန်မာ', flag: '🇲🇲' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
];

export default function AtRestaurant() {
  const router = useRouter();
  const [topicData, setTopicData] = useState<TopicData | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    fetchTopicData();
  }, [selectedLanguage]);

  const fetchTopicData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/json_files/at_restaurant_${selectedLanguage}.json`);
      const data = await response.json();
      setTopicData(data);
    } catch (error) {
      console.error('Error loading topic data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTranslation = () => {
    if (!topicData) return '';
    const storySection = topicData.sections.find(s => s.id === 'story');
    if (!storySection) return '';
    const content = storySection.content;
    switch (selectedLanguage) {
      case 'en': return content.english_translation || '';
      case 'jp': return content.japanese_translation || '';
      case 'kr': return content.korean_translation || '';
      case 'my': return content.myanmar_translation || '';
      case 'th': return content.thai_translation || '';
      case 'vi': return content.vietnamese_translation || '';
      default: return content.english_translation || '';
    }
  };

  const getGermanText = () => {
    if (!topicData) return '';
    const storySection = topicData.sections.find(s => s.id === 'story');
    return storySection?.content.german_text || '';
  };

  const getExercises = () => {
    if (!topicData) return [];
    const exerciseSection = topicData.sections.find(s => s.id === 'exercises');
    return exerciseSection?.content.exercises || [];
  };

  const playAudio = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        const audio = new Audio(`/audio/${topicData?.audio_file}`);
        audioRef.current = audio;
        audio.play();
        setIsPlaying(true);
        audio.onended = () => {
          setIsPlaying(false);
          audioRef.current = null;
        };
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleAnswerChange = (exerciseId: number, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const isCorrect = (exercise: Exercise) => {
    const userAnswer = userAnswers[exercise.id];
    if (exercise.type === 'multiple_choice') {
      return userAnswer === exercise.correct_answer;
    } else if (exercise.type === 'fill_blank') {
      return userAnswer?.toLowerCase().trim() === exercise.answer?.toLowerCase().trim();
    }
    return false;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-300/40 via-white to-purple-300/40">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  const exercises = getExercises();
  const storySection = topicData?.sections.find(s => s.id === 'story');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300/40 via-white to-purple-300/40">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center gap-2 mb-8">
          <button onClick={() => router.push('/topics')} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition">
            <ArrowLeft size={20} />
            <span>Back to Topics</span>
          </button>
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: `${topicData?.theme_color}20` }}>
            <BookOpen size={20} style={{ color: topicData?.theme_color }} />
            <span className="text-sm font-medium" style={{ color: topicData?.theme_color }}>{topicData?.difficulty} • {topicData?.duration_minutes} min</span>
          </div>
          
          <h1 className="text-4xl font-black text-slate-900 mb-3">{topicData?.title}</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">{topicData?.description || 'Learn restaurant vocabulary and dining phrases'}</p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {languages.map((lang) => (
              <button key={lang.code} onClick={() => setSelectedLanguage(lang.code)} className={`px-4 py-2 rounded-xl font-medium transition flex items-center gap-2 ${selectedLanguage === lang.code ? 'text-white shadow-lg' : 'bg-white/60 backdrop-blur-md border border-slate-300 hover:bg-slate-50 text-slate-700'}`} style={selectedLanguage === lang.code ? { backgroundColor: topicData?.theme_color } : {}}>
                <span>{lang.flag}</span>
                {lang.name}
              </button>
            ))}
          </div>
        </div>

        {storySection && (
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">{storySection.title}</h2>
              <button onClick={playAudio} className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition bg-white/60 backdrop-blur-md border border-slate-300 hover:bg-slate-50 text-slate-700">
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                <span>{isPlaying ? 'Pause' : 'Play Audio'}</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2"><span className="text-lg">🇩🇪</span><h3 className="font-bold text-slate-900">Deutsch</h3></div>
                <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl p-6"><p className="text-slate-800 leading-relaxed whitespace-pre-line">{getGermanText()}</p></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2"><span className="text-lg">{languages.find(l => l.code === selectedLanguage)?.flag}</span><h3 className="font-bold text-slate-900">{languages.find(l => l.code === selectedLanguage)?.name}</h3></div>
                <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl p-6"><p className="text-slate-800 leading-relaxed whitespace-pre-line">{getTranslation()}</p></div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center mb-8">
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-6 shadow-xl">
            <Image src="/cartoons/cooking.svg" alt="Restaurant Illustration" width={200} height={200} className="object-contain" />
          </div>
        </div>

        {exercises.length > 0 && (
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Practice Exercises</h2>
            <div className="space-y-6">
              {exercises.map((exercise, index) => (
                <div key={exercise.id} className={`backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl p-6 ${showResults && isCorrect(exercise) ? 'border-green-400 bg-green-50/30' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: topicData?.theme_color }}>{index + 1}</div>
                    <div className="flex-1">
                      <p className="text-slate-900 font-medium mb-4">{exercise.question}</p>
                      {exercise.type === 'multiple_choice' && exercise.options && (
                        <div className="grid grid-cols-2 gap-3">
                          {exercise.options.map((option) => (
                            <button key={option} onClick={() => handleAnswerChange(exercise.id, option)} className={`px-4 py-3 rounded-xl font-medium transition ${userAnswers[exercise.id] === option ? 'text-white shadow-lg' : 'bg-white/60 backdrop-blur-md border border-slate-300 hover:bg-slate-50 text-slate-700'}`} style={userAnswers[exercise.id] === option ? { backgroundColor: topicData?.theme_color } : {}}>{option}</button>
                          ))}
                        </div>
                      )}
                      {exercise.type === 'fill_blank' && (
                        <input type="text" value={userAnswers[exercise.id] || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleAnswerChange(exercise.id, e.target.value)} placeholder="Type your answer..." className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700" />
                      )}
                      {showResults && (
                        <div className="mt-4 flex items-center gap-2">
                          {isCorrect(exercise) ? (<><CheckCircle size={20} className="text-green-600" /><span className="text-green-600 font-medium">Correct!</span></>) : (<><span className="text-red-600 font-medium">Incorrect. The answer is: {exercise.correct_answer || exercise.answer}</span></>)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {!showResults && <button onClick={checkAnswers} className="mt-6 w-full px-6 py-4 rounded-xl font-bold text-white shadow-lg transition hover:shadow-xl" style={{ backgroundColor: topicData?.theme_color }}>Check Answers</button>}
          </div>
        )}
      </main>
    </div>
  );
}
