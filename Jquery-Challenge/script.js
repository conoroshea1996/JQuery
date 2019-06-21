$(document).ready(function () {
	$('.card_image').on('click', function () {
		let items = $(this).nextAll();
		let para = items[1];
		$(para).slideToggle();
	});

	$('.card').on('click', function () {
		$(this).toggleClass('card-highlight');
	});

	$('#selected').on('click', function () {
		$('.card:not(.card-highlight)').css('display', 'none');
	});
	$('#all').on('click', function () {
		$('.card').css('display', 'block');
	});
});