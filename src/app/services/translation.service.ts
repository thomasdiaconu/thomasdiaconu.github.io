import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


interface Project {
  name: string;
  description: string;
  github: string;
  demo: string;
  doc: string;
}

interface Experience {
  jobTitle: string;
  company: string;
  companyLogo: string;
  date: string;
  description: string;
}

interface Education {
  title: string,
  school: string,
  years: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('en');  // Langue par défaut : 'fr'
  private translations: any = {};

  constructor(private http: HttpClient) {}

  // Obtenir la langue active
  get currentLanguage$(): Observable<string> {
    return this.currentLanguageSubject.asObservable();
  }

  // Charger les traductions depuis un fichier JSON
  loadTranslations(language: string): Observable<any> {
    return this.http.get(`/assets/i18n/${language}.json`);
  }

  // Obtenir la traduction d'une clé
  translate(key: string): string {
    return this.translations[key] || key;  // Retourne la clé si la traduction n'est pas trouvée
  }

  // Mettre à jour la langue active et charger les traductions
  setLanguage(language: string): void {
    this.currentLanguageSubject.next(language);  // Met à jour la langue active dans le BehaviorSubject
    this.loadTranslations(language).subscribe(data => {
      this.translations = data;
    });
    this.getProjects(language);
    this.getExperiences(language);
    this.getEducations(language);
  }

  public projects: Project[] = [];
  getProjects(language: string) {
    this.loadTranslations(language).subscribe(data => {
      this.projects = data.projects;
    });
  }

  public experiences: Experience[] = [];
  getExperiences(language: string) {
    this.loadTranslations(language).subscribe(data => {
      this.experiences = data.experiences;
    });
  }

  public education: Education[] = [];
  getEducations(language: string) {
    this.loadTranslations(language).subscribe(data => {
      this.education = data.education;
    });
  }

}
