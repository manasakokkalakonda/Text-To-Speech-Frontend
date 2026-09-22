import React from 'react';
import { Volume2, Loader2 } from 'lucide-react';

export default function GenerateButton({ onGenerate, loading }) {
  return (
    <button
      onClick={onGenerate}
      disabled={loading}
      className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-md transition disabled:opacity-50"
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Generating Speech...</span>
        </>
      ) : (
        <>
          <Volume2 className="w-5 h-5" />
          <span>Generate Speech</span>
        </>
      )}
    </button>
  );
}