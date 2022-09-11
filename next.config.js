/** @type {import('next').NextConfig} */

module.exports = () => {
  const reactStrictMode = true;

  const swcMinify = true;

  // const redirects = () => {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/lublin',
  //     },
  //   ];
  // };

  return {
    reactStrictMode,
    // redirects,
    swcMinify,
  };
};
