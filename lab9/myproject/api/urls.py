from django.urls import path
from .views import (
    CompanyListView, CompanyDetailView, CompanyVacancyListView,
    VacancyListView, VacancyDetailView, TopVacanciesView
)

urlpatterns = [
    path('companies/', CompanyListView.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetailView.as_view(), name='company-detail'),
    path('companies/<int:company_id>/vacancies/', CompanyVacancyListView.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyListView.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', TopVacanciesView.as_view(), name='top-ten-vacancies'),
]
