# Generated by Django 3.2.9 on 2021-11-21 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exercise', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='exercise',
            name='photo_link',
            field=models.TextField(max_length=500, null=True),
        ),
    ]
