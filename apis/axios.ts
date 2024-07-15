import { YOUTUBE_GET_BASE_URL } from '@/constants/url';
import axios from 'axios';

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_DATA_API_KEY;

export const channelSearchInstance = axios.create({
  baseURL: YOUTUBE_GET_BASE_URL.search,
  params: {
    part: 'snippet',
    type: 'channel',
    key: YOUTUBE_API_KEY,
    maxResults: 10,
  },
});
