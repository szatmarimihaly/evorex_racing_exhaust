// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar/Navbar'
import { routing } from '@/i18n/routing'
import MainHero from '@/components/Hero/MainHero';
import AboutCompany from '@/components/MainComponents/AboutCompany'
import { Metadata } from 'next';
import CardList from '@/components/Card/CardList'


import EngineeringIcon from '@mui/icons-material/Engineering'
import HearingIcon from '@mui/icons-material/Hearing'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import Titanium from '@/components/MainComponents/Titanium';

type Locale = (typeof routing.locales)[number];

export const metadata: Metadata = {
  title : "EVOREX | HOME",
  description : ""
} 

export default async function Page({ params }: { params: { locale: Locale } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const cards = [
    {id:1, title:t('title1'), icon:<EngineeringIcon sx={{ color : 'white', fontSize : 90 }}/>},
    {id:2, title:t('title2'), icon:<HearingIcon sx={{ color : 'white', fontSize : 90 }} />},
    {id:3, title:t('title3'), icon:<WorkspacePremiumIcon sx={{ color : 'white', fontSize : 90 }} />},
    {id:4, title:t('title4'), icon:<SportsMotorsportsIcon sx={{ color : 'white', fontSize : 90 }} />},
    {id:5, title:t('title5'), icon:<VerifiedUserIcon sx={{ color : 'white', fontSize : 90 }} />},
    {id:6, title:t('title6'), icon:<AutoFixHighIcon sx={{ color : 'white', fontSize : 90 }} />},
  ]

  return (
    <main>
      <Navbar />
      <MainHero shopText={t('heroButton')}/>
      <AboutCompany aboutCompanyText={t('aboutCompanyText')} descriptionText={t('aboutText1')} descriptionText2={t('aboutText2')}/>
      <CardList cards={cards}/>
      <Titanium aero={t('aero')} heat={t('heat')} weight={t('weight')} mainTitle={t('mainTitle')} materialdesc1={t('materialdesc1')} materialdesc2={t('materialdesc2')} materialdesc3={t('materialdesc3')} materialdesc4={t('materialdesc4')}/>
    </main>
  );
}
