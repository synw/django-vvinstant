# -*- coding: utf-8 -*-

from django.conf.urls import url
from vvinstant.views import PostMsgView, IndexView


urlpatterns = [
    url(r'^rest/$', PostMsgView.as_view(), name="instant-post-msg"),
    url(r'^$', IndexView.as_view(), name="instant-gui-index"),
    ]
