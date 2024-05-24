/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/single-year",
        destination: "/single-year/eights/men/2010",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
