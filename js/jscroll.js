/**  
		scroll to element function
	**/
		function scrollToElement(selector, time, verticalOffset) {
			time = typeof(time) != 'undefined' ? time : 500;
			verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
			element = $(selector);
			offset = element.offset();
			offsetTop = offset.top + verticalOffset;
			$('html, body').animate({
				scrollTop: offsetTop
			}, time);			
		}
		
	/**  
		document ready
	**/		
		$(document).ready(function() {
		
			/* scroll to #navigation */
				
				$('#s-home').click(function (e) {
					e.preventDefault();
					scrollToElement('#ui');
				});
				$('#s-about').click(function (e) {
					e.preventDefault();
					scrollToElement('#about');
				});
				$('#s-focus').click(function (e) {
					e.preventDefault();
					scrollToElement('#focus');
				});
		});