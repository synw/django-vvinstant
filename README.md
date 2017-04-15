# Django VVinstant

Vue.js frontend for [Django Instant](https://github.com/synw/django-instant)

## Install

Get the dependencies: `pip install django-braces`

Install Django Instant. Clone

INSTALLED_APPS:

  ```python
 "braces",
 "vv",
 "vvinstant",
  ```

Add the urls:

  ```python
from instant.views import instant_auth

urlpatterns = [
	# ...
    url('^instant/', include('instant.urls')),
    url('^vvinstant/',include('vvinstant.urls')),
    url(r'^centrifuge/auth/$',instant_auth,name='instant-auth'),
]

urlpatterns.append(url(r'^',include('vv.urls')))
  ```
  
## Settings

To exlude some channels from the display:

  ```python
VVINSTANT_EXCLUDE = ["$chan1", "chan2"]
  ```

## Templates

Create a `instant/extra_handler.js` template with this content:

  ```django
{% include "vvinstant/handlers.js" %}
  ```
  
A default template is available at `vvinstant/base.html`: please refer to it on how to integrate the widgets in your
own base template

Go to `/vvinstant/` to see it in action

## Installer and demo

You can use the [Django Mogo](https://github.com/synw/django-mogo) installer script to get a demo or an install

## Todo

- [ ] Rethink default event classes
- [ ] Predefined behaviors on event classes

