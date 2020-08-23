from django.db import models

class DjangoClasses(models.Model):
   Title = models.CharField(max_length=100)
   Course_Number = models.PositiveIntegerField()
   Instructor_Name = models.CharField(max_length=50)
   Duration = models.FloatField()

   def __str__(self):
       return self.Title

Spanish = DjangoClasses.objects.update_or_create(Title="Spanish", Course_Number=244, Instructor_Name="Jorge Gonzalez", Duration=90)
Physics = DjangoClasses.objects.update_or_create(Title="Physics", Course_Number=362, Instructor_Name="Suzanne Thompson", Duration=90)
Calculus = DjangoClasses.objects.update_or_create(Title="Calculus", Course_Number=455, Instructor_Name="Tim Lee", Duration=90)
