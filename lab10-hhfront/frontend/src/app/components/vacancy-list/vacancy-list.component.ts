import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Vacancy} from '../../models/vacancy.models';
import {Company} from '../../models/company.model';
import {VacancyService} from '../../services/vacancy.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-vacancy-list',
  imports: [CommonModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];
  companies: Company[] = [];

  constructor(private vacancyService: VacancyService,
              private companyService: CompanyService) {}

  ngOnInit(): void {
    this.vacancyService.getVacancies().subscribe((vacancies) => {
      this.vacancies = vacancies;
    });

    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }

  getCompanyName(id: number): string {
    const company = this.companies.find(c => c.id === id);
    return company ? company.name : 'Unknown Company';
  }
}
