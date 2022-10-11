/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const reactStrictMode = true;
  const swcMinify = true;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    //     SITE_KEY: process.env.SITE_KEY,
    //     SECRET_KEY: process.env.SECRET_KEY,
    //     MAIL_USER: process.env.MAIL_USER,
    //     MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    IS_PROD: isProd,
    EMAIL_USER_PROD: process.env.EMAIL_USER_PROD,
    EMAIL_PASS_PROD: process.env.EMAIL_PASS_PROD,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    // HCAPTCHA_SITE_KEY: process.env.HCAPTCHA_SITE_KEY,
    // HCAPTCHA_SECRET_KEY: process.env.HCAPTCHA_SECRET_KEY,
    // HCAPTCHA_SERVICES_SITE_KEY: process.env.HCAPTCHA_SERVICES_SITE_KEY,
    //     NEXT_PUBLIC_GA_VERCEL_ID: process.env.NEXT_PUBLIC_GA_VERCEL_ID,
  };
  // const redirects = () => {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/lublin',
  //     },
  //   ];
  // };

  const i18n = {
    locales: ['pl'],
    defaultLocale: 'pl',
  };

  return {
    env,
    reactStrictMode,
    swcMinify,
    i18n,
    // redirects,
  };
};
