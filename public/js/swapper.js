$(function () {
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination"
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        loop: true,
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            756: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 25
            }
        }
    })
});
