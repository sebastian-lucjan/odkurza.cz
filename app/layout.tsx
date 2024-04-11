import { ReactNode } from 'react';
import 'app/styles/globals.css';
import HeadMeta from 'app/components/web/HeadMeta';
import InfoBar from '@ui/InfoBar';
import { getContent } from '@lib/services/cms/getContent';
import infoBarVisibility from '@lib/helpers/isInfoBarVisible';
import { pageData } from 'data/pageData';
import ConversationFormProvider from 'app/providers/ConversationFormProvider';
import GoogleAnalyticsScripts from 'app/components/web/GoogleAnaliticsScripts';

const infoBarID = pageData.cmsData.infoBar.id;

export default async function RootLayout({ children }: { children: ReactNode }) {
  const { isVisible, turnOffDate, textContent, bargain } = await getContent(infoBarID);

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
