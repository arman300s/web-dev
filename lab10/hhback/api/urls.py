from django.urls import path
from .views_cbv import (
    CompanyListView,
    CompanyRetrieveUpdateDestroyView,
    CompanyVacancyListView,
    VacancyListView,
    VacancyRetrieveUpdateDestroyView,
    TopTenVacanciesListView
)

urlpatterns = [
    path('companies/', CompanyListView.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyRetrieveUpdateDestroyView.as_view(), name='company-detail'),
    path('companies/<int:company_id>/vacancies/', CompanyVacancyListView.as_view(), name='company-vacancies'),

    path('vacancies/', VacancyListView.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', VacancyRetrieveUpdateDestroyView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', TopTenVacanciesListView.as_view(), name='top-ten-vacancies'),
]
