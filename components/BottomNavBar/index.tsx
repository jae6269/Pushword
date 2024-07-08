import { URL_LIST } from '@/constants/url';
import { useState } from 'react';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import {
  HomeOutlined,
  MenuBookOutlined,
  SearchOutlined,
  SubscriptionsOutlined,
  AccountCircleOutlined,
} from '@mui/icons-material';
import { useRouter } from 'next/router';

type URLKeyType = keyof typeof URL_LIST;

export default function BottomNavBar() {
  const [menu, setMenu] = useState<URLKeyType>('home');
  const router = useRouter();

  const handleMenuChange = (
    event: React.SyntheticEvent,
    newValue: URLKeyType
  ) => {
    setMenu(newValue);
    router.push(URL_LIST[newValue]);
  };

  return (
    <BottomNavigation showLabels value={menu} onChange={handleMenuChange}>
      <BottomNavigationAction
        label="홈"
        value="home"
        defaultChecked
        icon={<HomeOutlined />}
      />
      <BottomNavigationAction
        label="채널"
        value="channel"
        icon={<SubscriptionsOutlined />}
      />
      <BottomNavigationAction
        label="검색"
        value="search"
        icon={<SearchOutlined />}
      />
      <BottomNavigationAction
        label="메뉴얼"
        value="manual"
        icon={<MenuBookOutlined />}
      />

      <BottomNavigationAction
        label="계정"
        value="account"
        icon={<AccountCircleOutlined />}
      />
    </BottomNavigation>
  );
}
