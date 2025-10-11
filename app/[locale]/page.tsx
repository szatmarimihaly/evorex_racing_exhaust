// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar/Navbar'
import { routing } from '@/i18n/routing'
import MainHero from '@/components/Hero/MainHero';
import AboutCompany from '@/components/MainComponents/AboutCompany'
import { Metadata } from 'next';

type Locale = (typeof routing.locales)[number];

export const metadata: Metadata = {
  title : "EVOREX | HOME",
  description : ""
} 

export default async function Page({ params }: { params: { locale: Locale } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <main>
      <Navbar />
      <MainHero text={t('heroTitle')} shopText={t('heroButton')}/>
      <AboutCompany aboutCompanyText={t('aboutCompanyText')} descriptionText={t('aboutText1')} descriptionText2={t('aboutText2')}/>
    </main>
  );
}
