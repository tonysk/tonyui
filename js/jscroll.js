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
				
				$('#s-top').click(function (e) {
					e.preventDefault();
					scrollToElement('#container', 500, -150);
				});
				$('#s-about').click(function (e) {
					e.preventDefault();
					scrollToElement('#about', 500, -150);
				});
				$('#s-focus').click(function (e) {
					e.preventDefault();
					scrollToElement('#focus', 500, -50);
				});
				$('#s-highlights').click(function (e) {
					e.preventDefault();
					scrollToElement('#highlights', 500, -150);
				});
				$('#s-contact').click(function (e) {
					e.preventDefault();
					scrollToElement('#contact', 500, -150);
				});
		});