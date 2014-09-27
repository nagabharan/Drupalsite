jQuery(document).ready(function(){          
		  if (drupalchat_getCookie('DRUPALCHAT_NEWLOGIN') != 1) {
	          if(jQuery.drupalchatjStorage.get('username')!=null) {
	        	drupalchat.username = jQuery.drupalchatjStorage.get('username');
	          }
	          if(jQuery.drupalchatjStorage.get('uid')!=null) {
	        	drupalchat.uid = jQuery.drupalchatjStorage.get('uid');
	          }
	          if(jQuery.drupalchatjStorage.get('send_current_message')!=null) {
	        	drupalchat.send_current_message = jQuery.drupalchatjStorage.get('send_current_message');
	          }	
	          if(jQuery.drupalchatjStorage.get('last_timestamp')!=null) {
	        	drupalchat.last_timestamp = jQuery.drupalchatjStorage.get('last_timestamp');
	          }
	          if(jQuery.drupalchatjStorage.get('send_current_uid2')!=null) {
	        	drupalchat.send_current_uid2 = jQuery.drupalchatjStorage.get('send_current_uid2');
	          }
	          if(jQuery.drupalchatjStorage.get('attach_messages_in_queue')!=null) {
	        	drupalchat.attach_messages_in_queue = jQuery.drupalchatjStorage.get('attach_messages_in_queue');
	          }
	          if(jQuery.drupalchatjStorage.get('running')!=null) {
	        	drupalchat.running = jQuery.drupalchatjStorage.get('running');
	          }
	          if(jQuery.drupalchatjStorage.get('drupalchat')!=null) {
	        	if(jQuery.drupalchatjStorage.get('drupalchat').length > 4) {
	        		jQuery('#drupalchat').html(jQuery.drupalchatjStorage.get('drupalchat'));
					if(Drupal.settings.drupalchat.polling_method == '2') {
					  jQuery('#chatpanel .subpanel ul').empty();
					  jQuery('#chatpanel .online-count').html(jQuery('#chatpanel .subpanel ul > li').size());
					}
	        	}
	          }
			  if((drupalchat.send_current_uid2!=null) && (jQuery("#chatbox_" + drupalchat.send_current_uid2 + " .chatboxcontent").length>0)) {
				jQuery("#chatbox_" + drupalchat.send_current_uid2 + " .chatboxcontent").scrollTop(jQuery("#chatbox_" + drupalchat.send_current_uid2 + " .chatboxcontent")[0].scrollHeight);
			  }
	        }
	        else {
	          drupalchat_setCookie('DRUPALCHAT_NEWLOGIN', 2, 0);
	        }
			});
jQuery(window).unload(function() {
  jQuery('.chatbox .chatboxhead').removeClass("chatboxblink");
  jQuery.drupalchatjStorage.set('username', drupalchat.username);
  jQuery.drupalchatjStorage.set('uid', drupalchat.uid);
  jQuery.drupalchatjStorage.set('send_current_message', drupalchat.send_current_message);
  jQuery.drupalchatjStorage.set('last_timestamp', drupalchat.last_timestamp);
  jQuery.drupalchatjStorage.set('send_current_uid2', drupalchat.send_current_uid2);
  jQuery.drupalchatjStorage.set('attach_messages_in_queue', drupalchat.attach_messages_in_queue);
  jQuery.drupalchatjStorage.set('running', drupalchat.running);
  jQuery.drupalchatjStorage.set('drupalchat', jQuery('#drupalchat').html());

});
function drupalchat_getCookie(c_name) {
  var i, x, y, ARRcookies=document.cookie.split(";");
  for (i=0;i<ARRcookies.length;i++)
  {
    x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
    y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
    x=x.replace(/^\s+|\s+$/g,"");
    if (x==c_name)
    {
      return unescape(y);
    }
  }
}

function drupalchat_setCookie(c_name,value,exdays) {
  var exdate=new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie=c_name + "=" + c_value;
}