$(document).ready(function () {
    // put your code here
    // $('.theButton').on('click', function () {
    //     $('.theButton').addClass('none');
    // });

    // $('.theButton').on('click', function () {
    //     $(this).addClass('none');
    // });

    $('.theButton').on('click', function () {
        $('.theButton').addClass('opacity');
    })

    $('.superButton').on('click', function () {
        $('.theButton').removeClass('opacity');
    })

    $('.theButton').mouseover(function () {
        $(this).addClass('black');
    }).mouseout(function () {
        $(this).removeClass('black');
    });;
});