import { ChannelType } from '@/types/types';
import styles from './ChannelCard.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface ChannelCardProps {
  channelData: ChannelType;
  isRegistered?: boolean;
}
export default function ChannelCard({
  channelData,
  isRegistered,
}: ChannelCardProps) {
  return (
    <li className={cn('container')}>
      <img
        src={channelData.snippet.thumbnails.default.url}
        alt="채널 썸네일 이미지"
        className={cn('thumbnail')}
      />

      <p>{channelData.snippet.channelTitle}</p>
    </li>
  );
}
