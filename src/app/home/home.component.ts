import { Component } from '@angular/core';
import { CONFIG } from '../config';
import { LanguageService } from '../services/language.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  sidebar: any;
  introduction: any;

  constructor(public translationService: TranslationService) {
  }

}
