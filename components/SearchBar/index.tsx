import SearchIcon from '../Icoon/SearchIcon';

import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';
import { useState } from 'react';

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

  const handleSubmit = () => {
    if (!searchValue) {
      alert('검색어를 입력해주세요');
      return;
    }
    alert(searchValue);
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
