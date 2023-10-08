from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    pass

# creating company model

class Company(models.Model):
    company_name = models.CharField(max_length=28, blank=True)

    def __str__(self):
        return self.company_name
    