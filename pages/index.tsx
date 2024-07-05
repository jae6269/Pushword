import fireStore from '@/firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';

export default function Home() {
  const testClick = async () => {
    const query = await getDoc(doc(fireStore, 'User', 'f2HG7YOjJbijFjSQBZ9f'));
    console.log(query.data());
  };
  return (
    <div>
      <button type="button" onClick={() => testClick}>
        가져오기ㅇㅇㅇㄴ
      </button>
    </div>
  );
}
