import classNames from 'classnames/bind';
import styles from './ManualPage.module.scss';

const cn = classNames.bind(styles);
export default function Manual() {
  return <div className={cn('container')}> 메뉴얼</div>;
}
