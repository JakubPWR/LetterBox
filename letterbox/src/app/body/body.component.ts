import {Component, Input, signal} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  imports: [CommonModule]
})
export class BodyComponent {
  @Input() leftIsShown = false;
}
