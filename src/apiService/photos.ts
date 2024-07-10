import axios from 'axios';

import { ResProps } from '../apiService/photos.type';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchUnsplash = async (
  item: string,
  currentPage: number
): Promise<ResProps> => {
  const res = await axios.get<ResProps>('/search/photos', {
    params: {
      orientation: 'landscape',
      query: item,
      page: currentPage,
      per_page: 15,
      client_id: '8_8sodKPxiolFkYrfqUjMUwizh86FyVeWy_c_fADcCw',
    },
  });

  return res.data;
};
