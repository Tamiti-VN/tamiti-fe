import axios from 'axios';

export const getCarousels = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3333/api/v1/carousels');
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch images', error);
    throw error;
  }
};
