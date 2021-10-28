from django.db import models

class Meetup(models.Model):
    image_url = models.URLField()
    title = models.CharField(max_length=255)
    location = models.CharField(max_length=500)
    is_favorite = models.BooleanField(default=False)
    description = models.TextField()

    def __str__(self):
        return "Meetup " + str(self.id)

