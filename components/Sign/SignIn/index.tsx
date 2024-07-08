import { SignInButton } from '@/components/Button/SignButton';
import Image from 'next/image';
import MainLogo from '@/public/images/main-full-logo.png';

import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
const cn = classNames.bind(styles);

export default function SignIn() {
  return (
    <div className={cn('container')}>
      <div className={cn('logo')}>
        <Image src={MainLogo} alt="메인 로고" priority fill={true} />
      </div>

      <div className={cn('sign')}>
        <h1 className={cn('title')}>로그인</h1>
        <SignInButton />
      </div>
    </div>
  );
}
