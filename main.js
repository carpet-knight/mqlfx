$(document).ready(function () {
    const root = $('html, body');
    const headerHeight = Number.parseInt($('.header').css('height'));

    $('#menu').on('click', 'a', function (event) {
        const href = $(this).attr('href');

        if (href.startsWith('#')) {
            event.preventDefault();

            let top = $(href).offset().top - headerHeight;
            root.animate({ scrollTop: top }, 800);
        }
    });
});