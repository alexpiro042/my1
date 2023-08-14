$(function () {

    $('.auctions__slider').slick({
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
        responsive:
            [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 2.5,
                        draggable:true,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        draggable: true,
                    },
                },
                {
                    breakpoint: 380,
                    settings: "unslick"
                },
            ]
    })

    $('.auctions__slide-prev').on('click', function (e) {
        e.preventDefault()
        $('.auctions__slider').slick('slickPrev')
    })
    $('.auctions__slide-next').on('click', function (e) {
        e.preventDefault()
        $('.auctions__slider').slick('slickNext')
    })

    $('.popular__slider').slick({
        arrows: false,
        slidesToShow: 2.99,
        infinite: true,
        draggable: true,
        waitForAnimate: false,
        responsive:
            [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 2.99,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2.99,
                    },
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2.10,
                        draggable: false,
                    },
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        draggable: true,
                    },
                },
                {
                    breakpoint: 380,
                    settings: "unslick"
                },
            ]
    })
    $('.popular__slide-prev').on('click', function (e) {
        e.preventDefault()
        $('.popular__slider').slick('slickPrev')
    })
    $('.popular__slide-next').on('click', function (e) {
        e.preventDefault()
        $('.popular__slider').slick('slickNext')
    })

    $('.explore__by-slider').slick({
        arrows: false,
        slidesToShow: 3.2,
        infinite: false,
        draggable: true,
        waitForAnimate: false,
        responsive:
            [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        draggable: true,
                    },
                },
                {
                    breakpoint: 380,
                    settings: "unslick"
                },
            ]
    })

    $('.burger').on('click', function (e) {
        e.preventDefault()
        $('.header__top-container').toggleClass('header__top--open')
    })
})










