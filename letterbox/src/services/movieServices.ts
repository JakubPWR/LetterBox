import axios, {AxiosResponse} from 'axios';
import {Injectable} from '@angular/core';
import {MovieModel} from '../models/movieModel';
@Injectable({providedIn:'root'})
export class MovieServices
{
  private API_MOVIE_ADDRESS = "http://localhost:8080/"
  async getMovies(pageNumber:number): Promise<MovieModel[]>
  {
    const API_ADDRESS = this.API_MOVIE_ADDRESS + "movies"+`/${pageNumber}`;
    const response : AxiosResponse = await axios.get(API_ADDRESS);
    const data = response.data;
    const movies: MovieModel[] = data.map((item: Partial<MovieModel>)=> new MovieModel(item));
    return movies;
  }
}
