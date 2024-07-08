import { URL_LIST } from '@/constants/url';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  RiHome4Line as HomeIcon,
  RiBookReadLine as ManualIcon,
  RiSearch2Line as SearchIcon,
  RiAccountPinCircleLine as AccountIcon,
} from 'react-icons/ri';
import { MdOutlineSubscriptions as ChannelIcon } from 'react-icons/md';

import classNames from 'classnames/bind';
import styles from './BottomNavBar.module.scss';

type URLKeyType = keyof typeof URL_LIST;

const cn = classNames.bind(styles);

export default function BottomNavBar() {
  const [menu, setMenu] = useState<URLKeyType>('home');
  const router = useRouter();

  const handleMenuChange = (newValue: URLKeyType) => {
    setMenu(newValue);
    router.push(URL_LIST[newValue]);
  };

  return (
    <footer className={cn('container')}>
      <div className={cn('menu')} onClick={() => handleMenuChange('home')}>
        <HomeIcon />
        <p className={cn('tag')}>홈</p>
      </div>
      <div className={cn('menu')} onClick={() => handleMenuChange('channel')}>
        <ChannelIcon />
        <p className={cn('tag')}>채널</p>
      </div>
      <div className={cn('menu')} onClick={() => handleMenuChange('search')}>
        <SearchIcon />
        <p className={cn('tag')}>검색</p>
      </div>
      <div className={cn('menu')} onClick={() => handleMenuChange('manual')}>
        <ManualIcon />
        <p className={cn('tag')}>메뉴얼</p>
      </div>
      <div className={cn('menu')} onClick={() => handleMenuChange('account')}>
        <AccountIcon />
        <p className={cn('tag')}>계정</p>
      </div>
    </footer>
  );
}
