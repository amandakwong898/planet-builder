from django.shortcuts import render
from .models import Planet


def index(request):
    planet_list = Planet.objects.all()
    context = {'planet_list': planet_list}
    return render(request, 'index.html', context=context)
