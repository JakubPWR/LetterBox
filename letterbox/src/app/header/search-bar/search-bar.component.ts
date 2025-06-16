import {Component, ElementRef, ViewChild} from '@angular/core';
import axios from 'axios';
import {MovieModel} from '../../../models/movieModel';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  @ViewChild('resultsList') resultsList!: ElementRef<HTMLUListElement>;
  dropdownVisible:boolean = false;
  movieByNameURL:string = "http://localhost:8080/movie/name/";
  fixedMovieNumber = 10;

  // ngAfterViewInit() {
  //   this.searchInput.nativeElement.addEventListener('input', () => {
  //     const movieName = this.searchInput.nativeElement.value.trim();
  //
  //     if (movieName.length < 3) {
  //       this.resultsList.nativeElement.innerHTML = '';
  //       return;
  //     }
  //     else
  //     {
  //       this.fetchResults()
  //     }
  //   });
  // }

  // async fetchResults(movieName: string): Promise<MovieModel[]> {
  //   const response = axios.get(`${this.movieByNameURL}/${movieName}/${this.fixedMovieNumber}`);
  //   return;
  // }

  renderResults(results: { name: string }[]): void {
    const ul = this.resultsList.nativeElement;
    ul.innerHTML = '';

    results.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.name;
      li.onclick = () => {
        this.searchInput.nativeElement.value = item.name;
        ul.innerHTML = '';
      };
      ul.appendChild(li);
    });
  }


}
