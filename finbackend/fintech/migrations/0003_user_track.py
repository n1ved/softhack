# Generated by Django 3.2.18 on 2023-10-08 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fintech', '0002_company'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='track',
            field=models.ManyToManyField(related_name='compamny', to='fintech.Company'),
        ),
    ]
