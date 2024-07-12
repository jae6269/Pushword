export interface UserType {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

// 유튜브 채널 타입 -----------
export interface YoutubeChannelType {
  kind: string;
  etag: string;
  id: YoutubeChannelIdType;
  snippet: YoutubeChannelSnippetType;
}

export interface YoutubeChannelIdType {
  kind: string;
  channelId: string;
}

export interface YoutubeChannelSnippetType {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YoutubeChannelThumbnailsType;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface YoutubeChannelThumbnailsType {
  default: YoutubeChannelDefaultImgType;
  medium: YoutubeChannelMediumImgType;
  high: YoutubeChannelHighImgType;
}

export interface YoutubeChannelDefaultImgType {
  url: string;
}

export interface YoutubeChannelMediumImgType {
  url: string;
}

export interface YoutubeChannelHighImgType {
  url: string;
}
