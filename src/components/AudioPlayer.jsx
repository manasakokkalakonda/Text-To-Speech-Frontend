import React from 'react';
import { Download } from 'lucide-react';

export default function AudioPlayer({ audioUrl }) {
  if (!audioUrl) return null;

  return (
    <div className="mt-6 p-5 bg-indigo-50 border border-indigo-100 rounded-2xl flex flex-col space-y-4">
      <h3 className="text-xs font-bold text-indigo-900 tracking-wider uppercase">Generated Audio</h3>
      <audio controls className="w-full">
        <source src={audioUrl} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="flex justify-end">
        <a
          href={audioUrl}
          download="speech-output.mp3"
          className="flex items-center space-x-2 bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded-xl text-xs font-medium shadow-sm transition"
        >
          <Download className="w-4 h-4" />
          <span>Download Audio</span>
        </a>
      </div>
    </div>
  );
}