import { ChannelSearchType } from '@/types/types';
import { channelSearchInstance } from './axios';

export const handleSearchChannel = async (
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
