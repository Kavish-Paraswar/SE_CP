import api from './client';

export const fetchNotifications = async () => {
  const { data } = await api.get('/notifications');
  return data;
};

export const markNotification = async (id) => {
  const { data } = await api.patch(`/notifications/${id}/read`);
  return data;
};
