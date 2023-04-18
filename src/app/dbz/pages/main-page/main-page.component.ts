import { Component, inject } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(public dbzService: HeroService) {}
}
