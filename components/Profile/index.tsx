import { User } from 'firebase/auth';
import React from 'react';

interface ProfileProps {
  user: User;
}

export default function Profile({ user }: ProfileProps) {
  return <div>프로필</div>;
}
