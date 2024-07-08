import useGetUser from '@/hooks/useGetUser';

import classNames from 'classnames/bind';
import styles from './SignPage.module.scss';
import SignIn from '@/components/Sign/SignIn';
import SignOut from '@/components/Sign/SignOut';

const cn = classNames.bind(styles);

export default function SignPage() {
  const user = useGetUser();
  return (
    <main className={cn('container')}>{user ? <SignIn /> : <SignOut />}</main>
  );
}
