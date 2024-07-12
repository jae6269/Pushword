export interface UserType {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

// 유튜브 채널 타입 -----------
export interface ChannelSearchType {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfoType;
  items: ChannelType[];
}

export interface PageInfoType {
  totalResults: number;
  resultsPerPage: number;
}

export interface ChannelType {
  kind: string;
  etag: string;
  id: ChannelIdType;
  snippet: ChannelSnippetType;
}

export interface ChannelIdType {
  kind: string;
  channelId: string;
}

export interface ChannelSnippetType {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ChannelThumbnailsType;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface ChannelThumbnailsType {
  default: ChannelDefaultImgType;
  medium: ChannelMediumImgType;
  high: ChannelHighImgType;
}

export interface ChannelDefaultImgType {
  url: string;
}

export interface ChannelMediumImgType {
  url: string;
}

export interface ChannelHighImgType {
  url: string;
}
