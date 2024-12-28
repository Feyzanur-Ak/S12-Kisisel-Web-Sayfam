import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored === null || stored === undefined) {
        
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
    try {
      setData(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("useLocalStorage update error:", error);
    }
  };

  return [data, updatedStorage];
};
