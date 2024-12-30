import axios from "axios";
import { axiosClient } from "./axiosInstance";

export const getProducts = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};

export const getProductDetail = async (productId: string) => {
  const res = await axiosClient.get(`/api/v1/products/${productId}`);
  return res.data;
};
