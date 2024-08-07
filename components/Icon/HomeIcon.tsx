import * as React from 'react';

export default function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M3 14h2v7a1 1 0 001 1h12a1 1 0 001-1v-7h2a.998.998 0 00.913-.593.998.998 0 00-.17-1.076l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 003 14zm5.653-2.359a2.224 2.224 0 013.125 0l.224.22.223-.22a2.225 2.225 0 013.126 0 2.13 2.13 0 010 3.07L12.002 18l-3.349-3.289a2.13 2.13 0 010-3.07z" />
    </svg>
  );
}
