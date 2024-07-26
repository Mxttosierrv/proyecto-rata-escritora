from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


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
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('inicio')
        else:
            # Return an 'invalid login' error message.
            return render(request, 'registration/login.html', {'error': 'Invalid login credentials'})
    else:
        return render(request, 'registration/login.html')

def exit(request):
    logout(request)
    return redirect('inicio')
