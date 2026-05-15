export const extractGermanText = (text: string) => {
  if (!text) return '';
  const trimmed = text.trim();
  if (!trimmed) return '';
  const germanPart = trimmed.split('(')[0].trim();
  return germanPart || trimmed;
};

export const playGermanText = (text: string) => {
  const germanText = extractGermanText(text);
  if (!germanText) return;

  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(germanText);
  utterance.lang = 'de-DE';
  utterance.rate = 0.85;
  utterance.pitch = 1;
  utterance.volume = 1;
  const voices = speechSynthesis.getVoices();
  const germanVoice = voices.find((voice) => voice.lang.includes('de'));
  if (germanVoice) {
    utterance.voice = germanVoice;
  }
  speechSynthesis.speak(utterance);
};
