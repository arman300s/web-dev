from django.http import JsonResponse, Http404, HttpResponse
from django.shortcuts import render

from lab10.hhback.api.models import Company, Vacancy
from lab10.hhback.api.serializers import CompanySerializer, VacancySerializer


def companies(request):
    companies = Company.objects.all()
    companies_serializer = CompanySerializer(companies, many=True)
    return JsonResponse(companies_serializer.data, safe=False)

def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return HttpResponse(status=404)
    company_serializer = CompanySerializer(company)
    return JsonResponse(company_serializer.data, safe=False)

def companies_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = Vacancy.objects.filter(company=company)
        vacancies_serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(vacancies_serializer.data, safe=False)
    except Company.DoesNotExist:
        return HttpResponse(status=404)

def vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(vacancies_serializer.data, safe=False)

def vacancies_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        vacancy_serializer = VacancySerializer(vacancy)
        return JsonResponse(vacancy_serializer.data, safe=False)
    except Vacancy.DoesNotExist:
        return HttpResponse(status=404)

def top_ten(request):
    vacancies = Vacancy.objects.order_by()[:10]
    vacancies_serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(vacancies_serializer.data, safe=False)

