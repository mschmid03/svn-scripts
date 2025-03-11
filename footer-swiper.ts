import Swiper from "swiper";
import "swiper/css";
import {
    Autoplay,
    Controller,
    EffectCoverflow,
    EffectFade,
    FreeMode,
    Navigation,
    Virtual,
} from "swiper/modules";

const footerSwiper = new Swiper(".footer_swiper", {
    loop: true,
    direction: "horizontal",
    slidesPerView: 1,
    centeredSlides: true,
    createElements: true,
    wrapperClass: "footer_swiper-wrapper",
    slideClass: "footer_swiper-slide",
    navigation: true,
    speed: 500,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1440: {
            slidesPerView: 4.8,
        },
    },

    modules: [Navigation, Autoplay],
});

// Footer Swiper Overlay insert (sollte wegen defer sauber funktionieren)
const footerSwiperE = document.querySelector(".footer_swiper");
const footerOverlay = document.createElement("div");
footerOverlay.classList.add("footer_swiper_overlay");
footerSwiperE?.appendChild(footerOverlay);
