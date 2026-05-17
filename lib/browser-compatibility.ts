/**
 * Browser compatibility utilities for handling different browser quirks
 */

export interface BrowserInfo {
  name: string;
  version: string;
  isChrome: boolean;
  isFirefox: boolean;
  isSafari: boolean;
  isEdge: boolean;
  isOpera: boolean;
  isIE: boolean;
  isMobile: boolean;
  supportsSpeechSynthesis: boolean;
  supportsSpeechSynthesisVoices: boolean;
  requiresUserGestureForTTS: boolean;
}

export const detectBrowser = (): BrowserInfo => {
  if (typeof window === 'undefined') {
    return {
      name: 'unknown',
      version: '0',
      isChrome: false,
      isFirefox: false,
      isSafari: false,
      isEdge: false,
      isOpera: false,
      isIE: false,
      isMobile: false,
      supportsSpeechSynthesis: false,
      supportsSpeechSynthesisVoices: false,
      requiresUserGestureForTTS: false,
    };
  }

  const userAgent = window.navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
  let name = 'unknown';
  let version = '0';
  
  // Detect browser
  if (/chrome|crios/i.test(userAgent) && !/edge|edg/i.test(userAgent)) {
    name = 'chrome';
    version = userAgent.match(/chrome\/(\d+)/i)?.[1] || '0';
  } else if (/firefox|fxios/i.test(userAgent)) {
    name = 'firefox';
    version = userAgent.match(/firefox\/(\d+)/i)?.[1] || '0';
  } else if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent)) {
    name = 'safari';
    version = userAgent.match(/version\/(\d+)/i)?.[1] || '0';
  } else if (/edge|edg/i.test(userAgent)) {
    name = 'edge';
    version = userAgent.match(/edge\/(\d+)/i)?.[1] || userAgent.match(/edg\/(\d+)/i)?.[1] || '0';
  } else if (/opera|opr/i.test(userAgent)) {
    name = 'opera';
    version = userAgent.match(/(?:opera|opr)\/(\d+)/i)?.[1] || '0';
  } else if (/trident/i.test(userAgent)) {
    name = 'ie';
    version = userAgent.match(/rv:(\d+)/i)?.[1] || '0';
  }

  // Check Web Speech API support
  const supportsSpeechSynthesis = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  const supportsSpeechSynthesisVoices = supportsSpeechSynthesis && typeof speechSynthesis.getVoices === 'function';
  
  // Browser-specific quirks
  const requiresUserGestureForTTS = 
    name === 'chrome' || 
    name === 'safari' || 
    (name === 'edge' && parseInt(version) >= 79);

  return {
    name,
    version,
    isChrome: name === 'chrome',
    isFirefox: name === 'firefox',
    isSafari: name === 'safari',
    isEdge: name === 'edge',
    isOpera: name === 'opera',
    isIE: name === 'ie',
    isMobile,
    supportsSpeechSynthesis,
    supportsSpeechSynthesisVoices,
    requiresUserGestureForTTS,
  };
};

export const getBrowserCompatibilityTips = (browserInfo: BrowserInfo): string[] => {
  const tips: string[] = [];
  
  if (!browserInfo.supportsSpeechSynthesis) {
    tips.push('Your browser does not support text-to-speech functionality.');
    return tips;
  }
  
  if (browserInfo.requiresUserGestureForTTS) {
    tips.push('Text-to-speech requires a user gesture (click/tap) to work in this browser.');
  }
  
  if (browserInfo.isSafari) {
    tips.push('Safari may have limited voice options for German. Consider using Chrome or Firefox for better TTS support.');
  }
  
  if (browserInfo.isFirefox) {
    tips.push('Firefox may require additional voice packs for German TTS. You can install them in your system settings.');
  }
  
  if (browserInfo.isMobile) {
    tips.push('On mobile devices, TTS may be affected by device settings and volume controls.');
  }
  
  return tips;
};

export const ensureUserGesture = (): Promise<void> => {
  return new Promise((resolve) => {
    const browserInfo = detectBrowser();
    
    if (!browserInfo.requiresUserGestureForTTS) {
      resolve();
      return;
    }
    
    // Some browsers require a user gesture for TTS to work
    // We'll resolve immediately since the button click itself is a user gesture
    resolve();
  });
};

export const getRecommendedBrowserForTTS = (): { name: string; url: string; reason: string }[] => {
  return [
    {
      name: 'Google Chrome',
      url: 'https://www.google.com/chrome/',
      reason: 'Best Web Speech API support with multiple German voice options',
    },
    {
      name: 'Mozilla Firefox',
      url: 'https://www.mozilla.org/firefox/',
      reason: 'Good TTS support with configurable voice settings',
    },
    {
      name: 'Microsoft Edge',
      url: 'https://www.microsoft.com/edge',
      reason: 'Modern browser with good Web Speech API implementation',
    },
  ];
};