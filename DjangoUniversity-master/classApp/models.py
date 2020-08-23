from django.db import models

class djangoClasses(models.Model):
    vars = "French"

    def __init__(self, course_number):
        self.course_number = int(course_number)

    def get_course_number(self):
        print(self.course_number)

    vars = "Prof Luke Matic"
    print(float("5"))
    objects = models.Manager()


    def __str__(self):
        return self.name

