import classNames from 'classnames/bind';
import styles from './ChannelPage.module.scss';
import { User } from 'firebase/auth';
import useGetChannels from '@/hooks/useGetChannels';
import { useEffect } from 'react';

const cn = classNames.bind(styles);

interface ChannelsProps {
  user: User;
}

export default function Channels({ user }: ChannelsProps) {
  const { data } = useGetChannels(user);
  useEffect(() => {
    console.log(data);
  }, []);
  if (!user) {
    return <div className={cn('container')}>로그인이 필요합니다.</div>;
  }
  return (
    <div className={cn('container')}>
      <h1 className={cn('title')}>채널</h1>
    </div>
  );
}
