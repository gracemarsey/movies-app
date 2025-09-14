import { useMutation, useQuery } from '@tanstack/react-query';
import { apiRequest } from '../utils';

interface UserSuccessResponse {
  username: string;
}

interface UserErrorResponse {
  error: string;
}

export type UserResponse = UserSuccessResponse | UserErrorResponse;

export const getUser = async (username: string) => {
  const response = apiRequest<UserResponse>(`/users/${username}`, {
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

export const usePostUser = (onSuccess: (data: UserResponse) => void, onError: (error: Error) => void) => {
  const postUser = async (username: string) => getUser(username);
  return useMutation({
    mutationFn: postUser,
    onSuccess,
    onError,
  });
};
