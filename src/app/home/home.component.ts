import { Component } from '@angular/core';
import { CONFIG } from '../config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  sidebar = CONFIG.sidebar;
  introduction = CONFIG.introduction;

}
