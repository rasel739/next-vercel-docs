'use client';

import Logo from './logo';
import Link from 'next/link';
import ThemeToggler from './ThemeToggler';
import MobileSidebar from './MobileSidebar';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isDocsPage = pathname.startsWith('/docs');

  return (
    <header className='fixed top-0 z-50 w-full'>
      <nav className='bg-white dark:bg-smokyBlack px-4 sm:px-8 py-4 sm:py-5 border-b border-smokyBlack/10 dark:border-white/10 shadow-header_shadow'>
        <div className='flex items-center justify-between'>
          <Logo />

          <div className='flex items-center gap-3.5 sm:gap-5 lg:gap-7'>
            <div className='hidden sm:flex gap-6'>
              <Link href={'/docs'}>
                <p className='hover:text-primary'>Docs</p>
              </Link>
            </div>

            <ThemeToggler />

            {isDocsPage && (
              <button
                className='flex md:hidden cursor-pointer'
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'>
                  <rect width='18' height='1.5' x='3' y='7.001' fill='currentcolor' rx='.75' />
                  <rect width='15' height='1.5' x='3' y='11.251' fill='currentcolor' rx='.75' />
                  <rect width='18' height='1.5' x='3' y='15.499' fill='currentcolor' rx='.75' />
                </svg>
              </button>
            )}
          </div>
        </div>
      </nav>
      <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
};

export default Header;
