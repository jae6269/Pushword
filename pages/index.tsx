import { fireAuth, fireStore, provider } from '@/firebase/firebase';
import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export default function Home() {
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
    <div>
      <button type="button" onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
}
