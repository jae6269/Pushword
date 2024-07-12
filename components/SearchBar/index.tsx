import Image from 'next/image';

import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';
import { RiSearch2Line as SearchIcon } from 'react-icons/ri';

const cn = classNames.bind(styles);

interface SearchBarProps {
  label: string;
  placeholder: string;
}
export default function SearchBar({ label, placeholder }: SearchBarProps) {
  return (
    <div className={cn('container')}>
      <label htmlFor="search">{label}</label>
      <input type="text" placeholder={placeholder} id="search" />
    </div>
  );
}
