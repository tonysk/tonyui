function isMobile() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		return true;
	}
	else {
		return false;
	}
}

jQuery(document).ready(function ($) {
	
	// Brave Configurable
	var navOffset = fullNavOffset; // Sticky Navigation Height
	var fullNavOffset = 86;
	var mobileNavOffset = 0;
	var fullScreenImg = true; // First Slide Full Screen
	var fullScreenSlideId = '#ui';
	var logoScrollToTop = true;
	var mobileMenuWidth = 730;
	var carouselMouseActive = false;
	var preLoaded = false;
	
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	
	// Add mobile class
	if (isMobile()) {
		$('body').addClass('ismobile');
	}
	
	
    var linksNav = $('.navigation').find('li:not(.blog-link)');
	var links = $('.slide-link');
    destination = $('.destination'); // Determine next slide point (top-content)
	destinationUp = $('.destination-up'); // Determine previous slide point (mid-content)
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
	jQuery.fn.exists = function(){return this.length>0;}
	
	var navOffsetUp = navOffset * -1;
	
	function getStickyHeight() {
		var dittoMobile = $('.menu-mobile');
		var dittoMenu = $('.menu');
		if (isMobileMenu()) {
			var menuHeight = dittoMobile.height();
		}
		else {
			var menuHeight = dittoMenu.height();
		}
		return menuHeight;
	}
	
	function isMobileMenu() {
		var windowWidth = $(window).width();
		if (windowWidth < mobileMenuWidth) {
			var isMobileMenu = true;
		}
		else {
			var isMobileMenu = false;
		}
		return isMobileMenu;
	}
	


	
	// Full Size Image
	function resizeFold() {
		var windowHeight = $(window).height();
		stickyHeight = getStickyHeight();
		//alert(stickyHeight);
		
		newHeight = windowHeight - stickyHeight;
		if (newHeight < 350) {
			newHeight = 350;
			$('#down-arrow-container').fadeOut(300);
		}
		else {
			if (preLoaded) {
				$('#down-arrow-container').fadeIn(300);
			}
		}
		//var newPadding = '0 0 ' + stickyHeight + 'px 0';
		$(fullScreenSlideId).css({ height: newHeight });
		
		// Compatibility with sliding line (delay of slide 1 load)
		$('.navigation li').removeClass('active');
		//returnToActive();
	}
	if (fullScreenImg) {
		resizeFold();
	}
	else {
		$('#down-arrow-container').hide();
	}
	$( window ).resize(function() {
		if (fullScreenImg) {
			resizeFold();
		}
	});
	
	// Logo Function
	var logo = $('#logo');
	logo.click(function (e) {
		e.preventDefault();
		if (logoScrollToTop && (mywindow.scrollTop() > 1)) {
			htmlbody.animate({scrollTop: 0}, 900, 'easeInOutQuint');
		}
    });
	


});

function preload(arrayOfImages) {
	$(arrayOfImages).each(function(){
		$('<img/>')[0].src = this;
	});
}

preload([

]);

$(window).load(function() {
	$("#overlay").delay(200).fadeOut('600');
	$('#down-arrow-container').fadeIn(900).animate({bottom: "20%",}, 100, function() {});
	preLoaded = true;


	// Hide all the tooltips
	$("#social li").each(function() {
		$("a strong", this).css("opacity", "0");
	});
	
	$("#social li").hover(function() { // Mouse over
		$(this)
			.stop().fadeTo(500, 1)
			.siblings().stop().fadeTo(500, 0.2);
			
		$("a strong", this)
			.stop()
			.animate({
				opacity: 1,
				top: "-10px"
			}, 300);
		
	}, function() { // Mouse out
		$(this)
			.stop().fadeTo(500, 1)
			.siblings().stop().fadeTo(500, 1);
			
		$("a strong", this)
			.stop()
			.animate({
				opacity: 0,
				top: "-1px"
			}, 300);
	});

});
