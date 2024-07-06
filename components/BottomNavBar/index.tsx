import { User } from 'firebase/auth';
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
        label="home"
        value="home"
        defaultChecked
        icon={<HomeOutlined />}
      />
      <BottomNavigationAction
        label="channel"
        value="channel"
        icon={<SubscriptionsOutlined />}
      />
      <BottomNavigationAction
        label="search"
        value="search"
        icon={<SearchOutlined />}
      />
      <BottomNavigationAction
        label="manual"
        value="manual"
        icon={<MenuBookOutlined />}
      />

      <BottomNavigationAction
        label="information"
        value="information"
        icon={<AccountCircleOutlined />}
      />
    </BottomNavigation>
  );
}
