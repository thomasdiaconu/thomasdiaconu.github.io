import { Component } from '@angular/core';
import { TranslationService } from '../app/services/translation.service';

@Component({
  selector: 'app-teaching',
  standalone: true,
  imports: [],
  templateUrl: './teaching.component.html',
  styleUrl: './teaching.component.scss'
})
export class TeachingComponent {

  constructor(public translationService: TranslationService) {

  }

}
