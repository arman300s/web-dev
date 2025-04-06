import { Component } from '@angular/core';
import { Vacancy } from '../../models/vacancy.models';
import { CommonModule } from '@angular/common';
import { VacancyService } from '../../services/vacancy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-vacancy-list',
  imports: [CommonModule],
  templateUrl: './company-vacancy-list.component.html',
  styleUrl: './company-vacancy-list.component.css'
})
export class CompanyVacancyListComponent {
  vacancies: Vacancy[] = [];

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    const companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.vacancyService.getCompanyVacancies(companyId).subscribe((data) => {
      this.vacancies = data;
    });
  }



}
