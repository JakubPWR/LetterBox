import { Injectable } from '@angular/core';
import { MovieModel } from '../models/movieModel';
import { MovieRepository } from '../repositories/movieRepository';
import axios, {AxiosResponse} from 'axios';

@Injectable({ providedIn: 'root' })
export class MovieServices {
  constructor(private movieRepository: MovieRepository) {}

  async getMovies(pageNumber: number): Promise<MovieModel[]> {
    return this.movieRepository.getMovies(pageNumber);
  }
  async getMoviesByName(movieName:String, limit:number): Promise<MovieModel[]> {
    return this.movieRepository.getMoviesByName(movieName,limit);
  }
  async getMovieById(id:number): Promise<MovieModel>{
    return this.movieRepository.getMovieById(id);
  }
}
