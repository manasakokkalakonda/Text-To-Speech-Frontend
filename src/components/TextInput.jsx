import React from 'react';

export default function TextInput({ text, setText, maxLength = 5000 }) {
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const isOverLimit = text.length > maxLength;

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-semibold text-slate-700">Enter your text:</label>
      <textarea
        className={`w-full h-36 p-3 border rounded-xl focus:ring-2 focus:outline-none resize-none text-sm shadow-sm transition ${
          isOverLimit ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:ring-indigo-500'
        }`}
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex justify-between text-xs text-slate-500 px-1">
        <span>Words: {wordCount}</span>
        <span className={isOverLimit ? 'text-red-500 font-bold' : ''}>
          Characters: {text.length} / {maxLength}
        </span>
      </div>
    </div>
  );
}