from django.contrib.auth.models import AbstractUser
from django.db import models


class Company(models.Model):
    company_name = models.CharField(max_length=28, blank=True)
# Create your models here.
class User(AbstractUser):
    track=models.ManyToManyField(Company,symmetrical=False,related_name='company')

# creating company model

