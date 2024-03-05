/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: { appDir: true },
  i18n: {
    locales: ["default", "th", "en"],
    defaultLocale: "default",
    localeDetection: false,
  },
};

module.exports = nextConfig;
