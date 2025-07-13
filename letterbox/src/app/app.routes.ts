import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BodyComponent } from './body/body.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

export const routes: Routes = [
  { path: "", component: BodyComponent },
  {
    path: "details/:id",
    component: MovieDetailsComponent,
    data: { prerender: true } // tells Angular to prerender this route
  },
  { path: "recommendations", component: RecommendationsComponent }
];

// This function tells Angular what parameters to use for prerendering
export function getPrerenderParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
    // Add more movie IDs you want prerendered
  ];
}
