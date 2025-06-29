import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '../utils';

export const getUser = async (username: string) => {
  const response = apiRequest<{ username: string }>(`/users/${username}`, {
    method: 'GET',
  });

  return response;
};

export const useGetUser = (username: string) => {
  return useQuery({
    queryKey: ['user', username],
    queryFn: () => getUser(username),
    enabled: !!username, // Only run the query if username is provided
  });
};
