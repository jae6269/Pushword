import { useState } from 'react';
import { ChannelType } from '@/types/types';
import SearchBar from '@/components/SearchBar';

import classNames from 'classnames/bind';
import styles from './SearchPage.module.scss';
import ChannelCard from '@/components/ChannelCard';
import { User } from 'firebase/auth';

const cn = classNames.bind(styles);

const SEARCH_LABEL = '채널 검색';
const SEARCH_PLACEHOLDER = '채널명을 입력하세요.';

interface SearchProps {
  user: User;
}

export default function Search({ user }: SearchProps) {
  const [channels, setChannels] = useState<ChannelType[]>([]);
  if (!user) {
    return <div className={cn('container')}>로그인이 필요합니다.</div>;
  }

  return (
    <div className={cn('container')}>
      <SearchBar
        label={SEARCH_LABEL}
        placeholder={SEARCH_PLACEHOLDER}
        setChannels={setChannels}
      />
      <div className={cn('channel')}>
        <h2 className={cn('title')}>채널 목록</h2>
        <ul className={cn('list')}>
          {channels.length > 0 ? (
            channels.map((channel) => (
              <ChannelCard
                key={channel.id.channelId}
                channelData={channel}
                user={user}
              />
            ))
          ) : (
            <p className={cn('pre-search')}>채널을 검색해주세요.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
