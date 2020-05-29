import {Movie} from './Movie';

export interface Genre {
  genreID: number;
  name: string;
  movies?: Array<{string, number}>;
}
