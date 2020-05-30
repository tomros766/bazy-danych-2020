import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from '../models/Movie';
import {AngularNeo4jService} from 'angular-neo4j';

@Pipe({
  name: 'titleSearch'
})
export class TitleSearchPipe implements PipeTransform {
  constructor(private neo4j: AngularNeo4jService) {
  }

  transform(movies: Array<Movie>, key: string): Array<Movie> {
    if (!movies) {
      return [];
    }
    if (key === '') {
      return movies;
    }
    key = key.toLowerCase();
    return movies.filter(e => e.title.toLowerCase().includes(key));
  }

}
