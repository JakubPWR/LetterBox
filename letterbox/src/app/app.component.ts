import {Component, ElementRef, HostListener, signal, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import {MovieModel} from '../models/movieModel';
import {MovieRepository} from '../repositories/movieRepository';

@Component({
  selector: 'app-root',
  imports: [BodyComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private movieRepository: MovieRepository) {}
  leftIsShown = false;
  footerVisible = false;
  movies = signal<MovieModel[]>([]);

  onShowLeft(event: boolean) {
    this.leftIsShown = event;
  }

  @ViewChild('bodyContainer', { static: false, read: ElementRef }) bodyContainer!: ElementRef;

  async ngAfterViewInit(): Promise<void> {
    this.bodyContainer.nativeElement.addEventListener('scroll', this.onBodyScroll.bind(this));
    this.movies.set([...this.movies(),...await this.movieRepository.getMovies()]);
  }

  onBodyScroll(): void {
    const el = this.bodyContainer.nativeElement;
    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight;
    const offsetHeight = el.offsetHeight;

    this.footerVisible = scrollTop + offsetHeight >= scrollHeight - 10; // z tolerancją
  }

}
