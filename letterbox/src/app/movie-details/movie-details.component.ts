// movie-details.component.ts
import { Component } from '@angular/core';
import { StateService } from '../../services/stateService';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  constructor(public state: StateService) {}

  ngOnInit() {
    const allMovies = this.state.movies();
    console.log('Loaded movies in details:', allMovies);
  }
}
