import {Component, Input} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {LeftPanelComponent} from './left-panel/left-panel.component';
import {BodyComponent} from './body/body.component';
import {NgClass, NgIf} from '@angular/common';
import {signal} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    FooterComponent,
    HeaderComponent,
    LeftPanelComponent,
    BodyComponent,
    NgIf,
    NgClass
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isPanelVisible = signal(false);
  changePanelVisibility(value: boolean)
  {
    if (typeof value === "boolean") {
      this.isPanelVisible.set(value);
    }
  }
}
