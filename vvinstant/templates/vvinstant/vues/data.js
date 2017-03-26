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
	'col-sm-8': false,
	'col-sm-pull-4': false
},
sideCol: {
	"col-xs-12": true,
	'col-sm-4': false,
	'col-sm-push-8': false,
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