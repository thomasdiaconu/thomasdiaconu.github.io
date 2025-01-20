import { Injectable } from '@angular/core';
import { CONFIG_EN, CONFIG_FR } from '../config';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  config: any = {};

  public switchLanguage(l: string) {
    if (l === "fr") {
      this.config = CONFIG_FR;
    }
    if (l === "en") {
      this.config = CONFIG_EN;
    }
  }

}
