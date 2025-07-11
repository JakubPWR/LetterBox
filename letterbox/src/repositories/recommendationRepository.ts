import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';
import { MovieModel } from '../models/movieModel';

@Injectable({
  providedIn: 'root'
})
export class RecommendationRepository {
  private API_MOVIE_ADDRESS = 'http://localhost:8080/';

  async getRecommendationsByName(movieName:String, limit:number)
  {
    const API_ADDRESS = this.API_MOVIE_ADDRESS + 'recommend' + `/${movieName}`+`/${limit}`;
    const response: AxiosResponse = await axios.get(API_ADDRESS);
    const data = response.data;
    const movies: MovieModel[] = data.map((item: Partial<MovieModel>) => new MovieModel(item));
    return movies;
  }
}
