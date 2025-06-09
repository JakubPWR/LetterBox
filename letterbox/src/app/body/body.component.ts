import {Component, ElementRef, Input, signal, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieComponent} from './movie/movie.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  imports: [CommonModule, MovieComponent]
})
export class BodyComponent {
  @Input() leftIsShown = false;
}
