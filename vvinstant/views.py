# -*- coding: utf-8 -*-

import json
from django.views.generic.base import View
from django.http import JsonResponse
from django.views.generic import TemplateView
from django.conf import settings
from django.shortcuts import redirect
from instant.producers import publish


class PostMsgView(View):
    
    def post(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            #print("NOT SUPERUSER")
            return JsonResponse({"ok":0})
        #print("NOT SUPERUSER")
        
        data = json.loads(self.request.body.decode('utf-8'))
        msg = data["msg"]
        channel = data["channel"]
        event_class = data["event_class"]
        publish(message=msg, event_class=event_class, channel=channel)
        return JsonResponse({"ok":1})


class IndexView(TemplateView):
    template_name = "vvinstant/base.html"
