    $(document).ready(function () {
    	$(".stream-nav").on("click", function () {
    		var id = $(this).attr('id').split('_');
    		let idNum = id[0];
    		let Result = '.' + idNum;
    		console.log(Result)
    		$(Result).addClass('card-highlight');
    	});

    	$('.card_para').on('click', function () {
    		$(this).children('a').addClass('highlighter');

    	})
    });