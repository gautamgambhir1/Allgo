# Generated by Django 3.2.5 on 2021-07-13 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('allgoscale', '0004_alter_contactform_fill_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactform',
            name='fill_time',
            field=models.DateField(auto_now_add=True),
        ),
    ]
