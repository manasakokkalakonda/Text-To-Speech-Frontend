import React from 'react';

export default function LanguageSelector({ language, setLanguage }) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-semibold text-slate-700">Language:</label>
      <select
        className="p-3 border border-slate-300 rounded-xl bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en-US">English</option>
        <option value="es-ES">Spanish</option>
        <option value="hi-IN">Hindi</option>
        <option value="gu-IN">Gujarati</option>
        <option value="mr-IN">Marathi</option>
      </select>
    </div>
  );
}