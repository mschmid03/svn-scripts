import Swiper from "swiper";
import { Autoplay, EffectCoverflow, EffectFade, Navigation } from "swiper/modules";

// Team-Auswahl (Coverflow) steuert die Team-Inhalte (Fade)
const teamController = new Swiper(".team-controller_swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: -50,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },

    modules: [Navigation, Autoplay, EffectCoverflow],

    navigation: {
        enabled: true,
        nextEl: ".team-controller_button-next",
        prevEl: ".team-controller_button-prev",
    },
});

const teamControlled = new Swiper(".teams-swiper_container", {
    slidesPerView: 1,
    effect: "fade",
    // enabled: false,
    centeredSlides: true,
    autoHeight: true,
    speed: 0,
    allowTouchMove: false,
    navigation: false,
    modules: [EffectFade],
    fadeEffect: {
        crossFade: true,
    },
});

teamController.on("slideChange", () => {
    const index = teamController.activeIndex;
    const slides = teamController.slides;
    const activeSlide = slides[index];
    const controllerIndex = activeSlide.getAttribute("controller-index");
    teamControlled.slideTo(Number(controllerIndex));
});
