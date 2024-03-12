let swiperCards = new Swiper('.card--content', {
    loop: true,
    spaceBetween:30,
    grabCursor:true,

    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        dynamicBullets:true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        600:{
            slidesPerView: 2,
        },
        969:{
            slidesPerView: 3,
        },
    },
})