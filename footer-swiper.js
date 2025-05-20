"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swiper_1 = __importDefault(require("swiper"));
require("swiper/css");
const modules_1 = require("swiper/modules");
const footerSwiper = new swiper_1.default(".footer_swiper", {
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
    modules: [modules_1.Navigation, modules_1.Autoplay],
});
// Footer Swiper Overlay insert (sollte wegen defer sauber funktionieren)
const footerSwiperE = document.querySelector(".footer_swiper");
const footerOverlay = document.createElement("div");
footerOverlay.classList.add("footer_swiper_overlay");
footerSwiperE === null || footerSwiperE === void 0 ? void 0 : footerSwiperE.appendChild(footerOverlay);
