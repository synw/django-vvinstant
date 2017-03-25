{% load i18n %}
{% if user.is_superuser %}
	instantForm: false,
	activeChannel: "",
	instantFormPlaceholder: "{% trans 'Select a channel' %}",
	msgToSend:"",
{% endif %}
eventClass: "default",
eventLabels: new Array,
msgs: [],
numMsgs: 0,
msgStatus: "",
sidebar: false,
mainCol: {
	"col-xs-12": true,
	'col-sm-9': false,
	'col-sm-pull-3': false
},
sideCol: {
	"col-xs-12": true,
	'col-sm-3': false,
	'col-sm-push-9': false,
	"hidden": true
},
msgIconClass: {
	"fa": true,
	"fa-envelope-o": true,
	"fa-envelope": false
},
autoMsg: false,
warningMsg: "",
infoMsg: "",