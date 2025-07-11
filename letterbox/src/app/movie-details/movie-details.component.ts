// movie-details.component.ts
import { Component } from '@angular/core';
import { StateService } from '../../services/stateService';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {MovieServices} from '../../services/movieServices';
import {MovieModel} from '../../models/movieModel';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  templateUrl: './movie-details.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  constructor(private router:Router,private movieServices:MovieServices,public state: StateService,private route: ActivatedRoute) {}
  movie: Partial<MovieModel> = {};
  async ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = parseInt(idParam, 10);
      this.movie = await this.movieServices.getMovieById(id);
      console.log(this.movie.seriesTitle);
    }
  }
  goBack()
  {
    this.router.navigate([""]);
  }
  goToRecommendations()
  {
    this.router.navigate(["recommendations"]);
  }
}
