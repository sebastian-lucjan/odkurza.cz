import { ReactNode } from 'react';
import '@ui/styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}

// import '@ui/styles/styles/globals.css';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
//
// function MyApp({ Component, pageProps }) {
//   const router = useRouter();
//
//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       if (typeof window !== 'undefined' && window.gtag !== undefined) {
//         window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
//           page_path: url,
//         });
//       }
//     };
//     router.events.on('routeChangeComplete', handleRouteChange);
//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange);
//     };
//   }, [router.events]);
//
//   return <Component {...pageProps} />;
// }
//
// export default MyApp;
