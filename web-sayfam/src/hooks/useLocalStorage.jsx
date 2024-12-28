import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored === null) {
   
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      } else {
    
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error("useLocalStorage parse error:", error);
   
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const updatedStorage = (value) => {
    setData(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [data, updatedStorage];
};
