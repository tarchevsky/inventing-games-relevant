import Swiper, { Scrollbar, Mousewheel } from "swiper";

const seminarsMob = new Swiper(".seminars-bream-mob.swiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    modules: [Scrollbar, Mousewheel],
    scrollbar: {
        el: ".seminars-bream-mob-scrollbar.swiper-scrollbar",
        // hide: true,
        draggable: true,
    },
    mousewheel: {
        invert: false,
    },
    breakpoints: {
        250: {
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    },
});