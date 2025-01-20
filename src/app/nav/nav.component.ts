import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG, CONFIG_EN, CONFIG_FR } from '../config';
import { LanguageService } from '../services/language.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {


  constructor(private router: Router, 
              private languageService: LanguageService,
              public translationService: TranslationService) {

  }

  active = false;

  ngOnInit() {
    this.active = false;
  }

  onBurgerClicked() {
    this.active = !this.active;
  }

  goMenu() {
    this.router.navigateByUrl("");
  }

  changeLanguage(language: string): void {
    this.translationService.setLanguage(language);
  }

  navigate(submenu: string) {
    this.router.navigate([submenu]);
  }

}
