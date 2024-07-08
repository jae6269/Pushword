import React from 'react';

interface ProfileProps {
  name: string;
  photoURL: string;
}

export default function Profile({ name, photoURL }: ProfileProps) {
  return <div>프로필</div>;
}
