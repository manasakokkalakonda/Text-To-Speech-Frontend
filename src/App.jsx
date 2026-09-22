import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('hi-IN');
  const [gender, setGender] = useState('female');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);

  const MAX_CHARS = 500;

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Please enter some text to generate speech.');
      return;
    }

    setLoading(true);
    setError(null);
    setAudioUrl(null);
    setTranslatedText('');

    try {
      // Send request to your local backend server to bypass browser CORS restrictions
      const response = await fetch('http://localhost:5000/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, language, gender }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Server failed to generate speech.');
      }

      const data = await response.json();
      if (data.success) {
        setTranslatedText(data.translatedText);
        setAudioUrl(`http://localhost:5000${data.audioUrl}`);
      } else {
        throw new Error('Invalid response from backend server.');
      }
    } catch (err) {
      console.error('Generation Error:', err);
      setError(err.message || 'Failed to connect to backend server on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="studio-container">
      <header className="studio-header">
        <h1>🎙️ VoiceCraft Studio</h1>
        <p>Multilingual Text-to-Speech & Translation Studio</p>
      </header>

      <main className="studio-main">
        <form onSubmit={handleGenerate} className="studio-form">
          <div className="form-group">
            <label htmlFor="text">Enter your text here:</label>
            <textarea
              id="text"
              rows="4"
              maxLength={MAX_CHARS}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Hello, welcome to the Text-to-Speech application."
              required
            />
            <div className="char-counter">
              Characters: {text.length} / {MAX_CHARS}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="language">Translate & Speak Language:</label>
            <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="hi-IN">Hindi (हिन्दी)</option>
              <option value="te-IN">Telugu (తెలుగు)</option>
              <option value="mr-IN">Marathi (मराठी)</option>
              <option value="gu-IN">Gujarati (ગુજરાતી)</option>
              <option value="es-ES">Spanish (Español)</option>
              <option value="fr-FR">French (Français)</option>
              <option value="de-DE">German (Deutsch)</option>
              <option value="en-US">English (US)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="gender">Voice Tone Style:</label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="female">Female Voice 👩</option>
              <option value="male">Male Voice 👨</option>
            </select>
          </div>

          {error && <div className="error-banner">{error}</div>}

          <button type="submit" className="generate-btn" disabled={loading}>
            {loading ? '✨ Translating & Generating Audio...' : '🚀 Generate Speech & Audio'}
          </button>
        </form>

        <div className="output-section">
          <h3>Generated Audio & Download</h3>
          <div className="audio-player-card">
            {translatedText ? (
              <div className="audio-wrapper" style={{ textAlign: 'left', width: '100%' }}>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', marginBottom: '0.3rem' }}>Translated Text:</p>
                <p style={{ color: '#f3f4f6', fontSize: '1.05rem', fontWeight: '500', marginBottom: '1.2rem', background: '#030712', padding: '0.75rem', borderRadius: '6px', border: '1px solid #1f2937' }}>
                  {translatedText}
                </p>

                {audioUrl ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center' }}>
                    {/* Audio Player Box */}
                    <audio controls src={audioUrl} style={{ width: '100%' }} />

                    {/* Download Icon Button */}
                    <a
                      href={audioUrl}
                      download={`speech-${language}-${Date.now()}.mp3`}
                      className="download-btn"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        textAlign: 'center',
                        width: '100%',
                        boxSizing: 'border-box',
                        textDecoration: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <span>📥</span> Download Audio MP3 File
                    </a>
                  </div>
                ) : (
                  <p style={{ color: '#818cf8', textAlign: 'center' }}>Preparing audio stream...</p>
                )}
              </div>
            ) : (
              <p className="placeholder-text">
                Your translated text, audio box, and download button will appear here after clicking generate.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

App.displayName = "App";

export default App;