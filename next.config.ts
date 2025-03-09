import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.classbon.com',
      },
      {
        protocol: 'https',
        hostname: 'classbon-blog.s3.ir-thr-at1.arvanstorage.ir',
      },
      {
        protocol: 'https',
        hostname: 'classbon-blog.s3.ir-thr-at1.arvanstorage.com',
      },
    ],
  },
  /* config options here */
}

export default nextConfig
