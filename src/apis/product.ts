import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3333/api/v1/products');
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch products', error);
    throw error;
  }
};
