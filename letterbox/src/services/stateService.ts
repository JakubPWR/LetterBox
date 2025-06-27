import { Injectable, signal } from '@angular/core';
import { MovieModel } from '../models/movieModel';

@Injectable({ providedIn: 'root' })
export class StateService {
  leftIsShown = signal(false);
  footerVisible = signal(false);
  movies = signal<MovieModel[]>([]);
  pageNumber = signal(0);
}
