jQuery(document).ready(function() {
	jQuery("input[name=drupalchat_polling_method]").change(function() {
	    jQuery('#edit-drupalchat-external-api-key').attr('disabled', 'disabled');
	    jQuery('.form-item-drupalchat-external-api-key').hide();
		if (jQuery("input[name=drupalchat_polling_method]:checked").val() == '0') {
	    	jQuery('#edit-drupalchat-refresh-rate').removeAttr('disabled');
	    	jQuery('#edit-drupalchat-send-rate').removeAttr('disabled');
	    	jQuery('#edit-drupalchat-refresh-rate-wrapper').fadeIn();
	    	jQuery('#edit-drupalchat-send-rate-wrapper').fadeIn();	    	
	    }
	    else if (jQuery("input[@name=drupalchat_polling_method]:checked").val() == '1') {
	    	jQuery('#edit-drupalchat-refresh-rate').attr('disabled', 'disabled');
	    	jQuery('#edit-drupalchat-send-rate').attr('disabled', 'disabled');
	    	jQuery('#edit-drupalchat-refresh-rate-wrapper').hide();
	    	jQuery('#edit-drupalchat-send-rate-wrapper').hide();
	    }
		else if(jQuery("input[@name=drupalchat_polling_method]:checked").val() == '3') {
		  jQuery('#edit-drupalchat-external-api-key').removeAttr('disabled');
	      jQuery('.form-item-drupalchat-external-api-key').fadeIn();
		}
	});

  jQuery("input[name=drupalchat_rel]").change(function() {
      if (jQuery("input[name=drupalchat_rel]:checked").val() == '1') {
        jQuery('#edit-drupalchat-ur-name').removeAttr('disabled');
		jQuery('#edit-drupalchat-ur-name').attr('required', 'true');
        jQuery('#edit-drupalchat-ur-name-wrapper').fadeIn();     
      }
      else {
        jQuery('#edit-drupalchat-ur-name').attr('disabled', 'disabled');
        jQuery('#edit-drupalchat-ur-name').removeAttr('required');
		jQuery('#edit-drupalchat-ur-name-wrapper').hide();
      }
  });	
	
	jQuery("input[name=drupalchat_polling_method]").change();
	jQuery("input[name=drupalchat_rel]").change();
});

