/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  register: false,
  sw: 'sw.js',
});

const nextConfig = {
  reactStrictMode: true,
  // 기타 Next.js 설정
};

export default withPWA(nextConfig);
