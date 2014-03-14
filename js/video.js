jQuery(document).ready(function ($) {

	function isMobile() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return true;
		}
		else {
			return false;
		}
	}
	
	/* Video */
	
	$('#play-button').on('click', function(e) {
		
		var videoContainer = $('#video-container');
		
		videoContainer.prepend('<iframe width="560" height="315" src="http://www.youtube.com/embed/Tkgad9gngOQ?autoplay=1&controls=0&rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>');
		
		resizeToCover();
		
		videoContainer.css({'z-index':'9999','background':'#101010'}).fadeIn(300);
		
		
		$('#ui-mobile').hide();
		$('#video-controls').fadeIn(900);
		$('#center-control').fadeOut(700);
		$('#down-arrow-container').css('z-index','999');
		e.preventDefault();
	});
	
	function bringCanvas() {
		$('#video-controls').fadeOut(300);
		$('#video-container').fadeOut(400, function() {
			$(this).html('').css({'z-index':-9999,'display':'none','background':'transparent'});
		});
		
		var windowWidth = $(window).width();
		
		$('#down-arrow-container').css('z-index','99999');
		
		if (windowWidth > 690) {
			$('#ui-mobile').hide();
		}
		else {
			$('#ui-mobile').fadeIn(200);
		}
	}
	$('#close-video').on('click', function(e) {
		bringCanvas();
		$('#center-control').fadeIn(200);
	});
	
	jQuery(function() { // runs after DOM has loaded
		
		jQuery(window).resize(function () { resizeToCover(); });
		jQuery(window).trigger('resize');
		
		//window.addEventListener("orientationchange", function() {resizeToCover();}, false);
	});

	function resizeToCover() {
		
		// Window Height - Nav
		if ($('.menu').css('display')!='none') {
			var menuHeight = $('.menu').height();
		}
		else {
			var menuHeight = $('.menu-mobile').height();
		}
		
		var targetHeight = jQuery(window).height() - menuHeight;
		
		// set the video viewport to the window size
		jQuery('#video-container').width(jQuery(window).width());
		jQuery('#video-container').height(targetHeight);
		
		var videoContainer = $('#video-container');
		var videoEmbed = videoContainer.find('iframe');
		
		if (videoEmbed.exists()) {
			videoEmbed.width(videoContainer.width())
			videoEmbed.height(videoContainer.height());
		}
	}

});