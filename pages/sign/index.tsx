import Sign from '@/components/Sign';
import useGetUser from '@/hooks/useGetUser';
import styles from './SignPage.module.css';

export default function SignPage() {
  const user = useGetUser();
  return (
    <main className={styles.container}>
      <Sign user={user} />
    </main>
  );
}
