import { SignInButton } from '@/components/Button/SignButton';
import Image from 'next/image';
import MainLogo from '@/public/images/main-full-logo.png';

import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
const cn = classNames.bind(styles);

export default function SignIn() {
  return (
    <div className={cn('container')}>
      <h1>로그인이 필요합니다.</h1>
      <Image src={MainLogo} alt="메인 로고" width={400} />
      <SignInButton />
    </div>
  );
}
