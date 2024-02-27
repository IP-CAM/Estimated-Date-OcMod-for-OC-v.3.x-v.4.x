		'use strict';

		$(document).ready(function() {
			let id = 'div-estimated-' + String('{$div_id}');
			let selector = String('{$selector}');
			let insert = String('{$insert}');

			function getEstimatedDateMessage() {
				$.ajax({
					url: 'index.php?route=extension/module/estimated_date/getEstimatedDateMessage',
					type: 'post',
					dataType: 'json',
					success: function(json) {
						if (json.success) {
							let message = $('<div>');
							message.attr('id', id).html(json.message);

							let addMessage = function(message, selector, insert) {
								let e = $(selector);
								let tooltip = $('div#' + id + ' *[data-toggle="tooltip"]');

								tooltip.tooltip('hide');
								$('div#' + id).remove();

								if (insert == 'before') {
									e.before(message);
								} else if (insert == 'after') {
									e.after(message);
								} else if (insert == 'prepend') {
									e.prepend(message);
								} else if (insert == 'append') {
									e.append(message);
								}

								if (tooltip.length) tooltip.tooltip();
							}

							if ($(selector).length !== 0) {
								addMessage(message, selector, insert)
							} else {
								console.log('Selector "' + selector + '" not found, try to wait');

								setTimeout(function() {
									addMessage(message, selector, insert);
								}, 2000);
							}
						}
					}
				});
			}

			getEstimatedDateMessage();

			let refresh = Number('{$refresh}');

			if (refresh) {
				setInterval(getEstimatedDateMessage, refresh);
			}
		});
