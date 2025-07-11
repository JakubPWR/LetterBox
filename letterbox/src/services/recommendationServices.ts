import { Injectable } from '@angular/core';
import { MovieModel } from '../models/movieModel';
import { MovieRepository } from '../repositories/movieRepository';
import axios, {AxiosResponse} from 'axios';
import {RecommendationRepository} from '../repositories/recommendationRepository';

@Injectable({ providedIn: 'root' })
export class RecommendationServices {
  constructor(private recommendationRepository: RecommendationRepository) {}

  async getRecommendationsByName(movieName:String, limit:number): Promise<MovieModel[]> {
    return this.recommendationRepository.getRecommendationsByName(movieName,limit);
  }
}
