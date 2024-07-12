import SearchIcon from '../Icoon/SearchIcon';

import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';
import { useState } from 'react';
import axios from 'axios';
import { YOUTUBE_GET_BASE_URL } from '@/constants/url';

const cn = classNames.bind(styles);

interface SearchBarProps {
  label: string;
  placeholder: string;
}
export default function SearchBar({ label, placeholder }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = async () => {
    if (!searchValue) {
      alert('검색어를 입력해주세요');
      return;
    }
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_DATA_API_KEY;
    try {
      const response = await axios.get(YOUTUBE_GET_BASE_URL.search, {
        params: {
          part: 'snippet',
          q: searchValue,
          type: 'channel',
          key: YOUTUBE_API_KEY,
          maxResults: 5,
        },
      });
      console.log(response.data);
    } catch (error) {
      alert('채널 검색 에러');
    }
  };
  return (
    <div className={cn('container')}>
      <label htmlFor="search">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        id="search"
        value={searchValue}
        maxLength={20}
        onChange={handleChangeInput}
      />
      <SearchIcon className={cn('search-icon')} />
      <button
        type="button"
        onClick={handleSubmit}
        className={cn('submit-button')}
      >
        검색
      </button>
    </div>
  );
}
