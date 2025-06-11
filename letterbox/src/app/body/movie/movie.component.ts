import {Component, Input} from '@angular/core';
import {MovieModel} from '../../../models/movieModel';

@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  @Input() movie!: MovieModel;
}
