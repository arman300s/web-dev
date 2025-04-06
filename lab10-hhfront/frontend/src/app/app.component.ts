import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CompanyListComponent} from './components/company-list/company-list.component';
import {VacancyListComponent} from './components/vacancy-list/vacancy-list.component';

@Component({
  selector: 'app-root',
  imports: [CompanyListComponent, RouterLink, VacancyListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
