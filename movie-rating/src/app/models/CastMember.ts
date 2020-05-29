import {Movie} from './Movie';
import {AngularNeo4jService} from 'angular-neo4j';

export interface CastMember {
  personID: number;
  name: string;
  movies?: Array<{title: string, movieID: number}>;
}



