import axios, { AxiosResponse } from 'axios';
import { UnsplashPhoto } from '../App/App.types';

interface UnsplashResponse {
  results: UnsplashPhoto[];
  total_pages: number;
}

export const fetchUnsplash = async ({
  query,
  page,
  per_page = 12,
}: {
  query: string;
  page: number;
  per_page?: number | undefined;
}): Promise<AxiosResponse<UnsplashResponse>> => {
  const accessKey = '8_8sodKPxiolFkYrfqUjMUwizh86FyVeWy_c_fADcCw';
  axios.defaults.baseURL = 'https://api.unsplash.com';
  axios.defaults.headers.common['Authorization'] = `Client-ID ${accessKey}`;

  try {
    const response = await axios.get<UnsplashResponse>('/search/photos', {
      params: {
        asset_type: 'photo',
        orientation: 'landscape',
        query,
        page,
        per_page,
      },
      headers: {
        'Accept-Version': 'v1',
      },
    });

    return response;
  } catch (error) {
    console.error('Error fetching Unsplash data:', error);
    throw error;
  }
};
