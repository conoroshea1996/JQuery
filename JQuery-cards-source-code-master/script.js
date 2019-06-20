$(document).ready(function () {


	$("#stream1_btn").on("click", function () {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function () {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function () {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream3").addClass('highlight_stream');
	});


});

var imgs = $('img');
var cardImg = $('.card_image');
var footer = $('#my_footer');
var footerP = $('#my_footer p');
var headers = $(':header');
var firstElement = $(':first');
var lastDiv = $('div:last');
var lastImg = $('img:last');
var href = $('[href]');

var p = $('p');

p.text('hello world');

p.append('<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis in labore sed?</span>')

var links = $('a');

links.remove();

var cards = $('.card');

cards.empty();