import {Genre} from './Genre';
import {CastMember} from './CastMember';

export interface Movie {
  budget: bigint;
  revenue: bigint;
  homepage: string;
  movieId: number;
  runtime: number;
  tagLine: string;
  title: string;
  voteCount: number;
  voteAvg: number;
  releaseDate: Date;
  genres: Array<Genre>;
  director: CastMember;
  writer: CastMember;
  actors: Array<CastMember>;
}
