import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from '../models/Movie';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(movies: Array<Movie>, rate: number): Array<Movie> {
    if (!movies) {
      return [];
    }
    if (rate === 0) {
      return movies;
    }
    return movies.filter(movie => movie.voteAvg >= rate);
  }

}
