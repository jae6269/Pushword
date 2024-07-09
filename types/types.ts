import { URL_LIST } from '@/constants/url';
import { Dispatch, SetStateAction } from 'react';

export interface UserType {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export type URLKeyType = keyof typeof URL_LIST;

export interface MenuStateProp {
  menu: URLKeyType;
  setMenu: Dispatch<SetStateAction<URLKeyType>>;
}
