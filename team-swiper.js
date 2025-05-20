"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swiper_1 = __importDefault(require("swiper"));
require("swiper/css");
const modules_1 = require("swiper/modules");
// Home Swipers
const teamController = new swiper_1.default(".team-controller_swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    hashNavigation: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: -50,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    modules: [
        modules_1.Manipulation,
        modules_1.Navigation,
        modules_1.Autoplay,
        modules_1.EffectCoverflow,
        modules_1.HashNavigation,
    ],
    navigation: {
        enabled: true,
        nextEl: ".team-controller_button-next",
        prevEl: ".team-controller_button-prev",
    },
});
// multiply slides so loop works proper
const realSlides = teamController.slides;
const indexAttribute = "data-swiper-slide-index";
realSlides.sort((a, b) => {
    const indexA = parseInt(a.getAttribute(indexAttribute), 10);
    const indexB = parseInt(b.getAttribute(indexAttribute), 10);
    return indexA - indexB;
});
const slidesStrings = [];
realSlides.forEach((slide, i) => {
    const slideIndex = slide.getAttribute("data-swiper-slide-index");
    slide.setAttribute("controller-index", slideIndex);
    slidesStrings.push(slide.outerHTML);
});
console.log(slidesStrings);
teamController.removeAllSlides();
while (teamController.slides.length < 10) {
    teamController.appendSlide([...slidesStrings]);
}
const teamControlled = new swiper_1.default(".teams-swiper_container", {
    slidesPerView: 1,
    effect: "fade",
    // enabled: false,
    centeredSlides: true,
    hashNavigation: true,
    initialSlide: 0,
    speed: 0,
    allowTouchMove: false,
    navigation: false,
    modules: [modules_1.EffectFade, modules_1.HashNavigation],
    fadeEffect: {
        crossFade: true,
    },
});
teamController.on("slideChangeTransitionStart", () => {
    const index = teamController.activeIndex;
    const slides = teamController.slides;
    const activeSlide = slides[index];
    const controllerIndex = activeSlide.getAttribute("controller-index");
    console.log(controllerIndex);
    teamControlled.slideTo(Number(controllerIndex));
    console.log(teamControlled.realIndex);
});
