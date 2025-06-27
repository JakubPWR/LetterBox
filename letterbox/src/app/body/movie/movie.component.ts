import {Component, Input} from '@angular/core';
import {MovieModel} from '../../../models/movieModel';
import {Router} from '@angular/router';
import {Routes} from '@angular/router';

@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  constructor(private router:Router) {}
  @Input() movie!: MovieModel;
  goToDetails()
  {
    this.router.navigate(["/details"]);
  }
}
