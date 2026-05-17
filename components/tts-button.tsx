'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';
import { playGermanText, stopTTS, isTTSAvailable, isTTSPlaying } from '@/lib/tts';

interface TTSButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  title?: string;
  onPlayStart?: () => void;
  onPlayEnd?: () => void;
  onError?: (error: Error) => void;
}

export default function TTSButton({
  text,
  className = '',
  size = 'md',
  disabled = false,
  title = 'Listen to pronunciation',
  onPlayStart,
  onPlayEnd,
  onError,
}: TTSButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ttsSupported, setTtsSupported] = useState(false);

  useEffect(() => {
    // Check if TTS is supported
    setTtsSupported(isTTSAvailable());
    
    // Check if TTS is currently playing
    const checkPlaying = () => {
      setIsPlaying(isTTSPlaying());
    };
    
    // Set up interval to check playing state
    const interval = setInterval(checkPlaying, 100);
    
    // Clean up
    return () => {
      clearInterval(interval);
      // Stop TTS if this component unmounts while playing
      if (isPlaying) {
        stopTTS();
      }
    };
  }, []);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (disabled || !ttsSupported || isLoading) return;
    
    if (isPlaying) {
      stopTTS();
      setIsPlaying(false);
      return;
    }
    
    setIsLoading(true);
    onPlayStart?.();
    
    try {
      // Play the text
      playGermanText(text);
      
      // Set a timeout to reset loading state
      setTimeout(() => {
        setIsLoading(false);
        onPlayEnd?.();
      }, 100);
      
    } catch (error) {
      console.error('TTS playback error:', error);
      setIsLoading(false);
      setIsPlaying(false);
      onError?.(error as Error);
    }
  };

  const sizeClasses = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-11 h-11 text-base',
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  if (!ttsSupported) {
    return (
      <button
        type="button"
        disabled
        className={`${sizeClasses[size]} ${className} flex items-center justify-center rounded-full bg-gray-100 text-gray-400 cursor-not-allowed`}
        title="Text-to-speech not supported in your browser"
      >
        <VolumeX size={iconSizes[size]} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`
        ${sizeClasses[size]} ${className}
        flex items-center justify-center rounded-full
        transition-all duration-200 ease-in-out
        ${isPlaying 
          ? 'bg-red-100 text-red-600 hover:bg-red-200' 
          : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        active:scale-95
      `}
      title={title}
      aria-label={isPlaying ? 'Stop playback' : title}
    >
      {isLoading ? (
        <Loader2 size={iconSizes[size]} className="animate-spin" />
      ) : isPlaying ? (
        <VolumeX size={iconSizes[size]} />
      ) : (
        <Volume2 size={iconSizes[size]} />
      )}
    </button>
  );
}