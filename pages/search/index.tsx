import classNames from 'classnames/bind';
import styles from './SearchPage.module.scss';

const cn = classNames.bind(styles);

export default function Search() {
  return <div className={cn('container')}> 검색</div>;
}
