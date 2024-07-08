import { fireAuth, fireStore, provider } from '@/firebase/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import styles from './SignButton.module.scss';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import Image from 'next/image';
const cn = classNames.bind(styles);

export function SignInButton() {
  const router = useRouter();
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

      alert('로그인,저장 완료');
      //확인 : 로그인 후 로직 추가
      router.push('/');
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
