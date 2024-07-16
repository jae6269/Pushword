import classNames from 'classnames/bind';
import styles from './ChannelPage.module.scss';
import { User } from 'firebase/auth';

const cn = classNames.bind(styles);

interface ChannelsProps {
  user: User;
}

export default function Channels({ user }: ChannelsProps) {
  if (!user) {
    return <div className={cn('container')}>로그인이 필요합니다.</div>;
  }
  return <div className={cn('container')}> 채널페이지</div>;
}
