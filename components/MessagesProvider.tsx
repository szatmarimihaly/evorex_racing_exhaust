import { NextIntlClientProvider } from 'next-intl';

export default async function MessagesProvider({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const messages = require(`../../messages/${locale}.json`).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}