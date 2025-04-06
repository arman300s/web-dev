import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy.models';

const API_URL = 'http://127.0.0.1:8000/api';


@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private http: HttpClient) {}

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${API_URL}/vacancies/`);
  }
  getCompanyVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${API_URL}/companies/${companyId}/vacancies/`);
  }

}
