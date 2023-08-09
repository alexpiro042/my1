$(function () {

    $('.auctions__slider').slick({
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
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
    })

})










