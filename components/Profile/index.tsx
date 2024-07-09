import { User } from 'firebase/auth';
import React from 'react';

import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
const cn = classNames.bind(styles);

interface ProfileProps {
  user: User;
}

export default function Profile({ user }: ProfileProps) {
  const { displayName, photoURL } = user;
  return (
    <div className={cn('container')}>
      <img src={photoURL!} alt="프로필이미지" className={cn('profile-image')} />
      <h2 className={cn('name')}>{displayName}</h2>
    </div>
  );
}
