import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import { User } from 'firebase/auth';

const cn = classNames.bind(styles);

interface HomeProps {
  user: User;
}

export default function Home({ user }: HomeProps) {
  if (!user) {
    return <div className={cn('container')}>로그인이 필요합니다.</div>;
  }
  return <div className={cn('container')}>홈페이지</div>;
}
