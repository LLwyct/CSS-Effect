(function() {
    const slideContainer = $(".slider-container")
    $(".slider-container").slick()
    $(".clash-card__image img").hide();
    $(".slick-active").find(".clash-card__image img").fadeIn(100);
    slideContainer.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(".slick-active").find(".clash-card__image img").fadeOut(50);
    });

    // On after slide change
    slideContainer.on('afterChange', function (event, slick, currentSlide) {
        $(".slick-active").find(".clash-card__image img").fadeIn(100);
    });
})()