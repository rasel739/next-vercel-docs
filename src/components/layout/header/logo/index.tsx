import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  const theme = useTheme();
  return (
    <Link href='/'>
      <Image
        src={`/images/logo/${theme.theme === 'dark' ? 'dark.svg' : 'light.svg'}`}
        alt='logo'
        width={130}
        height={40}
      />
    </Link>
  );
};

export default Logo;
