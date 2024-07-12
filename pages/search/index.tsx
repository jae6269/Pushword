import { useState } from 'react';
import { ChannelType } from '@/types/types';
import SearchBar from '@/components/SearchBar';

import classNames from 'classnames/bind';
import styles from './SearchPage.module.scss';
import { channel } from 'diagnostics_channel';
import ChannelCard from '@/components/ChannelCard';

const cn = classNames.bind(styles);

const SEARCH_LABEL = '채널 검색';
const SEARCH_PLACEHOLDER = '채널명을 입력하세요.';

export default function Search() {
  const [channels, setChannels] = useState<ChannelType[]>([]);
  return (
    <div className={cn('container')}>
      <SearchBar
        label={SEARCH_LABEL}
        placeholder={SEARCH_PLACEHOLDER}
        setChannels={setChannels}
      />
      <div className={cn('channel-list')}>
        <h2>채널 목록</h2>
        {channels.length > 0 ? (
          channels.map((channel) => (
            <ChannelCard key={channel.id.channelId} channelData={channel} />
          ))
        ) : (
          <p>채널을 검색해주세요.</p>
        )}
      </div>
    </div>
  );
}
