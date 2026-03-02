'use client';
import Link from 'next/link';

const Footer = () => {
  const footerLink = [
    {
      title: 'Docs',
      link: '/docs',
    },
    {
      title: 'Github',
      link: 'https://github.com',
    },
  ];

  return (
    <footer>
      <div className='bg-paleSlate dark:bg-smokyBlack/40 py-6 sm:py-10'>
        <div className='container'>
          <div className='flex flex-col sm:flex-row gap-2 items-center justify-between text-center sm:text-left'>
            <p>© {new Date().getFullYear()} NextJs Vercel Docs</p>
            <div className='flex flex-wrap items-center row-gap-2 gap-x-5 justify-center'>
              {footerLink?.map((value, index) => {
                return (
                  <Link href={value?.link} key={index} className='hover:text-primary'>
                    {value?.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
