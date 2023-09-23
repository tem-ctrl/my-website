/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
  // Provide internationalization config file for server components
  './i18n.ts'
);
const nextConfig = {}

module.exports = withNextIntl(nextConfig);
