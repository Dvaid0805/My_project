let burger = document.querySelector('.burger span');
let nav = document.querySelector('.nav');
let videoButton = document.querySelector('.team__btn');
let videoMedia = document.querySelector('.team-video__media')

function slowScroll(id) {
    let offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 500);
}

function playPauseVideo() {
    if(videoMedia.paused) {
        videoMedia.play()
    } else {
        videoMedia.pause()
    }
}
function changeBurger() {
    burger.classList.toggle('active');
}
function navScrollAnimate() {
    return nav.classList.toggle('nav__animate');
}

document.querySelector('.burger').addEventListener('click', function() {
    changeBurger();
    navScrollAnimate();
});
videoButton.addEventListener('click', () => {
    return playPauseVideo()

})
window.onscroll = () => {
    const menu = document.querySelector('.menu');
    const Y = window.scrollY;
    if(Y > 50) {
        menu.classList.add('menu__fixed');
    } else if(Y < 50){
        menu.classList.remove('menu__fixed')
    } if(burger.classList.contains('active') === true) {
        burger.classList.remove('active')
    } if(nav.classList.contains('nav__animate') === true) {
        nav.classList.remove('nav__animate')
    }
};

$(function() {

    $('.home-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:'<button type="button" class="slick-arrow slick-next"><i class="fas fa-chevron-right"></i></button>',
        prevArrow:'<button type="button" class="slick-arrow slick-prev"><i class="fas fa-chevron-left"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false
                }
            },

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.quotes-block__slider').slick({
        dots: true,
        arrows : false,
        slidesToShow: 1,
        slidesToScroll: 1,

    });
})







