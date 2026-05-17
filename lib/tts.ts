import { detectBrowser, ensureUserGesture } from './browser-compatibility';

export const extractGermanText = (text: string) => {
  if (!text) return '';
  const trimmed = text.trim();
  if (!trimmed) return '';
  const germanPart = trimmed.split('(')[0].trim();
  return germanPart || trimmed;
};

class TTSService {
  private browserInfo: ReturnType<typeof detectBrowser>;
  private voicesLoaded: boolean = false;
  private voices: SpeechSynthesisVoice[] = [];
  private audioElement: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private voiceLoadAttempts: number = 0;
  private maxVoiceLoadAttempts: number = 5;

  constructor() {
    this.browserInfo = detectBrowser();
    this.initVoices();
    this.initAudioFallback();
  }

  private initVoices() {
    if (!this.browserInfo.supportsSpeechSynthesis) return;

    const loadVoices = () => {
      try {
        const availableVoices = speechSynthesis.getVoices();
        
        // Some browsers return empty array initially
        if (availableVoices.length > 0) {
          this.voices = availableVoices;
          this.voicesLoaded = true;
          console.log(`Loaded ${availableVoices.length} TTS voices`);
          
          // Remove event listener once voices are loaded
          speechSynthesis.removeEventListener('voiceschanged', loadVoices);
        } else if (this.voiceLoadAttempts < this.maxVoiceLoadAttempts) {
          // Retry loading voices
          this.voiceLoadAttempts++;
          setTimeout(loadVoices, 500);
        }
      } catch (error) {
        console.error('Error loading TTS voices:', error);
      }
    };

    // Try to load voices immediately
    loadVoices();

    // Listen for voiceschanged event (some browsers need this)
    speechSynthesis.addEventListener('voiceschanged', loadVoices);

    // Additional browser-specific initialization
    if (this.browserInfo.isSafari) {
      // Safari may need extra time to load voices
      setTimeout(() => {
        if (!this.voicesLoaded) {
          loadVoices();
        }
      }, 1000);
    }
  }

  private initAudioFallback() {
    if (typeof window !== 'undefined' && typeof Audio !== 'undefined') {
      this.audioElement = new Audio();
      this.audioElement.preload = 'none';
    }
  }

  private getGermanVoice(): SpeechSynthesisVoice | null {
    if (!this.voicesLoaded || this.voices.length === 0) return null;

    // Try to find a German voice with different browser compatibility
    const germanVoices = this.voices.filter(voice => {
      const lang = voice.lang.toLowerCase();
      return lang.includes('de') || 
             lang.includes('german') || 
             lang.includes('de-de') || 
             lang.includes('de_at') ||
             lang.includes('de_ch');
    });

    if (germanVoices.length === 0) return null;

    // Browser-specific voice selection logic
    if (this.browserInfo.isChrome || this.browserInfo.isEdge) {
      // Chrome/Edge: Prefer native German voices
      const nativeGerman = germanVoices.find(voice => 
        voice.lang === 'de-DE' || 
        voice.lang === 'de-de' ||
        voice.lang === 'de_DE'
      );
      if (nativeGerman) return nativeGerman;
    } else if (this.browserInfo.isFirefox) {
      // Firefox: Look for German voices
      const germanVoice = germanVoices.find(voice => 
        voice.lang.includes('de') || 
        voice.name.toLowerCase().includes('german')
      );
      if (germanVoice) return germanVoice;
    } else if (this.browserInfo.isSafari) {
      // Safari: May have limited voice options
      const anyGerman = germanVoices.find(voice => 
        voice.lang.includes('de')
      );
      if (anyGerman) return anyGerman;
    }

    return germanVoices[0];
  }

  private async playWithWebSpeech(text: string): Promise<boolean> {
    if (!this.browserInfo.supportsSpeechSynthesis) return false;

    try {
      // Ensure we have a user gesture if required by browser
      await ensureUserGesture();
      
      // Cancel any ongoing speech
      this.stop();
      
      const utterance = new SpeechSynthesisUtterance(text);
      this.currentUtterance = utterance;
      
      utterance.lang = 'de-DE';
      utterance.rate = 0.85;
      utterance.pitch = 1;
      utterance.volume = 1;

      const germanVoice = this.getGermanVoice();
      if (germanVoice) {
        utterance.voice = germanVoice;
      }

      return new Promise((resolve) => {
        let resolved = false;
        
        const cleanup = () => {
          if (!resolved) {
            resolved = true;
            this.isPlaying = false;
            this.currentUtterance = null;
            resolve(false);
          }
        };

        utterance.onstart = () => {
          this.isPlaying = true;
        };
        
        utterance.onend = () => {
          if (!resolved) {
            resolved = true;
            this.isPlaying = false;
            this.currentUtterance = null;
            resolve(true);
          }
        };
        
        utterance.onerror = (event) => {
          // Ignore harmless errors from cancel/interrupt (expected when restarting speech)
          if (event.error === 'canceled' || event.error === 'interrupted') {
            cleanup();
            return;
          }
          console.error('TTS error:', event.error || 'unknown error');
          cleanup();
        };

        // Browser-specific handling
        if (this.browserInfo.isSafari) {
          // Safari may need extra handling
          setTimeout(() => {
            if (!this.isPlaying) {
              cleanup();
            }
          }, 1000);
        }

        // Some browsers have issues with speechSynthesis.speak() being called multiple times
        // Add a small delay to ensure previous speech is fully cancelled
        setTimeout(() => {
          try {
            speechSynthesis.speak(utterance);
          } catch (error) {
            console.error('Error speaking utterance:', error);
            cleanup();
          }
        }, 50);
        
        // Fallback timeout in case speech synthesis fails silently
        setTimeout(() => {
          if (this.isPlaying && !resolved) {
            console.warn('TTS timeout - stopping playback');
            this.stop();
            cleanup();
          }
        }, 15000);
      });
    } catch (error) {
      console.error('Web Speech API error:', error);
      return false;
    }
  }

