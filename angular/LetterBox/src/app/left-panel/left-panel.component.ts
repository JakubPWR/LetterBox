import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent {
}
