import classNames from 'classnames/bind';
import styles from './SignOut.module.scss';
import { SignOutButton } from '@/components/Button/SignButton';

const cn = classNames.bind(styles);

export default function SignOut() {
  return (
    <div className={cn('container')}>
      <SignOutButton />
    </div>
  );
}
