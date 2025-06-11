import { Component, EventEmitter, Output } from '@angular/core';
import { MovieRepository } from '../../repositories/movieRepository';
import {MovieModel} from '../../models/movieModel';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private movieRepository: MovieRepository) {}
  @Output() showLeftEvent = new EventEmitter<boolean>();

  leftIsShown = false;

  showLeft() {
    this.leftIsShown = !this.leftIsShown;
    this.showLeftEvent.emit(this.leftIsShown);
  }
  async getMovies():Promise<MovieModel[]>
  {
    const movies = await this.movieRepository.getMovies();
    return movies;
  }
}
