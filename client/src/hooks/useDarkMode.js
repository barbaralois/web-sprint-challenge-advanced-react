import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useDarkMode(initialValue) {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue);
  useEffect(() => {
    return darkMode
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode');
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
