// TranslationContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translationsCache, setTranslationsCache] = useState({});

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const translateText = async (text) => {
    if (translationsCache[language] && translationsCache[language][text]) {
      return translationsCache[language][text];
    }

    try {
      const response = await axios.post('https://libretranslate.de/translate', {
        q: text,
        source: 'en',
        target: language,
      });
      const translatedText = response.data.translatedText;

      setTranslationsCache((prevCache) => ({
        ...prevCache,
        [language]: {
          ...prevCache[language],
          [text]: translatedText,
        },
      }));

      return translatedText;
    } catch (error) {
      console.error('Error translating text:', error);
      return text;
    }
  };

  const translateTexts = async (texts) => {
    const translatedTexts = {};
    for (const [key, value] of Object.entries(texts)) {
      if (typeof value === 'string') {
        translatedTexts[key] = await translateText(value);
        await delay(1000); // Adding a 1 second delay between each request
      } else if (Array.isArray(value)) {
        translatedTexts[key] = await Promise.all(value.map(async (text) => {
          const translated = await translateText(text);
          await delay(1000); // Adding a 1 second delay between each request
          return translated;
        }));
      }
    }
    return translatedTexts;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translateTexts }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  return useContext(TranslationContext);
};