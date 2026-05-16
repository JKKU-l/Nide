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

export default function MyHobby() {
  const router = useRouter();
  const [topicData, setTopicData] = useState<TopicData | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    fetchTopicData();
  }, [selectedLanguage]);

  const fetchTopicData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/json_files/my_hobby_${selectedLanguage}.json`);
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

  const playAudio = async () => {
    try {
      if (isPlaying) {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      } else {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        } else {
          if (!topicData?.audio_file) {
            console.warn("No audio file specified for this topic");
            return;
          }

          const audio = new Audio(`/audio/${topicData.audio_file}`);
          
          audio.onerror = (e) => {
            console.error("Audio failed to load:", e);
            setIsPlaying(false);
            audioRef.current = null;
          };

          audioRef.current = audio;
          await audio.play();
          setIsPlaying(true);
          
          audio.onended = () => {
            setIsPlaying(false);
            audioRef.current = null;
          };
        }
      }
    } catch (error) {
      console.error("Audio playback error:", error);
      setIsPlaying(false);
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
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-8">
          <button
            onClick={() => router.push('/topics')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition flex-shrink-0"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Back to Topics</span>
            <span className="sm:hidden text-sm font-medium">Back</span>
          </button>
        </div>

        {/* Title and Language Selector */}
        <div className="text-center mb-10 px-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: `${topicData?.theme_color}20` }}>
            <BookOpen size={20} style={{ color: topicData?.theme_color }} />
            <span className="text-sm font-medium" style={{ color: topicData?.theme_color }}>
              {topicData?.difficulty} • {topicData?.duration_minutes} min
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 break-words leading-tight">
            {topicData?.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-6 px-4">
            {topicData?.description || 'Learn about hobbies and interests'}
          </p>

          {/* Language Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border transition text-sm sm:text-base ${
                  selectedLanguage === lang.code
                    ? 'bg-white shadow-md border-blue-500 text-blue-600'
                    : 'bg-white/40 border-white/30 hover:bg-white/60 text-slate-600'
                }`}
              >
                <span>{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Story Section */}
        {storySection && (
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{storySection.title}</h2>
              <button
                onClick={playAudio}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium transition bg-white/60 backdrop-blur-md border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm sm:text-base"
              >
                {isPlaying ? <Pause size={18} className="sm:size-5" /> : <Play size={18} className="sm:size-5" />}
                <span>{isPlaying ? 'Pause' : 'Play Audio'}</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* German Text */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🇩🇪</span>
                  <h3 className="font-bold text-slate-900">Deutsch</h3>
                </div>
                <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed whitespace-pre-line">
                    {getGermanText()}
                  </p>
                </div>
              </div>

              {/* Translation */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{languages.find(l => l.code === selectedLanguage)?.flag}</span>
                  <h3 className="font-bold text-slate-900">
                    {languages.find(l => l.code === selectedLanguage)?.name}
                  </h3>
                </div>
                <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed whitespace-pre-line">
                    {getTranslation()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SVG Illustration */}
        <div className="flex justify-center mb-8">
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl">
            <Image
              src="/cartoons/playing_ball.svg"
              alt="Hobby Illustration"
              width={160}
              height={160}
              className="object-contain sm:w-[200px] sm:h-[200px]"
            />
          </div>
        </div>

        {/* Exercises Section */}
        {exercises.length > 0 && (
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
              Practice Exercises
            </h2>

            <div className="space-y-6">
              {exercises.map((exercise, index) => (
                <div
                  key={exercise.id}
                  className={`backdrop-blur-md bg-white/30 border border-white/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 ${
                    showResults && isCorrect(exercise) ? 'border-green-400 bg-green-50/30' : ''
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white" style={{ backgroundColor: topicData?.theme_color }}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base text-slate-900 font-medium mb-4">{exercise.question}</p>

                      {exercise.type === 'multiple_choice' && exercise.options && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {exercise.options.map((option) => (
                            <button
                              key={option}
                              onClick={() => handleAnswerChange(exercise.id, option)}
                              className={`px-3 py-2 sm:px-4 sm:py-3 rounded-xl font-medium transition text-sm sm:text-base ${
                                userAnswers[exercise.id] === option
                                  ? 'text-white shadow-lg'
                                  : 'bg-white/60 backdrop-blur-md border border-slate-300 hover:bg-slate-50 text-slate-700'
                              }`}
                              style={
                                userAnswers[exercise.id] === option
                                  ? { backgroundColor: topicData?.theme_color }
                                  : {}
                              }
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}

                      {exercise.type === 'fill_blank' && (
                        <input
                          type="text"
                          id={exercise.id.toString()}
                          name={exercise.id.toString()}
                          value={userAnswers[exercise.id] || ''}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleAnswerChange(exercise.id, e.target.value)}
                          placeholder="Type your answer..."
                          className="w-full px-4 py-2 sm:py-3 rounded-xl bg-white/60 backdrop-blur-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-slate-700"
                        />
                      )}

                      {showResults && (
                        <div className="mt-4 flex items-center gap-2">
                          {isCorrect(exercise) ? (
                            <>
                              <CheckCircle size={18} className="text-green-600 sm:size-5" />
                              <span className="text-sm sm:text-base text-green-600 font-medium">Correct!</span>
                            </>
                          ) : (
                            <>
                              <span className="text-sm sm:text-base text-red-600 font-medium">
                                Incorrect. The answer is: {exercise.correct_answer || exercise.answer}
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!showResults && (
              <button
                onClick={checkAnswers}
                className="mt-6 w-full px-6 py-3 sm:py-4 rounded-xl font-bold text-white shadow-lg transition hover:shadow-xl text-sm sm:text-base"
                style={{ backgroundColor: topicData?.theme_color }}
              >
                Check Answers
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
