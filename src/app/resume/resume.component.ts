import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

  constructor(public translationService: TranslationService) {
    
  }

}
