import { Injectable } from '@angular/core';
import { MovieServices } from '../services/movieServices';
import {MovieModel} from '../models/movieModel';

@Injectable({
  providedIn: 'root'
})
export class MovieRepository {

  constructor(private movieServices: MovieServices) {}

  async getMovies(pageNumber:number): Promise<MovieModel[]> {
    const movies: MovieModel[] = await this.movieServices.getMovies(pageNumber);
    return movies;
  }
}
