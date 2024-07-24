import { useSuspenseQuery } from '@tanstack/react-query';
import useGetUser from './useGetUser';
import { getChannels } from '@/apis/apis';
import { CHANNEL_KEY } from '@/constants/queryKey';

export default function useGetChannels() {
  const user = useGetUser();

  const { data } = useSuspenseQuery({
    queryKey: user ? CHANNEL_KEY.list(user.uid) : [],
    queryFn: () => getChannels,
  });

  return { data };
}
