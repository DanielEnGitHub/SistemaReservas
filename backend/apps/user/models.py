from django.db import models

from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    passport_number = models.CharField(max_length=20, blank=True, null=True)
    nationality  = models.CharField(max_length=50, blank=True, null=True)
    date_of_birth  = models.DateTimeField(blank=True, null=True)

    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'

    def __str__(self):
        return f'{self.username}'