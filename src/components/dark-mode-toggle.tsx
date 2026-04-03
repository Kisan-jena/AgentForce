'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '../icons-logos/icons';

const Toggle = () => {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme)');

    const handleChange = (e:MediaQueryListEvent) => {
      setSystemTheme(e.matches?'dark':'light')
    }

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.addEventListener('change', handleChange);
  })

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    } else {
      // system
      setSystemTheme(systemTheme === 'dark' ? 'light' : 'dark');
    }
  };
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center size-8  bg-amber-00 border border-neutral-500 rounded-lg">
        
        <SunIcon className="size-6 absolute  shrink-0  bg dark:scale-0 scale-100 dark:rotate-90 transition-all duration-300"/>
        <MoonIcon className="size-5 absolute  dark:scale-100 scale-0 dark:rotate-0 rotate-45 transform-all duration-300" />
        
      </button>
    </div>
  );
};

export default Toggle;
