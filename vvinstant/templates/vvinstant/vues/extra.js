{% load i18n %}
{% include "instant/event_class_format.js" %}
{% if user.is_superuser %}
function post_instant_msg() {
	url = "{% url 'instant-post-msg' %}";
	var empty = '<i class="fa fa-close" style="color:red"></i>&nbsp;{% trans "Please write a message" %}';
	var emptychan = '<i class="fa fa-close" style="color:red"></i>&nbsp;{% trans "Please select a channel" %}';
	if (app.msgToSend === "") {
		app.msgStatus = empty;
		$('#msg_status').delay(2500).fadeOut();
		return
	}
	if (app.activeChannel === "") {
		app.msgStatus = emptychan;
		$('#msg_status').delay(2500).fadeOut();
		return
	}
	app.msgStatus = '<i class="fa fa-spinner fa-spin" style="color:darkslateblue"></i>&nbsp;{% trans "Sending message" %}'; 
	var data = {"msg":app.msgToSend, "channel": app.activeChannel, "event_class": app.eventClass};
	var err = '<i class="fa fa-close" style="color:red"></i>&nbsp;{% trans "Error sending the message" %}';
	$.ajax({
	      type: 'POST',
	      contentType: "application/json; charset=utf-8",
	      url: url,
	      data: JSON.stringify(data),
	      success: function (response) {
	    	  if (response.ok == 1) {
	    		  app.msgStatus = '<i class="fa fa-check" style="color:green"></i>&nbsp;{% trans "Message sent" %}';
	    		  $('#msg').html();
	    	  } else {
	    		  app.msgStatus = err;
	    	  }
	    	  $('#msg_status').delay(2500).fadeOut();
	      },
	      error: function(xhr, textStatus, error) {
	      	console.log("Error:");
	          console.log(xhr.statusText);
			    console.log(textStatus);
			    console.log(error);
			    app.msgStatus = err;
	      }
	  })
}
$( document ).ready(function() {
	var frm = $('#instant_form');
	frm.submit(function (ev) {
		ev.preventDefault();
		ev.stopImmediatePropagation();
		post_instant_msg();
		$('#msg_status').show();
	  return false;
	});
});
{% endif %}
