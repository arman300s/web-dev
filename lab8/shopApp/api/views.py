from django.shortcuts import render

from django.http import JsonResponse, HttpResponse

from .models import Product, Category


def products(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse(product.to_json(), safe=False)
    except Product.DoesNotExist:
        return HttpResponse(status=404)

def categories(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(category.to_json(), safe=False)
    except Category.DoesNotExist:
        return HttpResponse(status=404)

def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = Product.objects.filter(category=category)
        products_json = [p.to_json() for p in products]
        return JsonResponse(products_json, safe=False)
    except Category.DoesNotExist:
        return HttpResponse(status=404)

def index(request):
    return render(request, 'index.html')