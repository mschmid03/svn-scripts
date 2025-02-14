import Swiper from "swiper";
import {
  Autoplay,
  Controller,
  EffectCoverflow,
  EffectFade,
  FreeMode,
  Navigation,
  Virtual,
} from "swiper/modules";
import "swiper/css";

// Home Swipers
const homeController = new Swiper(".home-controller", {
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
    nextEl: ".home-controller_button-next",
    prevEl: ".home-controller_button-prev",
  },
});

const homeControlled = new Swiper(".home-controlled", {
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
  modules: [EffectFade],
  fadeEffect: {
    crossFade: true,
  },
});
const homeBgTop = new Swiper(".hero-swiper_background-swiper.is-swiper", {
  slidesPerView: 1,
  effect: "fade",
  // enabled: false,
  centeredSlides: true,
  initialSlide: 0,
  speed: 500,
  allowTouchMove: false,
  navigation: false,
  wrapperClass: "hero-swiper_background-swiper-wrapper",
  modules: [EffectFade],
  fadeEffect: {
    crossFade: true,
  },
});

const homeBgBottom = new Swiper(".hero-swiper_bottom-image_swiper", {
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
  modules: [EffectFade],
  fadeEffect: {
    crossFade: true,
  },
});

const sponsorMarquee = new Swiper(".hero_swiper_sponsors-swiper", {
  slidesPerView: "auto",
  spaceBetween: 120,
  loop: true,
  speed: 18000,
  allowTouchMove: false,
  slideClass: "hero_swiper_sponsors-slide",
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
});

homeController.on("slideChangeTransitionStart", () => {
  console.log(homeController.realIndex);
  homeControlled.slideTo(homeController.realIndex);
  homeBgTop.slideTo(homeController.realIndex);
  homeBgBottom.slideTo(homeController.realIndex);
  console.log(homeControlled.realIndex);
});
