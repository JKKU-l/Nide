'use client';

import { useState } from 'react';
import TTSButton from '@/components/tts-button';
import { getBrowserInfo, isTTSAvailable, getTTSVoices } from '@/lib/tts';

const testCases = [
  { id: 1, text: 'Hallo', description: 'Simple greeting' },
  { id: 2, text: 'Guten Tag', description: 'Formal greeting' },
  { id: 3, text: 'Wie geht es dir?', description: 'Question with special characters' },
  { id: 4, text: 'Ich möchte einen Kaffee trinken', description: 'Longer sentence' },
  { id: 5, text: 'Der Apfel ist rot', description: 'Simple statement with article' },
  { id: 6, text: '12345', description: 'Numbers' },
  { id: 7, text: '', description: 'Empty string' },
  { id: 8, text: '   ', description: 'Whitespace only' },
  { id: 9, text: 'Hallo (Hello)', description: 'Text with parentheses' },
  { id: 10, text: 'Äpfel, Bücher, Café', description: 'Special German characters' },
];

export default function TTSTestPage() {
  const [customText, setCustomText] = useState('');
  const browserInfo = getBrowserInfo();
  const ttsAvailable = isTTSAvailable();
  const voices = getTTSVoices();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">TTS System Test</h1>
          <p className="text-gray-600">
            Test the Text-to-Speech functionality across different browsers and text inputs
          </p>
        </header>

        {/* Browser Info */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Browser Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p><span className="font-medium">Browser:</span> {browserInfo.name} {browserInfo.version}</p>
              <p><span className="font-medium">Mobile:</span> {browserInfo.isMobile ? 'Yes' : 'No'}</p>
              <p><span className="font-medium">TTS Supported:</span> 
                <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${ttsAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {ttsAvailable ? 'Yes' : 'No'}
                </span>
              </p>
            </div>
            <div className="space-y-2">
              <p><span className="font-medium">Speech Synthesis:</span> {browserInfo.supportsSpeechSynthesis ? 'Supported' : 'Not Supported'}</p>
              <p><span className="font-medium">Voices API:</span> {browserInfo.supportsSpeechSynthesisVoices ? 'Supported' : 'Not Supported'}</p>
              <p><span className="font-medium">User Gesture Required:</span> {browserInfo.requiresUserGestureForTTS ? 'Yes' : 'No'}</p>
            </div>
          </div>

          {/* Voices List */}
          {voices.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Available Voices ({voices.length})</h3>
              <div className="max-h-60 overflow-y-auto border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Language</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Default</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {voices.map((voice, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{voice.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{voice.lang}</td>
                        <td className="px-4 py-3">
                          {voice.default && (
                            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">Default</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Test Cases */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Predefined Test Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testCases.map((testCase) => (
              <div key={testCase.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-gray-900">{testCase.description}</h3>
                    <p className="text-sm text-gray-600 mt-1 font-mono bg-gray-50 p-2 rounded">
                      {testCase.text || '(empty)'}
                    </p>
                  </div>
                  <TTSButton
                    text={testCase.text}
                    size="sm"
                    className="ml-2"
                    title={`Test: ${testCase.description}`}
                  />
                </div>
                <div className="text-xs text-gray-500">
                  Length: {testCase.text.length} chars
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Text Test */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Custom Text Test</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="custom-text" className="block text-sm font-medium text-gray-700 mb-2">
                Enter German text to test:
              </label>
              <textarea
                id="custom-text"
                value={customText}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCustomText(e.target.value)}
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Enter German text here... (e.g., Ich lerne Deutsch)"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Characters: {customText.length} | Words: {customText.trim().split(/\s+/).filter(w => w).length}
              </div>
              <div className="flex items-center gap-4">
                <TTSButton
                  text={customText}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  title="Test custom text"
                  disabled={!customText.trim()}
                />
                <button
                  onClick={() => setCustomText('')}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Testing */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-3">Mobile Browser Testing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-green-700 mb-2">How to Test on Mobile:</h4>
              <ul className="space-y-2 text-green-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Open this page on your mobile device: <code className="bg-green-100 px-2 py-1 rounded text-sm">http://localhost:3000/tts-test</code></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ensure your device volume is turned up</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Test with different mobile browsers (Chrome, Safari, Firefox)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Check if TTS works in both portrait and landscape modes</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-700 mb-2">Mobile-Specific Notes:</h4>
              <ul className="space-y-2 text-green-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>iOS Safari may have limited German voice options</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Android Chrome typically has good TTS support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Some mobile browsers require explicit user permission for audio playback</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Check device settings for TTS engine configuration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">General Testing Instructions</h3>
          <ul className="space-y-2 text-blue-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Click the speaker button next to each test case to hear the pronunciation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Test with different browsers (Chrome, Firefox, Safari, Edge) to verify cross-browser compatibility</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Check console logs for any errors or warnings</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Empty text and whitespace-only text should not trigger TTS playback</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Text with parentheses should only speak the German part before the parentheses</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>For mobile testing, ensure you're on the same network as your development server</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}