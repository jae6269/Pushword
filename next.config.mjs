/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa';
import path from 'path';
import { fileURLToPath } from 'url';

const withPWA = withPWAInit({
  dest: 'public',
  customWorkerSrc: 'worker',
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    // @import 사용 시 styles 폴더를 기본으로 설정
    includePaths: [path.join(__dirname, 'styles')],
    // 매번 가져올 파일 추가
    prependData: `@import "styles/globals.scss";`,
  },
};

export default withPWA(nextConfig);
