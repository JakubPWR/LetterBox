// app.component.ts
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { MovieServices } from '../services/movieServices';
import { StateService } from '../services/stateService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(
    private movieServices: MovieServices,
    public state: StateService
  ) {}

  @ViewChild('bodyContainer', { static: false, read: ElementRef })
  bodyContainer!: ElementRef;

  onShowLeft(event: boolean) {
    this.state.leftIsShown.set(event);
  }

  async onChangePage(event: number) {
    this.state.pageNumber.set(event);
    const movies = await this.movieServices.getMovies(event);
    this.state.movies.set(movies);
  }

  async ngAfterViewInit(): Promise<void> {
    this.bodyContainer.nativeElement.addEventListener('scroll', this.onBodyScroll.bind(this));
    const movies = await this.movieServices.getMovies(this.state.pageNumber());
    this.state.movies.set([
      ...movies
    ]);
  }

  onBodyScroll(): void {
    const el = this.bodyContainer.nativeElement;
    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight;
    const offsetHeight = el.offsetHeight;

    this.state.footerVisible.set(scrollTop + offsetHeight >= scrollHeight - 10);
  }

  onShowSearchedMovies($event: any) {
    this.state.movies.set($event);
  }
}
