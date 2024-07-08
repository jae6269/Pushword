import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';

const cn = classNames.bind(styles);

export default function SignIn() {
  return <div className={cn('container')}>로그인</div>;
}
