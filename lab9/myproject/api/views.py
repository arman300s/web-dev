from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
import json
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt


@method_decorator(csrf_exempt, name='dispatch')
class CompanyListView(View):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
    def post(self,request):
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@method_decorator(csrf_exempt, name='dispatch')
class CompanyDetailView(View):
    def get(self, request, pk):
        try:
            company = Company.objects.get(pk=pk)
        except Company.DoesNotExist:
            return JsonResponse({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            company = Company.objects.get(pk=pk)
        except Company.DoesNotExist:
            return JsonResponse({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)
        new_data = json.loads(request.body)
        serializer = CompanySerializer(instance = company, data = new_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_200_OK)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            company = Company.objects.get(pk=pk)
        except Company.DoesNotExist:
            return JsonResponse({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)
        company.delete()
        return JsonResponse({}, status=status.HTTP_200_OK)


@method_decorator(csrf_exempt, name='dispatch')
class CompanyVacancyListView(View):
    def get(self, request, company_id):
        company = Company.objects.get(pk=company_id)
        vacancies = Vacancy.objects.filter(company = company)
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)


@method_decorator(csrf_exempt, name='dispatch')
class VacancyListView(View):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
    def post(self,request):
        data = json.loads(request.body)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@method_decorator(csrf_exempt, name='dispatch')
class VacancyDetailView(View):
    def get(self, request, pk):
        try:
            vacancy = Vacancy.objects.get(pk=pk)
        except Vacancy.DoesNotExist:
            return JsonResponse({"error": "Vacancy not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            vacancy = Vacancy.objects.get(pk=pk)
        except Vacancy.DoesNotExist:
            return JsonResponse({"error": "Vacancy not found"}, status=status.HTTP_404_NOT_FOUND)
        new_vacancy = json.loads(request.body)
        serializer = CompanySerializer(instance = vacancy, data = new_vacancy)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_200_OK)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            vacancy = Vacancy.objects.get(pk=pk)
        except Vacancy.DoesNotExist:
            return JsonResponse({"error": "Vacancy not found"}, status=status.HTTP_404_NOT_FOUND)
        vacancy.delete()
        return JsonResponse({}, status=status.HTTP_200_OK)



@method_decorator(csrf_exempt, name='dispatch')
class TopVacanciesView(View):
    def get(self, request):
        vacancies = Vacancy.objects.order_by('salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)








