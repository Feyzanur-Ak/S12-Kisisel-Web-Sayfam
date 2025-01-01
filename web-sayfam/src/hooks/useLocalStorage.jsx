import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    try {
      const storedData = localStorage.getItem(key);

   

      if (!storedData || storedData === "undefined") {
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }

     
      return JSON.parse(storedData);
    } catch (error) {
      console.error(`Error accessing localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const updateStorage = (newValue) => {
    if (newValue === undefined) {
      console.error(`Error: Trying to set "${key}" with an undefined value.`);
      return;
      
    }
    console.log(newValue);

    try {
      localStorage.setItem(key, JSON.stringify(newValue));
      setData(newValue);
    } catch (error) {
      console.error(`Error updating localStorage key "${key}":`, error);
    }
  };

  return [data, updateStorage];
};
