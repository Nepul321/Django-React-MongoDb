from django.shortcuts import render


def Home(request):
    template = "home.html"
    context = {

    }

    return render(request, template, context)