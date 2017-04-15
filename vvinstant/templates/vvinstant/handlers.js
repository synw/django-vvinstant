{% load vvinstant_tags %}
exclude = [{% for c in exlude_chans %}"{{ c }}"{% if not forloop.last %},{% endif %}{% endfor %}];
for (i=0;i<exlude.length;i++) {
	if (event_class === exclude[i]) {
		return
	} 
}
app.msgIconClass["fa-envelope-o"] = false;
app.msgIconClass["fa-envelope"] = true;
setTimeout(function(){
	app.msgIconClass["fa-envelope-o"] = true;
	app.msgIconClass["fa-envelope"] = false;
},1200);
if ( event_class == 'important' ) {
	app.warningMsg = message;
	$("#warning-msg").slideDown();
} else if ( event_class == 'info' ) {
	app.infoMsg = message;
	$("#info-msg").slideDown();
	setTimeout(function() {$("#info-msg").slideUp()}, 5000);
} else {
	app.numMsgs++;
	app.msgs.unshift({"event_class": event_class, "message": message, "uid": uid});
	document.getElementById("instant_msgs").style.display = "inline-block";
	if (app.autoMsg === true ) {
		if (app.showSidebar === false) {
			app.toggleSidebar()
		}
	}
}