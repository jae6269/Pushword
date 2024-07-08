import { fireAuth, fireStore, provider } from '@/firebase/firebase';
import { signInWithPopup, User } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Profile from '../Profile';

export function SignIn() {
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button type="button" onClick={handleLogin}>
      로그인
    </button>
  );
}

interface SignProps {
  user: User | null;
}
export default function Sign({ user }: SignProps) {
  if (user && user.photoURL && user.displayName) {
    return <Profile name={user.displayName} photoURL={user.photoURL} />;
  } else {
    return <SignIn />;
  }
}
