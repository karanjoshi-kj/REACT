import { useState, useEffect } from 'react';

const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Console log to show when user stops typing and timer triggers
    console.log(`⏱️ Timer started for: "${value}"`);

    const handler = setTimeout(() => {
      console.log(`✅ Debounce executed! Value updated to: "${value}"`);
      setDebouncedValue(value);
    }, delay);

    return () => {
      console.log(`❌ Timer cancelled for: "${value}" (User typed again)`);
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;