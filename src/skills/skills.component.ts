import { Component } from '@angular/core';
import { TranslationService } from '../app/services/translation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  constructor(public translationService: TranslationService) {

  }

}
