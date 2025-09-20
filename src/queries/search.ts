import { useQuery } from '@tanstack/react-query';
import { apiRequest } from './utils';

interface SearchSuccessResponse {
  Title: string;
  Runtime: string;
  Poster: string;
  imdbRating: string;
  Year: string;
}

interface SearchErrorResponse {
  Response: string;
  Error: string;
}

export type SearchResponse = SearchSuccessResponse | SearchErrorResponse;

export const getMovie = async (movie: string) => {
  const response = apiRequest<SearchResponse>(`/search/${movie}`, {
    method: 'GET',
  });

  return response;
};

export const useMovie = (movie: string) => {
  return useQuery({
    queryKey: ['movie', movie],
    queryFn: () => getMovie(movie),
    enabled: !!movie, // Only run the query if username is provided
  });
};
