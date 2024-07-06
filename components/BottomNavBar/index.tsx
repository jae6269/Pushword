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

interface BottomNavBarProps {
  user: User | null;
}
type URLKeyType = keyof typeof URL_LIST;

export default function BottomNavBar({ user }: BottomNavBarProps) {
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
      <BottomNavigationAction label="home" icon={<HomeOutlined />} />
      <BottomNavigationAction
        label="channel"
        icon={<SubscriptionsOutlined />}
      />
      <BottomNavigationAction label="search" icon={<SearchOutlined />} />
      <BottomNavigationAction label="manual" icon={<MenuBookOutlined />} />
      {user && (
        <BottomNavigationAction
          label="information"
          icon={<AccountCircleOutlined />}
        />
      )}
    </BottomNavigation>
  );
}
