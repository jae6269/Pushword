import Sign from '@/components/Sign';
import useGetUser from '@/hooks/useGetUser';

export default function SignPage() {
  const user = useGetUser();
  return (
    <div className="container">
      <Sign user={user} />
    </div>
  );
}
