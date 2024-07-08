import useGetUser from '@/hooks/useGetUser';

import SignIn from '@/components/Sign/SignIn';
import SignOut from '@/components/Sign/SignOut';

export default function SignPage() {
  const user = useGetUser();
  if (user) {
    return <SignOut />;
  } else {
    return <SignIn />;
  }
}
