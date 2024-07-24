import { ChannelSearchType } from '@/types/types';
import { channelSearchInstance } from './axios';
import { collection, getDocs } from 'firebase/firestore';
import { fireStore } from '@/firebase/firebase';

export const searchChannels = async (
  searchValue: string
): Promise<ChannelSearchType | null> => {
  try {
    const response = await channelSearchInstance.get('', {
      params: {
        q: searchValue,
      },
    });
    return response.data;
  } catch (error) {
    console.error('채널 검색 에러', error);
    return null;
  }
};

export const getChannels = async (userId: string) => {
  const channelsRef = collection(fireStore, 'users', userId, 'channels');
  const channelsSnapshot = await getDocs(channelsRef);
  const channelsList = channelsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return channelsList;
};
