import 'styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// export async function getStaticProps() {
//   const infoBar = await getContent('infoBar');
//
//   return {
//     props: {
//       infoBar,
//     },
//   };
// }

// todo: can i use it here ?

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window !== 'undefined' && window.gtag !== undefined) {
        // console.log('gtag', url);
        window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    // <PageContext>
    <Component {...pageProps} />
    // </PageContext>
  );
}

// todo: add Wrapper with context for InfoBar visibility

export default MyApp;
