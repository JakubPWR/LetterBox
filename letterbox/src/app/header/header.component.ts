import {Component, EventEmitter, Input, Output} from '@angular/core';
import { MovieRepository } from '../../repositories/movieRepository';
import {MovieModel} from '../../models/movieModel';
import {SearchBarComponent} from './search-bar/search-bar.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    SearchBarComponent
  ]
})
export class HeaderComponent {
  constructor(private movieRepository: MovieRepository) {}
  @Output() showLeftEvent = new EventEmitter<boolean>();

  leftIsShown = false;
  @Output() changePageEvent = new EventEmitter<number>();
  pageNumber: number = 0;

  @Output() showSearchedMovies = new EventEmitter<MovieModel[]>;

  showLeft() {
    this.leftIsShown = !this.leftIsShown;
    this.showLeftEvent.emit(this.leftIsShown);
  }
  changePage(number : number)
  {
    if(this.pageNumber == 0 && number == -1)
    {
      return;
    }
    else
    {
      this.pageNumber += number;
      this.changePageEvent.emit(this.pageNumber);
    }
  }
}
