{% load i18n %}
function post_instant_msg() {
	url = "{% url 'instant-post-msg' %}";
	app.msgStatus = '<i class="fa fa-spinner fa-spin" style="color:darkslateblue"></i>&nbsp;{% trans "Sending message" %}'; 
	var data = {"msg":"", "channel": app.activeChannel, "event_class": app.eventClass};
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