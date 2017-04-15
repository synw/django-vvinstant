# -*- coding: utf-8 -*-

from django import template
from django.conf import settings


SITE_SLUG =  getattr(settings, 'SITE_SLUG', 'site')
public_channel = SITE_SLUG+'_public'
PUBLIC_CHANNEL = getattr(settings, 'INSTANT_PUBLIC_CHANNEL', public_channel)
ENABLE_PUBLIC_CHANNEL = getattr(settings, 'INSTANT_ENABLE_PUBLIC_CHANNEL', True)
ENABLE_STAFF_CHANNEL = getattr(settings, 'INSTANT_ENABLE_STAFF_CHANNEL', False)
ENABLE_USERS_CHANNEL = getattr(settings, 'INSTANT_ENABLE_USERS_CHANNEL', False)
ENABLE_SUPERUSER_CHANNEL = getattr(settings, 'INSTANT_ENABLE_SUPERUSER_CHANNEL', False)
EXCLUDE = getattr(settings, 'VVINSTANT_EXCLUDE', [])

register = template.Library()

@register.simple_tag
def get_channels():
    channels = []
    if ENABLE_PUBLIC_CHANNEL is True:
        channels.append(PUBLIC_CHANNEL)
    if ENABLE_STAFF_CHANNEL is True:
        c = '$'+SITE_SLUG+'_staff'
        channels.append(c)
    if ENABLE_USERS_CHANNEL is True:
        c = '$'+SITE_SLUG+'_users'
        channels.append(c)
    if ENABLE_SUPERUSER_CHANNEL is True:
        c = '$'+SITE_SLUG+'_admin'
        channels.append(c)
    return channels

@register.simple_tag
def exlude_chans():
    return EXCLUDE
