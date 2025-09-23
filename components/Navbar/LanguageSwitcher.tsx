'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';


export default function LanguageSwitcher() {
  const { locale } = useParams();
  const nextLocale = locale === 'en' ? 'hu' : 'en';

  return (
    <Link href={`/${nextLocale}`} 
      prefetch 
      className='no-underline hover:no-underline text-xl flex gap-2 items-center text-black bg-white px-4 py-2 rounded-lg font-bold'
    >
      {locale === 'en' ? 'EN' : 'HU'}
      <GTranslateOutlinedIcon />
    </Link>
  );
}
