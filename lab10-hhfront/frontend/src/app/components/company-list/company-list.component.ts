import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CompanyService} from '../../services/company.service';
import { Company } from '../../models/company.model';
import { Vacancy } from '../../models/vacancy.models';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-company-list',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedVacancies: Vacancy[] = [];
  constructor(private companyService: CompanyService) { }


  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data=>{
      console.log('Loaded companies:', data); // Add this
      this.companies = data;
    })
  }


}
