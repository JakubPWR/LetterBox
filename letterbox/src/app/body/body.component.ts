import {Component, ElementRef, Input, signal, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieComponent} from './movie/movie.component';
import {MovieModel} from '../../models/movieModel';
import { StateService } from '../../services/stateService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  imports: [CommonModule, MovieComponent]
})
export class BodyComponent {
  constructor(private router:Router,public state:StateService) {}
  goToRecommendations()
  {
    this.router.navigate(["recommendations"]);
  }
}
