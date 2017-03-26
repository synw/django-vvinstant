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

## Templates

Create a `instant/extra_handler.js` template with this content:

  ```django
{% include "vvinstant/handlers.js" %}
  ```
