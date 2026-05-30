import { isTokenValid } from "./auth";

export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  const token = localStorage.getItem('auth_token');
  if (!token) return false;
  return isTokenValid(token);
};

export const getAuthUser = () => {
  if (typeof window === 'undefined') return null;
  const name = localStorage.getItem('user_name');
  return name;
};
