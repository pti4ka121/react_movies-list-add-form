import { Movie } from '../types/Movie';

export const trimValues = (movie: Movie) => {
  const trimmedMovie: Movie = { ...movie };

  for (const key in movie) {
    const currentKey = key as keyof Movie;

    trimmedMovie[currentKey] = trimmedMovie[currentKey].trim();
  }

  return trimmedMovie;
};