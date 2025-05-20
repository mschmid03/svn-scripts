"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swiper_1 = __importDefault(require("swiper"));
require("swiper/css");
const modules_1 = require("swiper/modules");
// Home Swipers
const homeController = new swiper_1.default(".home-controller", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    // initialSlide: 0,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: -50,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    modules: [modules_1.Navigation, modules_1.Autoplay, modules_1.EffectCoverflow, modules_1.Manipulation],
    navigation: {
        enabled: true,
        nextEl: ".home-controller_button-next",
        prevEl: ".home-controller_button-prev",
    },
});
// multiply slides so loop works proper
const realSlides = homeController.slides;
const indexAttribute = "slider-position";
realSlides.sort((a, b) => {
    const indexA = parseInt(a.getAttribute(indexAttribute), 10);
    const indexB = parseInt(b.getAttribute(indexAttribute), 10);
    return indexA - indexB;
});
console.log(realSlides);
const slidesStrings = [];
realSlides.forEach((slide, i) => {
    slide.setAttribute("data-swiper-slide-index", i);
    const slideIndex = slide.getAttribute("data-swiper-slide-index");
    slide.setAttribute("controller-index", slideIndex);
    slidesStrings.push(slide.outerHTML);
});
// console.log(slidesStrings);
homeController.removeAllSlides();
while (homeController.slides.length < 10) {
    homeController.appendSlide([...slidesStrings]);
}
homeController.slideToLoop(0);
const homeControlled = new swiper_1.default(".home-controlled", {
    slidesPerView: 1,
    effect: "fade",
    // enabled: false,
    centeredSlides: true,
    initialSlide: 0,
    speed: 0,
    allowTouchMove: false,
    wrapperClass: "home-controlled_wrapper",
    slideClass: "home-controlled_swiper-slide",
    navigation: false,
    modules: [modules_1.EffectFade],
    fadeEffect: {
        crossFade: true,
    },
});
const homeBgTop = new swiper_1.default(".hero-swiper_background-swiper.is-swiper", {
    slidesPerView: 1,
    effect: "fade",
    // enabled: false,
    centeredSlides: true,
    initialSlide: 0,
    speed: 500,
    allowTouchMove: false,
    navigation: false,
    wrapperClass: "hero-swiper_background-swiper-wrapper",
    modules: [modules_1.EffectFade],
    fadeEffect: {
        crossFade: true,
    },
});
const homeBgBottom = new swiper_1.default(".hero-swiper_bottom-image_swiper", {
    slidesPerView: 1,
    effect: "fade",
    // enabled: false,
    centeredSlides: true,
    initialSlide: 0,
    speed: 500,
    allowTouchMove: false,
    navigation: false,
    wrapperClass: "hero-swiper_bottom-image_swiper-wrapper",
    slideClass: "hero-swiper_bottom-image_slide",
    modules: [modules_1.EffectFade],
    fadeEffect: {
        crossFade: true,
    },
});
document.addEventListener("DOMContentLoaded", () => {
    const sponsorMarquee = new swiper_1.default(".hero_swiper_sponsors-swiper", {
        slidesPerView: "auto",
        spaceBetween: 120,
        centeredSlides: true,
        loop: true,
        speed: 25000,
        allowTouchMove: false,
        slideClass: "hero_swiper_sponsors-slide",
        autoplay: {
            delay: 1.5,
            disableOnInteraction: false,
        },
        modules: [modules_1.Autoplay],
    });
});
homeController.on("slideChange", () => {
    const index = homeController.activeIndex;
    const slides = homeController.slides;
    const activeSlide = slides[index];
    const controllerIndex = activeSlide.getAttribute("controller-index");
    // console.log(controllerIndex);
    homeControlled.slideTo(Number(controllerIndex));
    homeBgTop.slideTo(Number(controllerIndex));
    homeBgBottom.slideTo(Number(controllerIndex));
    // console.log(homeControlled.realIndex);
});
