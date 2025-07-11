import { Routes } from '@angular/router';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {BodyComponent} from './body/body.component';
import {RecommendationsComponent} from './recommendations/recommendations.component';

export const routes: Routes = [
  {path:"",component:BodyComponent},
  {path:"details/:id",component: MovieDetailsComponent},
  {path:"recommendations",component:RecommendationsComponent}
];
