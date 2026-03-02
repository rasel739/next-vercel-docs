'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      aria-label='theme toggler'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='group flex items-center cursor-pointer justify-center'
    >
      <span>
        {theme === 'dark' ? (
          <Image src={'/images/icon/sun-icon.svg'} alt='sun-icon' width={18} height={18} />
        ) : (
          <Image src={'/images/icon/moon-icon.svg'} alt='moon-icon' width={18} height={18} />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
