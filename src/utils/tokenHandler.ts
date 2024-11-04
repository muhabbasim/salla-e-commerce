// tokenService.ts
export const setToken = (token: string) => {
  localStorage.setItem('user_token', token);
};

export const getToken = (): string | null => {
  return localStorage.getItem('user_token')?.replace(/"/g, '')!;
};

export const removeToken = () => {
  localStorage.removeItem('user_token');
};
