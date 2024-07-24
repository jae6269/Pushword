export const USER_KEY = {
  all: ['user'] as const,
  detail: () => [...USER_KEY.all, 'detail'] as const,
};

export const CHANNEL_KEY = {
  all: ['channels'] as const,
  list: (userId: string) => [...CHANNEL_KEY.all, 'list', userId] as const,
};
