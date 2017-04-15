from django.conf import settings


EXCLUDE = getattr(settings, "VVINSTANT_EXCLUDE", [])
