{% load i18n vvinstant_tags %}
{% if user.is_superuser %}
	toggleInstantForm: function(){
		if (this.instantForm === true) {
			this.instantForm = false;
			document.getElementById("instant").style.display = "none";
			document.getElementById("instant_open").style.display = "none";
			document.getElementById("instant_close").style.display = "block";
		} else {
			document.getElementById("instant").style.display = "block";
			document.getElementById("instant_open").style.display = "block";
			document.getElementById("instant_close").style.display = "none";
			this.instantForm = true;
		}
	},
	activateChannel: function(channel) {
		{% get_channels as channels %}
		{% for ch in channels %}
			var el = document.getElementById('{{ ch }}');
			if (el.classList.contains("label-success")) {
				el.classList.remove("label-success");
				el.classList.add("label-default");
			}
		{% endfor %}
		var chan = document.getElementById(channel);
		chan.classList.remove("label-default");
		chan.classList.add("label-success");
		if (this.activeChannel === "") {
			// init
			document.getElementById("submitMsg").classList.remove("disabled");
			this.getEventClasses();
		}
		this.activeChannel = channel;
		var msg = "{% trans 'Publish message in channel' %} "+channel;
		this.instantFormPlaceholder = msg;
	},
	getEventClasses: function() {
		var event_classes = this.ecs();
		for (i=0;i<event_classes.length;i++) {
			this.eventLabels.push( {"name":event_classes[i], "label":get_label(event_classes[i])} );
		}
	},
	activateEventClass: function(cl) {
		this.eventClass = cl;
		var event_classes = this.ecs();
		for (i=0;i<event_classes.length;i++) {
			var ec = document.getElementById(event_classes[i]);
			ec.style.opacity = "0.6";
			}
		if (cl === this.eventClass) {
			var ec = document.getElementById(cl);
			ec.style.opacity = "1";
		}
	},
{% endif %}
ecs: function() {
	return ['default', 'important', 'ok', 'info', 'debug', 'warning']
},
toggleMsgSidebar: function() {
	if ( this.sidebar === false ) {
		document.getElementById("instant-sidebar").style.display = "block";
		this.mainCol = {
			"col-xs-12": true,
			'col-sm-9': true,
			'col-sm-pull-3': true
		},
		this.sideCol = {
			"col-xs-12": true,
			'col-sm-3': true,
			'col-sm-push-9': true,
			"hidden": false
		}
		this.sidebar = true;
	} else {
		this.mainCol = {
			"col-xs-12": true,
			'col-sm-9': false,
			'col-sm-pull-3': false
		},
		this.sideCol = {
			"col-xs-12": true,
			'col-sm-3': false,
			'col-sm-push-9': false,
			"hidden": true
		}
		this.sidebar = false;
	}
},
formatMsg: function(msg) {
	var event_classes = this.ecs();
	var label = "";
	for (i=0;i<event_classes.length;i++) {
		if (msg.event_class !== "default") {
			if (event_classes[i] === msg.event_class) {
				label = get_label(event_classes[i]);
				break
			}
		}
	}
	var res = label;
	res = res+"&nbsp;"+msg.message;
	return res
},
delMsg: function(msg) {
	for (i=0;i<this.msgs.length;i++) {
		if (msg.uid == this.msgs[i].uid) {
			this.msgs.splice(0, 1);
			this.numMsgs--;
			break
		}
	}
	if (this.numMsgs === 0) {
		if (this.sidebar === true) {
			this.toggleMsgSidebar()
		}
	}
},
deleteAllMsgs: function() {
	this.msgs = [];
	this.numMsgs = 0;
	if (this.sidebar === true) {
		this.toggleMsgSidebar()
	}
},
closeWarningMsg: function() {
	$("#warning-msg").slideUp();
	this.warningMsg = "";
},
closeInfoMsg: function() {
	$("#info-msg").slideUp();
	this.infoMsg = "";
},

