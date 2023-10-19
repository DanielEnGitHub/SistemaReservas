from django.urls import path

# views
from .views import user_api_view, user_detail_api_view

urlpatterns = [
    path('user/', user_api_view, name='user_list'),
    path('user/<int:pk>', user_detail_api_view, name='user_detail')
]