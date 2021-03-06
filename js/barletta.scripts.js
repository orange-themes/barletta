jQuery(function($) {
  "use strict";

// hide #back-top first
$("#back-top").hide();

// fade in #back-top

$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('#back-top').fadeIn();
	} else {
		$('#back-top').fadeOut();
	}
});

// scroll body to 0px on click
$('#back-top a').on("click", function(){
	$('body,html').animate({
		scrollTop: 0
	}, 800);
	return false;
});

// slider
$('.mz-slider').bxSlider({
	pager: false,
	speed: 1000,
	slideMargin: 0,
	prevText: '<i class="fa fa-angle-left"></i>',
	nextText: '<i class="fa fa-angle-right"></i>',
	easing: 'ease-in-out'
});

});