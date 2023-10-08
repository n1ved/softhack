from django.contrib.auth.models import AbstractUser
from django.db import models
class Company(models.Model):
    company_name = models.CharField(max_length=28, blank=True)

    def __str__(self):
        return self.company_name
# Create your models here.
class User(AbstractUser):
    track=models.ManyToManyField(Company,symmetrical=False,related_name='compamny')

# creating company model


    