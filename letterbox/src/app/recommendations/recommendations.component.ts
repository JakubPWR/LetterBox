import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {StateService} from '../../services/stateService';
import {NgForOf, NgIf} from '@angular/common';
import {MovieModel} from '../../models/movieModel';
import {MovieServices} from '../../services/movieServices';
import {RecommendationServices} from '../../services/recommendationServices';

@Component({
  selector: 'app-recommendations',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css'
})
export class RecommendationsComponent {
  constructor(private router:Router,public state:StateService,private movieServices:MovieServices,private recommendationServices: RecommendationServices) {}
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  @ViewChild('resultsList') resultsList!: ElementRef<HTMLUListElement>;
  searchedMovies = signal<MovieModel[]>([]);
  recommendedMovies = signal<MovieModel[]>([]);
  recommendDropdownVisible = signal(false);
  fixedMovieNumber = 10;
  chosenMovie = signal<MovieModel>(new MovieModel());
  goToDetails(id:number)
  {
    console.log("a");
    this.router.navigate([`/details/${id}`]);
  }

  async recommendMovies()
  {
    this.recommendedMovies.set(await this.recommendationServices.getRecommendationsByName(String(this.chosenMovie().seriesTitle),this.fixedMovieNumber));
  }

  renderResults(): void {
    if (!this.resultsList) return;

    const ul = this.resultsList.nativeElement;
    ul.innerHTML = '';

    this.searchedMovies().forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.seriesTitle || ''; // Ensure string type
      li.onclick = () => {
        this.chosenMovie.set(item);
        ul.innerHTML = '';
        this.searchInput.nativeElement.value = item.seriesTitle || ''; // Fix: fallback to empty string
      };
      ul.appendChild(li);
    });
  }


  goBack()
  {
    this.router.navigate([""]);
  }
  goToRecommendations()
  {
    this.router.navigate(["recommendations"]);
  }

  async onTextChange() {
    const movieName = this.searchInput.nativeElement.value;

    if (movieName.length < 3) {
      if(movieName.length == 0)
      {
        this.searchedMovies.set(await this.movieServices.getMovies(0));
      }
      this.resultsList.nativeElement.innerHTML = '';
      this.recommendDropdownVisible.set(false);
      this.searchedMovies.set(await this.movieServices.getMoviesByName(movieName,this.fixedMovieNumber));
      return;
    }
    else
    {
      this.recommendDropdownVisible.set(true);
      this.searchedMovies.set(await this.movieServices.getMoviesByName(movieName,this.fixedMovieNumber));
      this.renderResults();
      return;
    }
  }
}
