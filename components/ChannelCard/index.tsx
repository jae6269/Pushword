import { ChannelType } from '@/types/types';
import styles from './ChannelCard.module.scss';
import classNames from 'classnames/bind';
import { User } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { fireStore } from '@/firebase/firebase';

const cn = classNames.bind(styles);

interface ChannelCardProps {
  channelData: ChannelType;
  user: User;
}
export default function ChannelCard({ channelData, user }: ChannelCardProps) {
  const handleRegisterChannel = async () => {
    try {
      const channelRef = doc(
        collection(fireStore, 'users', user.uid, 'channels')
      );
      await setDoc(channelRef, channelData);
    } catch (error) {
      throw error;
    }
  };
  return (
    <li className={cn('container')} onClick={handleRegisterChannel}>
      <img
        src={channelData.snippet.thumbnails.default.url}
        alt="채널 썸네일 이미지"
        className={cn('thumbnail')}
      />

      <p>{channelData.snippet.channelTitle}</p>
    </li>
  );
}
