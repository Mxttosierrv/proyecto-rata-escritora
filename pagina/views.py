from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .forms import *


# Vistas generales
def index(request):
    return render(request, 'index.html', {'active_page': 'inicio'})

def historias(request):
    return render(request, 'historias.html', {'active_page': 'historias'})

def podcast(request):
    return render(request, 'podcast.html', {'active_page': 'podcast'})

def blog(request):
    return render(request, 'blog.html', {'active_page': 'blog'})

def sobre_mi(request):
    return render(request, 'sobre_mi.html', {'active_page': 'sobre-mi'})


# Inicio de sesión y registro de usuario
def user_login(request):
    return render(request, 'registration/login.html')

def user_register(request):
    data = {
        'form': CustomUserCreationForm() 
    }

    if request.method == 'POST':
        user_creation_form = CustomUserCreationForm(data=request.POST)

        if user_creation_form.is_valid():
            user_creation_form.save()

            user = authenticate(
                username=user_creation_form.cleaned_data['username'],
                password=user_creation_form.cleaned_data['password1']
            )
            login(request, user)
            
            return redirect('perfil_usuario')
        
    return render(request, 'registration/register.html', data)

def exit(request):
    logout(request)
    return redirect('inicio')

# Vistas de perfil de usuario
@login_required
def perfil_usuario(request):
    return render(request, 'user_profile/perfil_usuario.html')