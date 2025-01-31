import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'thomas-diaconu';

  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.setLanguage('en');
  }

  @HostListener('document:click', ['$event'])
  click(e: MouseEvent) {
    if ( (e.target as HTMLElement ).id !== "navbarExpanded" ) {
      document.getElementById("navbarToggleExternalContent")?.classList.remove("show");
    }
  }

}
