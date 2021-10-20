$(document).ready(()=>{
    $('.slider').slick({
    arrows:false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    });

    $('.menu').hover(()=>{
        
        $('.sub-menu-wrapper').toggle();
    });
});
