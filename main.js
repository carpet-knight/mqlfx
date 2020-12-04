const root = $('html, body');

$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        const headerHeight = Number.parseInt($('.header').css('height'));

        let id = $(this).attr('href'),
            top = $(id).offset().top - headerHeight;
        
        root.animate({ scrollTop: top }, 800);
    });
});