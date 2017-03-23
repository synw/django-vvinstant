{% load i18n %}
{% if user.is_superuser %}
	instantForm: false,
	activeChannel: "",
	instantFormPlaceholder: "{% trans 'Select a channel' %}",
	eventClass: "default",
	eventLabels: new Array,
	msgs: [],
	numMsgs: 0,
	msgStatus: "",
{% endif %}
