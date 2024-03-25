import axiosClient from './axiosInstance';

export const getCarousels = async () => {
  const response = await axiosClient.get('/api/v1/carousels');
  return response.data;
};
