export const USER_KEY = {
  all: ['user'] as const,
  detail: () => [...USER_KEY.all, 'detail'] as const,
};
