// -- menu --
$('#burger').click(() => {
    if ($('#mobilemenu').attr('class').split(' ').length == 1) {
        $('#mobilemenu').addClass('navbar-mobilemenu-active')
    } else {
        $('#mobilemenu').removeClass('navbar-mobilemenu-active')
    }
})

// -- sliders --

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

$('#slider-guide').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    prevArrow: $('#guide-prev'),
    nextArrow: $('#guide-next'),
    variableWidth: true,
})

$('.pslider-slides, .merch-item-photo-slider-container').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: true,
    prevArrow: `<div class="pslider-control-left"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15.5" fill="#BABECA" fill-opacity="0.5" stroke="white"></circle>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8047 21.1968C15.6796 21.3221 15.5101 21.3926 15.3333 21.3926C15.1566 21.3926 14.987 21.3221 14.862 21.1968L10.1953 16.5152C10.0704 16.3898 10.0001 16.2197 10.0001 16.0424C10.0001 15.8651 10.0704 15.695 10.1953 15.5696L14.862 10.888C14.9877 10.7662 15.1561 10.6988 15.3309 10.7003C15.5057 10.7019 15.6729 10.7722 15.7965 10.8962C15.9202 11.0202 15.9903 11.1879 15.9918 11.3633C15.9933 11.5386 15.9261 11.7076 15.8047 11.8337L12.276 15.3736L21.3333 15.3736C21.5101 15.3736 21.6797 15.4441 21.8047 15.5695C21.9298 15.6949 22 15.865 22 16.0424C22 16.2198 21.9298 16.3899 21.8047 16.5153C21.6797 16.6407 21.5101 16.7112 21.3333 16.7112L12.276 16.7112L15.8047 20.2511C15.9296 20.3765 15.9999 20.5466 15.9999 20.7239C15.9999 20.9013 15.9296 21.0713 15.8047 21.1968Z" fill="white"></path>
  </svg></div>`,
    nextArrow: `<div class="pslider-control-right"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15.5" fill="#BABECA" fill-opacity="0.5" stroke="white"></circle>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1953 10.896C16.3204 10.7706 16.4899 10.7002 16.6667 10.7002C16.8434 10.7002 17.013 10.7706 17.138 10.896L21.8047 15.5775C21.9296 15.703 21.9999 15.873 21.9999 16.0504C21.9999 16.2277 21.9296 16.3978 21.8047 16.5232L17.138 21.2047C17.0123 21.3266 16.8439 21.394 16.6691 21.3924C16.4943 21.3909 16.3271 21.3206 16.2035 21.1966C16.0798 21.0726 16.0097 20.9048 16.0082 20.7295C16.0067 20.5541 16.0739 20.3852 16.1953 20.2591L19.724 16.7192L10.6667 16.7192C10.4899 16.7192 10.3203 16.6487 10.1953 16.5233C10.0702 16.3979 10 16.2277 10 16.0504C10 15.873 10.0702 15.7029 10.1953 15.5775C10.3203 15.452 10.4899 15.3816 10.6667 15.3816L19.724 15.3816L16.1953 11.8417C16.0704 11.7163 16.0001 11.5462 16.0001 11.3688C16.0001 11.1915 16.0704 11.0214 16.1953 10.896Z" fill="white"></path>
  </svg></div>`,
})

$('#slider-items').slick({
    slidesToScroll: 1,
    prevArrow: $('#items-prev'),
    nextArrow: $('#items-next'),
    variableWidth: false,


    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                variableWidth: true,
            },
        },
        {
            breakpoint: 480,
            settings: 'unslick'
        }
    ],
})

$('#slider-simprog').slick({
    slidesToScroll: 1,
    prevArrow: $('#simprog-prev'),
    nextArrow: $('#simprog-next'),
    variableWidth: true,
})


// -- datepicker
$('.k-datepicker').daterangepicker({
    locale: {
        format: 'DD.MM.YYYY',
        "applyLabel": "Ок",
        "cancelLabel": "Отмена",
        "fromLabel": "От",
        "toLabel": "До",
        "customRangeLabel": "Произвольный",
        "daysOfWeek": [
            "Вс",
            "Пн",
            "Вт",
            "Ср",
            "Чт",
            "Пт",
            "Сб"
        ],
        "monthNames": [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ],
        firstDay: 1
    }
});