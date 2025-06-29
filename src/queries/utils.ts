import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

export const apiRequest = async <T>(url: string, options: AxiosRequestConfig = {}): Promise<T> => {
  try {
    const response = await axios({
      url,
      ...options,
      baseURL: 'http://localhost:5172', // Ensure this is set in your .env file,
      validateStatus: (status) => status >= 200 && status < 500,
    });
    return response.data as T;
  } catch (error) {
    console.error('API request failed:', error);
    throw new Error('API request failed');
  }
};
