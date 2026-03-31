import api from './client';

export const fetchDoctors = async (params = {}) => {
  const { data } = await api.get('/doctors', { params });
  return data;
};
