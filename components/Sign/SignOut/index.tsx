import classNames from 'classnames/bind';
import styles from './SignOut.module.scss';

const cn = classNames.bind(styles);

export default function SignOut() {
  return <div className={cn('container')}>로그아웃</div>;
}
