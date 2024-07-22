import { Dispatch, SetStateAction, useState } from 'react';
import SearchIcon from '../Icon/SearchIcon';

import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';
import { searchChannels } from '@/apis/apis';
import { ChannelType } from '@/types/types';
import { toast } from 'react-toastify';

const cn = classNames.bind(styles);

interface SearchBarProps {
  label: string;
  placeholder: string;
  setChannels: Dispatch<SetStateAction<ChannelType[]>>;
}
export default function SearchBar({
  label,
  placeholder,
  setChannels,
}: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = async () => {
    if (!searchValue) {
      toast.warning('검색어를 입력해주세요!');
      return;
    }
    const data = await searchChannels(searchValue);
    if (data) {
      setChannels(data.items);
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
