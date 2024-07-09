import Image from 'next/image';
import { useRouter } from 'next/router';
import { fireAuth, fireStore, provider } from '@/firebase/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import classNames from 'classnames/bind';
import styles from './SignButton.module.scss';
import { useMenuStore } from '@/store/store';
import { URL_LIST } from '@/constants/url';
const cn = classNames.bind(styles);

export function SignInButton() {
  const router = useRouter();
  const { setMenu } = useMenuStore();
  const handleLogin = async () => {
    try {
      const data = await signInWithPopup(fireAuth, provider);
      const user = data.user;

      const userRef = doc(fireStore, 'users', user.uid);
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        lastLogin: new Date(),
      });

      setMenu('home');
      router.push(URL_LIST.home);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button className={cn('sign-in')} type="button" onClick={handleLogin}>
      <Image
        src="/icons/google-logo.svg"
        alt="구글로그인"
        width={30}
        height={30}
      />
      <p>구글계정으로 시작하기</p>
    </button>
  );
}

export function SignOutButton() {
  const handleLogOut = async () => {
    try {
      await signOut(fireAuth);
    } catch (error) {
      alert('로그아웃 실패. 다시 시도해주세요.');
    }
  };
  return (
    <button className={cn('sign-out')} type="button" onClick={handleLogOut}>
      로그아웃
    </button>
  );
}
