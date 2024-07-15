import { URL_LIST } from '@/constants/url';
import { useRouter } from 'next/router';
import { URLKeyType, useMenuStore } from '@/store/store';
import SubscriptionIcon from '../Icon/SubscriptionIcon';
import HomeIcon from '../Icon/HomeIcon';
import ManualIcon from '../Icon/ManualIcon';
import SearchIcon from '../Icon/SearchIcon';
import AccountIcon from '../Icon/AccountIcon';

import classNames from 'classnames/bind';
import styles from './BottomNavBar.module.scss';

const cn = classNames.bind(styles);

export default function BottomNavBar() {
  const router = useRouter();
  const { menu, setMenu } = useMenuStore();

  const handleMenuChange = (newValue: URLKeyType) => {
    setMenu(newValue);
    router.push(URL_LIST[newValue]);
  };

  return (
    <footer className={cn('container')}>
      <div
        className={cn('menu', { selected: menu === 'home' })}
        onClick={() => handleMenuChange('home')}
      >
        <HomeIcon />
        <p className={cn('tag')}>홈</p>
      </div>
      <div
        className={cn('menu', { selected: menu === 'channel' })}
        onClick={() => handleMenuChange('channel')}
      >
        <SubscriptionIcon />
        <p className={cn('tag')}>채널</p>
      </div>
      <div
        className={cn('menu', { selected: menu === 'search' })}
        onClick={() => handleMenuChange('search')}
      >
        <SearchIcon />
        <p className={cn('tag')}>검색</p>
      </div>
      <div
        className={cn('menu', { selected: menu === 'manual' })}
        onClick={() => handleMenuChange('manual')}
      >
        <ManualIcon />
        <p className={cn('tag')}>메뉴얼</p>
      </div>
      <div
        className={cn('menu', { selected: menu === 'account' })}
        onClick={() => handleMenuChange('account')}
      >
        <AccountIcon />
        <p className={cn('tag')}>계정</p>
      </div>
    </footer>
  );
}
