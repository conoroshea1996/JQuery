$(document).ready(function () {

	$('h2').on('mouseover', function () {
		$('h2').addClass('blue-text');
	});
	$('h2').on('mouseover', function () {
		$(this).addClass('big');
	});
	$('.bottom_button').on('mouseover', function () {
		$('body').addClass('black');
	});
	$('.bottom_button').on('mouseout', function () {
		$('body').addClass('grey');
	});

	$('button:first').on('click', function () {
		$('.card_para:first').slideToggle('slow', 'linear');
	});
	$('button:first').mouseenter(function () {
		$(this).addClass('btn-fade');
		$(this).mouseleave(function () {
			$(this).removeClass('btn-fade');
		});
	})
});