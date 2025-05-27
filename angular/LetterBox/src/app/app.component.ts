import { Component } from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  imports: [HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LetterBox';
}
