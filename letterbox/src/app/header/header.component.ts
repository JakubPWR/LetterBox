import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() showLeftEvent = new EventEmitter<boolean>();

  leftIsShown = false;

  showLeft() {
    this.leftIsShown = !this.leftIsShown;
    this.showLeftEvent.emit(this.leftIsShown);
  }
}
