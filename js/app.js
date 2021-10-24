$(document).ready(() => {

    // Slider
    $('.slider').slick({
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    });


    //Sub menu
    $('.menu').hover(() => {

        $('.sub-menu-wrapper').toggle();
    });

    // Tabs switcher
    $('.tab-section .tab-item-wrapper .tab-item a').on('click', function(e) {
        var currentAttrValue = $(this).attr('href');

        $('.tab-section ' + currentAttrValue).fadeIn(400).siblings().hide();

        $(this).parent('div').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
});