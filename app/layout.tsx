import { ReactNode } from 'react';
import 'app/styles/globals.css';
import HeadMeta from '@ui/HeadMeta';
import InfoBar from '@ui/InfoBar';
import { getContent } from '@lib/services/cms/getContent';
import infoBarVisibility from '@lib/helpers/isInfoBarVisible';
import ConversationFormProvider from './providers/ConversationFormProvider';
import { pageData } from '../data/pageData';
import GoogleAnalyticsScripts from './components/web/GoogleAnaliticsScripts';

const {
  cmsData: { infoBar },
} = pageData;

export default async function RootLayout({ children }: { children: ReactNode }) {
  const { isVisible, turnOffDate, textContent, bargain } = await getContent(infoBar.id);

  const isInfoBarVisible = infoBarVisibility(isVisible, turnOffDate);

  return (
    <html lang="pl-PL">
      <HeadMeta />

      <GoogleAnalyticsScripts />

      <body>
        <ConversationFormProvider>
          <main className="relative bg-white">
            {isInfoBarVisible && <InfoBar textContent={textContent} bargain={bargain} />}

            {children}
          </main>
        </ConversationFormProvider>
      </body>
    </html>
  );
}
