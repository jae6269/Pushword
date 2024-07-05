import { fireAuth } from '@/firebase/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default function Home() {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const data = await signInWithPopup(fireAuth, provider);
      console.log(data.user);
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
