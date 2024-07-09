import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';

const cn = classNames.bind(styles);

export default function Home() {
  return <div className={cn('container')}>홈페이지</div>;
}
