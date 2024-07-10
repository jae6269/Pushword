import { URL_LIST } from '@/constants/url';
import { create } from 'zustand';

export type URLKeyType = keyof typeof URL_LIST;

export interface StoreType {
  menu: URLKeyType;
  setMenu: (menu: URLKeyType) => void;
}

export const useMenuStore = create<StoreType>()((set) => ({
  menu: 'home',
  setMenu: (newMenu) => set(() => ({ menu: newMenu })),
}));
