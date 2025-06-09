import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [BodyComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  leftIsShown = false;
  footerVisible = false;

  onShowLeft(event: boolean) {
    this.leftIsShown = event;
  }

  @ViewChild('bodyContainer', { static: false, read: ElementRef }) bodyContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.bodyContainer.nativeElement.addEventListener('scroll', this.onBodyScroll.bind(this));
  }

  onBodyScroll(): void {
    const el = this.bodyContainer.nativeElement;
    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight;
    const offsetHeight = el.offsetHeight;

    this.footerVisible = scrollTop + offsetHeight >= scrollHeight - 10; // z tolerancją
  }
}
