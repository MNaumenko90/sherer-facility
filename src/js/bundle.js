//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/foundation-sites/dist/js/foundation.js


/*
 * Custom js
 */
$( document ).ready(function() {
	$('.accordion .block-head').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('open');
		$(this).parent().find('.dropdown').toggleClass('opened');
	});
	//menu
	$('#mobile-menu').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('selected');
		$('.nav').toggleClass('active');
	});
	//faq
	$('.questions .item').on('click', function(event) {
		event.preventDefault();
		$(this).find('div').toggle();
		$(this).toggleClass('opened');
	});
	//
	// //checkbox
	// $('.styled-checkbox').on('click',  function(event) {
 //    event.preventDefault();
 //    $(this).toggleClass('checked');
 //    var input = $(this).find('input')
 //    if (input.attr('checked')) {
 //     input.removeAttr('checked')
 //    } else {
 //     input.attr('checked', 'checked')
 //    }
 //   });
});
 $(document).foundation();


