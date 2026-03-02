'use client';
import { BackgroundBeams } from '@/components/ui/BackgroundBeams';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const HeroSection = () => {
  const theme = useTheme();
  const [copied, setCopied] = useState(false);
  const command = 'npx create-next-app@latest';

  const handleCopy = () => {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const words = `A comprehensive, step-by-step guide to creating, configuring, and deploying a Next.js application using Vercel — from zero to production.`;
  return (
    <section>
      <div className='relative bg-[radial-gradient(46.36%_160.26%_at_51.22%_81.69%,rgba(15,126,217,0.06)_0%,rgba(15,126,217,0)_100%),radial-gradient(18.4%_45.73%_at_11.57%_64.01%,rgba(217,15,15,0.05)_0%,rgba(217,15,15,0)_100%),radial-gradient(19.91%_49.47%_at_100.75%_35.35%,rgba(123,236,170,0.1)_0%,rgba(123,236,170,0)_100%)] py-20'>
        <div>
          <div className='container'>
            <div className='flex flex-col gap-2 sm:gap-4 text-center items-center justify-center py-12 sm:py-20'>
              <div className='pb-4'>
                <Image
                  src={`/images/logo/${theme.theme === 'dark' ? 'dark.svg' : 'light.svg'}`}
                  alt='banner-logo'
                  width={220}
                  height={220}
                />
              </div>
              <h1>Build and Deploy a Next.js App with Vercel</h1>
              <TextGenerateEffect words={words} />

              <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-5 py-3'>
                <div className='flex items-center gap-2.5 bg-primary/10 border border-primary rounded-xl px-4 py-2'>
                  <p className='text-secondary'>$</p>
                  <p className='font-mono'>{command}</p>
                  <button
                    onClick={handleCopy}
                    className='transition cursor-pointer'
                    title='Copy to clipboard'
                  >
                    {copied ? (
                      <Image
                        src={'/images/icon/check-primary-icon.svg'}
                        alt='copy-icon'
                        width={18}
                        height={18}
                      />
                    ) : (
                      <Image
                        src={'/images/icon/copy-icon.svg'}
                        alt='copy-icon'
                        width={18}
                        height={18}
                      />
                    )}
                  </button>
                </div>
                <Link href={'/docs'} className='btn-gradient py-3 px-6'>
                  <span className='text-white font-bold'>Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </section>
  );
};

export default HeroSection;
