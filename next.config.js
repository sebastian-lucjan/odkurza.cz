/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const reactStrictMode = true;
  const swcMinify = true;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    IS_PROD: isProd,
    EMAIL_USER_PROD: process.env.EMAIL_USER_PROD,
    EMAIL_PASS_PROD: process.env.EMAIL_PASS_PROD,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  };

  const i18n = {
    locales: ['pl'],
    defaultLocale: 'pl',
  };

  return {
    env,
    reactStrictMode,
    swcMinify,
    i18n,
  };
};
