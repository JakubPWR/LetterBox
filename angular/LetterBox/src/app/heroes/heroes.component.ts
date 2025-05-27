import { Component } from '@angular/core';
import { Hero } from '../hero';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HEROES} from '../mock-heroes';
import {
  /* . . . */
  NgFor,
  /* . . . */
} from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-heroes',
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  ],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
