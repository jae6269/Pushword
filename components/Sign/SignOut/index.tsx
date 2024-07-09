import classNames from 'classnames/bind';
import styles from './SignOut.module.scss';
import { SignOutButton } from '@/components/Button/SignButton';
import Image from 'next/image';
import MainTitleLogo from '@/public/images/main-title-logo.png';
import { User } from 'firebase/auth';
import Profile from '@/components/Profile';

const cn = classNames.bind(styles);

interface SignOutProps {
  user: User;
}

export default function SignOut({ user }: SignOutProps) {
  return (
    <div className={cn('container')}>
      <Image src={MainTitleLogo} alt="PushWord 로고" />
      <Profile user={user} />
      <SignOutButton />
    </div>
  );
}
