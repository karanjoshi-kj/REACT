import { useState, useEffect, useRef } from 'react';

const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const executionCount = useRef(0); // Counter variable

  useEffect(() => {
    const handler = setTimeout(() => {
      executionCount.current += 1;
      console.log(`🔥 [Count: ${executionCount.current}] Debounce Executed for: "${value}"`);
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;