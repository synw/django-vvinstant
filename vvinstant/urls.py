# -*- coding: utf-8 -*-

from django.conf.urls import url
from vvinstant.views import PostMsgView


urlpatterns = [
    url(r'^rest/$', PostMsgView.as_view(), name="instant-post-msg"),
    ]
