import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {StateService} from '../../services/stateService';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-recommendations',
  imports: [
    NgIf
  ],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css'
})
export class RecommendationsComponent {
  constructor(private router:Router,public state:StateService) {}
  goBack()
  {
    this.router.navigate([""]);
  }
  goToRecommendations()
  {
    this.router.navigate(["recommendations"]);
  }
}
