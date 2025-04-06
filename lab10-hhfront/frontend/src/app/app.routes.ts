import { Routes } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { VacancyListComponent } from './components/vacancy-list/vacancy-list.component';
import { CompanyVacancyListComponent } from './components/company-vacancy-list/company-vacancy-list.component';

export const routes: Routes = [
  { path: '', component: CompanyListComponent },
  { path: 'vacancies', component: VacancyListComponent },
  { path: 'companies/:id/vacancies', component: CompanyVacancyListComponent }
];
