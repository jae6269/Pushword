import { useQuery } from '@tanstack/react-query';
import useGetUser from './useGetUser';
import { getChannels } from '@/apis/apis';
import { CHANNEL_KEY } from '@/constants/queryKey';
import { User } from 'firebase/auth';

export default function useGetChannels(user: User) {
  const { data } = useQuery({
    queryKey: CHANNEL_KEY.list(user.uid),
    queryFn: () => getChannels(user.uid),
  });

  return { data };
}
