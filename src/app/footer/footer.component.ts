import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(public translationService: TranslationService) {
    
  }

  year: number = new Date().getFullYear();
  socialLinks = {
    github: 'https://github.com/thomasdiaconu',
    linkedin: 'https://www.linkedin.com/in/thomas-diaconu/',
    twitter: 'https://twitter.com/yourtwitter',
  };
  
}