  private async playWithAudioFallback(text: string): Promise<boolean> {
    // Use Google Translate TTS as a universal fallback
    // Works on all browsers including UC Browser, Samsung Internet, etc.
    try {
      const encodedText = encodeURIComponent(text);
      
      // Google Translate TTS URL
      const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=de&client=tw-ob`;

      // Create a fresh audio element for each playback to avoid caching issues
      const audio = new Audio();
      audio.crossOrigin = 'anonymous';
      
      return new Promise<boolean>((resolve) => {
        let resolved = false;

        const cleanup = (success: boolean) => {
          if (!resolved) {
            resolved = true;
            this.isPlaying = false;
            resolve(success);
          }
        };

        audio.oncanplaythrough = () => {
          this.isPlaying = true;
          audio.play().catch(() => cleanup(false));
        };

        audio.onended = () => cleanup(true);
        
        audio.onerror = () => {
          // If the first URL fails, try alternative URL pattern
          if (!resolved) {
            const altUrl = `https://translate.googleapis.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=de&client=gtx`;
            const altAudio = new Audio();
            
            altAudio.oncanplaythrough = () => {
              this.isPlaying = true;
              altAudio.play().catch(() => cleanup(false));
            };
            altAudio.onended = () => cleanup(true);
            altAudio.onerror = () => cleanup(false);
            altAudio.src = altUrl;
            altAudio.load();
          }
        };

        // Timeout fallback
        setTimeout(() => cleanup(false), 10000);

        audio.src = ttsUrl;
        audio.load();
      });
    } catch (error) {
      console.error('TTS audio fallback error:', error);
      return false;
    }
  }

  async play(text: string): Promise<boolean> {
    if (typeof window === 'undefined') return false;
    
    const germanText = extractGermanText(text);
    if (!germanText) return false;

    // If browser supports Web Speech API, try it first
    if (this.browserInfo.supportsSpeechSynthesis) {
      const webSpeechSuccess = await this.playWithWebSpeech(germanText);
      if (webSpeechSuccess) return true;
    }

    // Fallback to Google Translate TTS audio (works on all browsers)
    return await this.playWithAudioFallback(germanText);
  }

  stop() {
    if (this.browserInfo.supportsSpeechSynthesis) {
      speechSynthesis.cancel();
    }
    
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
    }
    
    this.isPlaying = false;
    this.currentUtterance = null;
  }

  isTTSAvailable(): boolean {
    return this.browserInfo.supportsSpeechSynthesis;
  }

  isPlayingNow(): boolean {
    return this.isPlaying;
  }

  getAvailableVoices(): SpeechSynthesisVoice[] {
    return this.voices;
  }

  getBrowserInfo() {
    return this.browserInfo;
  }
}

// Create singleton instance
let ttsService: TTSService | null = null;

// Initialize TTS service only on the client side
const getTTSService = (): TTSService => {
  if (typeof window === 'undefined') {
    // Return a mock service for server-side rendering
    const mockService = {
      play: async () => false,
      stop: () => {},
      isTTSAvailable: () => false,
      isPlayingNow: () => false,
      getAvailableVoices: () => [],
      getBrowserInfo: () => detectBrowser(),
    };
    return mockService as unknown as TTSService;
  }
  
  if (!ttsService) {
    ttsService = new TTSService();
  }
  return ttsService;
};

export const playGermanText = (text: string) => {
  const service = getTTSService();
  service.play(text).catch(error => {
    console.error('TTS playback failed:', error);
  });
};

export const stopTTS = () => {
  const service = getTTSService();
  service.stop();
};

export const isTTSAvailable = () => {
  const service = getTTSService();
  return service.isTTSAvailable();
};

export const isTTSPlaying = () => {
  const service = getTTSService();
  return service.isPlayingNow();
};

export const getTTSVoices = () => {
  const service = getTTSService();
  return service.getAvailableVoices();
};

export const getBrowserInfo = () => {
  const service = getTTSService();
  return service.getBrowserInfo();
};
