import api, { setAuthToken } from './client';

export const loginApi = async (email, password) => {
  const { data } = await api.post('/auth/login', { email, password });
  setAuthToken(data.token);
  return data.user;
};

export const registerApi = async (payload) => {
  const { data } = await api.post('/auth/register', payload);
  setAuthToken(data.token);
  return data.user;
};

export const meApi = async () => {
  const token = localStorage.getItem('shr-token');
  if (token) setAuthToken(token);
  const { data } = await api.get('/auth/me');
  return data.user;
};
