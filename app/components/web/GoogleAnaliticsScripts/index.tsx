import Script from 'next/script';

export default function GoogleAnalyticsScripts() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {` 
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);} 
          gtag('js', new Date()); 

          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}'); 
        `}
      </Script>
    </>
  );
}
