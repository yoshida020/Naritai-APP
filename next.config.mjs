/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/corporate',
        destination: '/lp',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
