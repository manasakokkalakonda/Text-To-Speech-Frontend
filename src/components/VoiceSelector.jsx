import React from 'react';

export default function VoiceSelector({ voice, setVoice, voices }) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-semibold text-slate-700">Voice:</label>
      <select
        className="p-3 border border-slate-300 rounded-xl bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
        value={voice}
        onChange={(e) => setVoice(e.target.value)}
      >
        {voices.map((v, index) => (
          <option key={index} value={v.name}>
            {v.name} ({v.gender})
          </option>
        ))}
      </select>
    </div>
  );
}