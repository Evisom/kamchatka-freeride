$('#burger').click(() => {
    if ($('#mobilemenu').attr('class').split(' ').length == 1) {
        $('#mobilemenu').addClass('navbar-mobilemenu-active')
    } else {
        $('#mobilemenu').removeClass('navbar-mobilemenu-active')
    }
})

$('#slider-movies').slick({
    infinite: true,
    slidesToScroll: 1,
    prevArrow: $('.slider-heading-controls-prev'),
    nextArrow: $('.slider-heading-controls-next'),
    variableWidth: true
})
