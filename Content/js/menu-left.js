;(function ($) {
	'use strict';

	var TAB = {

		wrapper: '.menu-left',

    init: function() {
      	var _this = this;
			_this.reFlow();

      	$(window).on('resize', function() {
	        	_this.reFlow();
	     	 });
		},

		reFlow: function() {
			var menu_wrapper = $(this.wrapper);

			var wrapper_height = $(window).innerHeight(),
				height_sum = 0;		

			menu_wrapper.find('>ul:not(:last-child)').each(function(){
				height_sum += $(this).outerHeight(true);		
			});
			
			// $(this).append( "<strong>Hello</strong>" );

			if ($(window).width() > 1600) {
				if (wrapper_height - height_sum - 122 > 0) {
		            $(".menu-log-out").css('margin-top', wrapper_height - height_sum - 124);
		            $(".menu-left").css('position', 'fixed');  
		        } else {
		            $(".menu-log-out").css('margin-top', 0); 
		            $(".menu-left").css('position', 'absolute'); 
		        }	            
	        } else {
	        	if (wrapper_height - height_sum - 102 > 0) {
		            $(".menu-log-out").css('margin-top', wrapper_height - height_sum - 104); 
		            $(".menu-left").css('position', 'fixed'); 
		        } else {
		            $(".menu-log-out").css('margin-top', 0); 
		            $(".menu-left").css('position', 'absolute'); 
		        }	
	        }
	        
		}
	};

	$(document).ready(function() {
    if($('.menu-left').length){
      TAB.init();
    }
	});


})(jQuery, this);
