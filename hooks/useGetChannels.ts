import { useQuery } from '@tanstack/react-query';
import useGetUser from './useGetUser';
import { getChannels } from '@/apis/apis';
import { CHANNEL_KEY } from '@/constants/queryKey';

export default function useGetChannels() {
  const user = useGetUser();

  const { data } = useQuery({
    queryKey: user ? CHANNEL_KEY.list(user.uid) : [],
    queryFn: () => getChannels(user!.uid),
  });

  return { data };
}
