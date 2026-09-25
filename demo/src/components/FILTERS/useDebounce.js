import { useState, useEffect, useRef } from 'react';

const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const Count = useRef(0); 

  useEffect(() => {
    const handler = setTimeout(() => {
      Count.current += 1;
      console.log(` [Counting: ${Count.current}] Debounce Executed for: "${value}"`);
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;