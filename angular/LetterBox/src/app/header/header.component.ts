import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private isPanelVisibleHeader = false;
  @Output() changeVisibilityHeader = new EventEmitter<boolean>();

  onChangeVisibilityHeader() {
    this.isPanelVisibleHeader = !this.isPanelVisibleHeader;
    this.changeVisibilityHeader.emit(this.isPanelVisibleHeader);
    console.log('stan jest taki '+ this.isPanelVisibleHeader );
  }
}
