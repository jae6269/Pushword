import { URL_LIST } from '@/constants/url';
import { useState } from 'react';

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

  return <div>바텀 네비게이션</div>;
}
