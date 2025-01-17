import axios, { AxiosResponse } from 'axios';
import { Image } from './types';

interface ApiResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

const API_KEY: string = 'wqsV1ROHAZQYSH0FiTp0OTdsP1fBxY3a1U9XRcAb8xA';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const getImages = async (
  searchWord: string,
  currentPage: number
): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await axios.get(
    '/search/photos',
    {
      params: {
        client_id: API_KEY,
        query: searchWord,
        page: currentPage,
        per_page: 12,
      },
    }
  );

  return response.data;
};
