$(document).ready(function () {
    $('#button1').mouseenter(function () {
        $(this).removeClass('makeRed').addClass('makeBorder');
        $(this).mouseleave(function () {
            $(this).removeClass('makeBorder').addClass('makeRed');
        });
    });
    $('#button1').on('click', function () {
        $('#para1').slideToggle();
    });

    $('#button2').on('click', function () {
        $('#para2').fadeToggle();
    })
});