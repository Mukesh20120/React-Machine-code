import React from 'react';
import useTranslate from './useTranslate';

export default function TranslateComponent() {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold">Language: <span className="text-blue-500">{language}</span></h1>

        <div className="space-y-2 text-lg">
          <p>{t("hi")}</p>
          <p>{t("bye")}</p>
          <p>{t("nested.value")}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-4">
          <button
            onClick={() => setLanguage("sp")}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
          >
            Change to Spanish
          </button>
          <button
            onClick={() => setLanguage("en")}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition"
          >
            Change to English
          </button>
          <button
            onClick={() => setFallbackLanguage("en")}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition"
          >
            Set Fallback to Spanish
          </button>
        </div>
      </div>
    </div>
  );
}
