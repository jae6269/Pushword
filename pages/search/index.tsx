import { useState } from 'react';
import { ChannelType } from '@/types/types';
import SearchBar from '@/components/SearchBar';

import classNames from 'classnames/bind';
import styles from './SearchPage.module.scss';

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
    </div>
  );
}
