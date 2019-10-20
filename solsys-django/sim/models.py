from django.db import models
class Sun(models.Model):
    name = models.CharField(max_length=50)
    mass = models.DecimalField(blank=True,
                               decimal_places=4,
                               max_digits=50)

class Planet(models.Model):
    name = models.CharField(max_length=50)
    mass = models.DecimalField(blank=True,
                               decimal_places=4,
                               max_digits=50,)
    start_x = models.DecimalField(blank=True,
                                           decimal_places=4,
                                           max_digits=10,)
    start_y = models.DecimalField(blank=True,
                                           decimal_places=4,
                                           max_digits=10,)
    sun = models.ForeignKey(Sun,
                            blank=True,
                            null=True,
                            on_delete=models.SET_NULL,
                            related_name='of_sun')


class System(models.Model):
    name = models.CharField(max_length=50)
    sun = models.ForeignKey(Sun,
                            blank=True,
                            null=True,
                            on_delete=models.SET_NULL,
                            related_name='sun')
