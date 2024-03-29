/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    EMAIL_USER_PROD: process.env.EMAIL_USER_PROD,
    EMAIL_PASS_PROD: process.env.EMAIL_PASS_PROD,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },

  i18n: {
    locales: ['pl'],
    defaultLocale: 'pl',
  },
};

module.exports = nextConfig;
