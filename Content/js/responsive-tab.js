/* =========================================================
 * responsive-tab.js
 * =========================================================
 * Copyright 2015 Rahul Singh
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

;(function ($) {
	'use strict';

	var TAB = {

    wrapper: '.bs-adaptive-tabs-3',

    init: function() {
        var _this = this;
        _this.reFlow();

        // $(window).on('resize', function() {
        //     _this.reFlow();
        // });

		var rtime;
		var timeout = false;
		var delta = 200;
		$(window).resize(function() {
		    rtime = new Date();
		    if (timeout === false) {
		        timeout = true;
		        setTimeout(resizeend, delta);
		    }
		   
		});

		function resizeend() {
		    if (new Date() - rtime < delta) {
		        setTimeout(resizeend, delta);
		    } else {
		        timeout = false;
		         _this.reFlow();
		    }               
		}
    },

    reFlow: function() {
        var tab_wrapper = $(this.wrapper);

        var wrapper_width = tab_wrapper.width(),
            dropdown_width = tab_wrapper.find("li.dropdown").width(),
            width_sum = 0;        

        tab_wrapper.find('>li:not(li.dropdown)').each(function() {
            width_sum += $(this).outerWidth(true);
            if (width_sum + dropdown_width + 150 > wrapper_width)
                $(this).hide();
            else
                $(this).show();
        });

        var hidden_lists = tab_wrapper.find('>li:not(li.dropdown):not(:visible)');

        if (hidden_lists.length > 0) {
            tab_wrapper.find("li.dropdown").show();
        } else {
            tab_wrapper.find("li.dropdown").hide();
        }

	        tab_wrapper.find('ul.dropdown-menu').html(hidden_lists.clone().show());
	    }
	};

$(document).ready(function() {
    if ($('.bs-adaptive-tabs-3').length) {
        TAB.init();
    }
});



})(jQuery, this);

