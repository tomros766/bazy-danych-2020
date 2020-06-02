import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from '../models/Movie';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(movies , genre: string): any {
    if (!movies) {
      return [];
    }
    if (genre === '') {
      return movies;
    }

    return movies.filter(movie => {
      return movie.genres.map(g => g.toLowerCase()).includes(genre.toLowerCase());
    });
  }

}
