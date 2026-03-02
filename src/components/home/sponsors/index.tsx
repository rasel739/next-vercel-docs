'use client';

import Slider from 'react-infinite-logo-slider';
import SingleSponsor from './SingleSponsor';
import Link from 'next/link';

const Sponsors = () => {
  const sponsorData = [
    {
      logo: '/images/sponsor/sponsor-icon-1.svg',
    },
    {
      logo: '/images/sponsor/sponsor-icon-2.svg',
    },
    {
      logo: '/images/sponsor/sponsor-icon-3.svg',
    },
    {
      logo: '/images/sponsor/sponsor-icon-4.svg',
    },
    {
      logo: '/images/sponsor/sponsor-icon-5.svg',
    },
    {
      logo: '/images/sponsor/sponsor-icon-6.svg',
    },
    {
      logo: '/images/sponsor/sponsor-icon-7.svg',
    },
  ];

  return (
    <section>
      <div className='py-11 sm:py-20 dark:bg-smokyBlack/10'>
        <div className='container'>
          <div className='flex flex-col text-center gap-6 md:gap-10'>
            <div className='text-center'>
              <h2>Sponsors</h2>
            </div>
            {sponsorData && sponsorData.length > 0 && (
              <div>
                <Slider width='200px' duration={20} pauseOnHover={true} blurBorders={false}>
                  {sponsorData?.map((value, index) => {
                    return <SingleSponsor key={index} sponsor={value.logo} />;
                  })}
                </Slider>
              </div>
            )}
            <div className='w-full flex justify-center'>
              <div className='flex flex-col items-center gap-2.5 max-w-xl'>
                <Link href={'/docs'}>
                  <div className='btn-gradient py-3 px-6 w-fit'>
                    <p className='text-white font-bold'>Checkout Docs</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
