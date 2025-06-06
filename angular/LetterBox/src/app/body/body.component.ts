import { Component } from '@angular/core';
import {MovieComponent} from './movie/movie.component';

@Component({
  selector: 'app-body',
  imports: [
    MovieComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
