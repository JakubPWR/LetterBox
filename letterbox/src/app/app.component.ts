import {Component, ElementRef, EventEmitter, HostListener, Input, Output, signal, ViewChild} from '@angular/core';
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
  @Input() pageNumber = signal(0);

  onShowLeft(event: boolean) {
    this.leftIsShown = event;
  }
  async onChangePage(event: number)
  {
    this.pageNumber.set(event);
    this.movies.set(await this.movieRepository.getMovies(this.pageNumber()));
  }

  @ViewChild('bodyContainer', { static: false, read: ElementRef }) bodyContainer!: ElementRef;

  async ngAfterViewInit(): Promise<void> {
    this.bodyContainer.nativeElement.addEventListener('scroll', this.onBodyScroll.bind(this));
    this.movies.set([...this.movies(),...await this.movieRepository.getMovies(this.pageNumber())]);
  }

  onBodyScroll(): void {
    const el = this.bodyContainer.nativeElement;
    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight;
    const offsetHeight = el.offsetHeight;

    this.footerVisible = scrollTop + offsetHeight >= scrollHeight - 10; // z tolerancją
  }

}
