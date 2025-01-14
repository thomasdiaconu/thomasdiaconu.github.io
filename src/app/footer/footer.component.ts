import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  year: number = new Date().getFullYear();
  socialLinks = {
    github: 'https://github.com/yourgithub',
    linkedin: 'https://linkedin.com/in/yourlinkedin',
    twitter: 'https://twitter.com/yourtwitter',
  };
  
}
