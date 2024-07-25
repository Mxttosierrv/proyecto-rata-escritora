from django.shortcuts import render

# Vistas generales
def index(request):
    return render(request, 'index.html')

def cuentos(request):
    return render(request, 'cuentos.html')

def podcast(request):
    return render(request, 'podcast.html')

def blog(request):
    return render(request, 'blog.html')

def sobre_mi(request):
    return render(request, 'sobre_mi.html')


# Inicio de sesión y registro de usuario
def login(request):
    return render(request, 'registration/login.html')
