import { axiosClient } from './axiosInstance';

export const getProducts = async () => {
  const res = await axiosClient.get('/api/v1/products');
  return res.data;
};

export const getProductDetail = async (productId: string) => {
  const res = await axiosClient.get(`/api/v1/products/${productId}`);
  return res.data;
};
