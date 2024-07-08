import useGetUser from '@/hooks/useGetUser';

import classNames from 'classnames/bind';
import styles from './SignPage.module.scss';

const cn = classNames.bind(styles);

export default function SignPage() {
  const user = useGetUser();
  return <div className={cn('container')}></div>;
}
