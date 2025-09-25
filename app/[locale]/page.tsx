// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar/Navbar'
import { routing } from '@/i18n/routing'
import MainHero from '@/components/Hero/MainHero';

type Locale = (typeof routing.locales)[number];

export default async function Page({ params }: { params: { locale: Locale } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <main>
      <Navbar />
      <MainHero text={t('heroTitle')} shopText={t('heroButton')}/>
    </main>
  );
}
