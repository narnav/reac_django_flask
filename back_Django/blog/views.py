from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.decorators import api_view
# Create your views here.
from .mybagawagserrrrri import ProductSerializer
from .models import Product


def index(req):
    return JsonResponse('hello1111111', safe=False)


def about(req):
    return JsonResponse('about', safe=False)


@api_view(['GET'])
def getProducts(requ):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return JsonResponse(serializer.data, safe=False)
