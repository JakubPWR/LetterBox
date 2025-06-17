import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import axios from 'axios';
import {MovieModel} from '../../../models/movieModel';
import { MovieServices } from '../../../services/movieServices';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  constructor(private movieServices: MovieServices) {}
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  @ViewChild('resultsList') resultsList!: ElementRef<HTMLUListElement>;
  dropdownVisible = signal(false);
  fixedMovieNumber = 10;
  searchedMovies =signal<MovieModel[]>([]);

  // ngAfterViewInit() {
  //   this.searchInput.nativeElement.addEventListener('input', async () => {
  //     const movieName = this.searchInput.nativeElement.value;
  //
  //     if (movieName.length < 3) {
  //       this.resultsList.nativeElement.innerHTML = '';
  //       this.dropdownVisible = false;
  //       return;
  //     }
  //     else
  //     {
  //       this.dropdownVisible = true;
  //       this.searchedMovies.set(await this.movieServices.getMoviesByName(movieName,this.fixedMovieNumber));
  //       console.log(this.searchedMovies());
  //       return;
  //     }
  //   });
  // }
  async onTextChange()
  {
      const movieName = this.searchInput.nativeElement.value;

      if (movieName.length < 3) {
        this.resultsList.nativeElement.innerHTML = '';
        this.dropdownVisible.set(false);
        let a = this.dropdownVisible();
        let ab = this.dropdownVisible();
        return;
      }
      else
      {
        this.dropdownVisible.set(true);
        this.searchedMovies.set(await this.movieServices.getMoviesByName(movieName,this.fixedMovieNumber));
        console.log(this.searchedMovies());
        this.renderResults();
        return;
      }
  }

  renderResults(): void {
    const ul = this.resultsList.nativeElement;
    ul.innerHTML = '';

    this.searchedMovies().forEach(item => {
      const li = document.createElement('li');
      // @ts-ignore
      li.textContent = item.seriesTitle;
      // li.onclick = () => {
      //   this.searchInput.nativeElement.value = item.name;
      //   ul.innerHTML = '';
      // };
      ul.appendChild(li);
    });
  }


}
