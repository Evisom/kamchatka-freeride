$('#burger').click(() => {
    if ($('#mobilemenu').attr('class').split(' ').length == 1) {
        $('#mobilemenu').addClass('navbar-mobilemenu-active')
    } else {
        $('#mobilemenu').removeClass('navbar-mobilemenu-active')
    }
})

$('#slider-movies').slick({
    slidesToScroll: 1,
    prevArrow: $('#movies-prev'),
    nextArrow: $('#movies-next'),
    variableWidth: true,
})

$('#slider-blog').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    prevArrow: $('#blog-prev'),
    nextArrow: $('#blog-next'),
    adaptiveHeight: false,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                variableWidth: true,
            },
        },
    ],
})

$('#slider-reviews').slick({
    slidesToScroll: 1,
    prevArrow: $('#reviews-prev'),
    nextArrow: $('#reviews-next'),
    variableWidth: true,
})

$('#slider-reviews-full').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    prevArrow: $('#reviews-prev'),
    nextArrow: $('#reviews-next'),

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                variableWidth: true,
            },
        },
    ],
})