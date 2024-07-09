import classNames from 'classnames/bind';
import styles from './SignOut.module.scss';
import { SignOutButton } from '@/components/Button/SignButton';
import Image from 'next/image';
import MainTitleLogo from '@/public/images/main-title-logo.png';

const cn = classNames.bind(styles);

export default function SignOut() {
  return (
    <div className={cn('container')}>
      <Image src={MainTitleLogo} alt="PushWord 로고" />
      <SignOutButton />
    </div>
  );
}
