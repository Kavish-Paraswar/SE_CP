import api from './client';

export const fetchRecords = async (params = {}) => {
  const { data } = await api.get('/records', { params });
  return data;
};
