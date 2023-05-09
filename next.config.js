/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/ts-next-portfolio",
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/profile/info',
        permanent: true,
      },
    ];
  },
}

    

module.exports = nextConfig
