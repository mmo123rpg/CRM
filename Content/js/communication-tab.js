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

		wrapper: '.communication-tab',

    init: function() {
      var _this = this;
			_this.reFlow();

      $(window).on('resize', function() {
        _this.reFlow();
      });
		},

		reFlow: function() {
			var tab_wrapper = $(this.wrapper);

			var wrapper_width = tab_wrapper.width(),
				dropdown_width = tab_wrapper.find("li.dropdown-communication").width(),
				width_sum = 0;

			tab_wrapper.find('>li:not(li.dropdown-communication)').each(function(){
				width_sum += $(this).outerWidth(true);
				if (width_sum + dropdown_width + 30 > wrapper_width)
					$(this).hide();
				else
					$(this).show();
			});

			var hidden_lists = tab_wrapper.find('>li:not(li.dropdown-communication):not(:visible)');

			if (hidden_lists.length > 0) {
				$("li.dropdown-communication").show();
			} else {
				$("li.dropdown-communication").hide();
			}

			tab_wrapper.find('ul.dropdown-communication-menu').html(hidden_lists.clone(true).show());
		}
	};

	$(document).ready(function() {
    if($('.communication-tab').length){
      TAB.init();
    }
	});


})(jQuery, this);
