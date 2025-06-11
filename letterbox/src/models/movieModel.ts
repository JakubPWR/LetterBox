export class MovieModel
{
  id?: number;
  posterLink?: string;
  seriesTitle?: string;
  releasedYear?: number | null;
  certificate?: string;
  runtime?: string;
  genre?: string;
  imdbRating?: number | null;
  overview?: string;
  metaScore?: number | null;
  director?: string;
  star1?: string;
  star2?: string;
  star3?: string;
  star4?: string;
  noOfVotes?: number | null;
  gross?: number | null;

  constructor(init?: Partial<MovieModel>) {
    Object.assign(this, init);
  }
}
