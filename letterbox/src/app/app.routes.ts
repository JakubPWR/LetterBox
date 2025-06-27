import { Routes } from '@angular/router';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {BodyComponent} from './body/body.component';

export const routes: Routes = [
  {path:"",component:BodyComponent},
  {path:"details",component: MovieDetailsComponent}
];
