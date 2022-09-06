import Head from 'next/head';

const HeadMeta = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
      <link rel="manifest" href="icons/site.webmanifest" />
      <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#5bbad5" />

      <link rel="stylesheet" href="https://use.typekit.net/prw8yuu.css" />

      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="title" content="bask - ekologiczne, Polskie stroje kąpielowe dla dzieci" />
      <meta name="description" content="Bask, ekologiczne stroje kąpielowe dla dzieci, projektowanie i produkowane w Polsce." />
      <meta name="keywords" content="bask, ekologiczne stroje kąpielowe dla dzieci, modne stroje kąpielowe dla dzieci" />

      <meta property="og:locale" content="pl_PL" />

      <title>bask - ekologiczne, Polskie stroje kąpielowe dla dzieci</title>
    </Head>
  );
};

export default HeadMeta;
