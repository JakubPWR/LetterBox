import {Component, HostListener} from '@angular/core';
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

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    this.footerVisible = scrollTop + windowHeight >= docHeight/2;
    console.log("konieccc");
  }

  onShowLeft(event: boolean) {
    this.leftIsShown = event;
  }
}
