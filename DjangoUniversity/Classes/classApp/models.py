from django.db import models

class djangoClasses (models.Model):
    Title=models.CharField(max_length=60)
    Course_Number = models.IntegerField(default="")
    Instructor_Name = models.CharField(max_length=60)
    Duration = models.FloatField(max_length=60)
# Create your models here.
Spanish=djangoClasses.objects.update_or_create(Title="Spanish",Course_Number=244,Instructor_Name="Gorje Gonzalez", Duration=90)
Physics=djangoClasses.objects.update_or_create(Title="Physics",Course_Number=362,Instructor_Name="Susie Tompson", Duration=90)
Calculus=djangoClasses.objects.update_or_create(Title="Calculus",Course_Number=455,Instructor_Name="Tim Lee", Duration=90)