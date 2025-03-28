import {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  Manipulation,
  Navigation,
  Swiper
} from "./chunk-Z5U7C2Z6.js";

// home-swiper.ts
var homeController = new Swiper(".home-controller", {
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
    slideShadows: false
  },
  modules: [Navigation, Autoplay, EffectCoverflow, Manipulation],
  navigation: {
    enabled: true,
    nextEl: ".home-controller_button-next",
    prevEl: ".home-controller_button-prev"
  }
});
var realSlides = homeController.slides;
var indexAttribute = "slider-position";
realSlides.sort((a, b) => {
  const indexA = parseInt(a.getAttribute(indexAttribute), 10);
  const indexB = parseInt(b.getAttribute(indexAttribute), 10);
  return indexA - indexB;
});
console.log(realSlides);
var slidesStrings = [];
realSlides.forEach((slide, i) => {
  slide.setAttribute("data-swiper-slide-index", i);
  const slideIndex = slide.getAttribute("data-swiper-slide-index");
  slide.setAttribute("controller-index", slideIndex);
  slidesStrings.push(slide.outerHTML);
});
homeController.removeAllSlides();
while (homeController.slides.length < 10) {
  homeController.appendSlide([...slidesStrings]);
}
homeController.slideToLoop(0);
var homeControlled = new Swiper(".home-controlled", {
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
    crossFade: true
  }
});
var homeBgTop = new Swiper(".hero-swiper_background-swiper.is-swiper", {
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
    crossFade: true
  }
});
var homeBgBottom = new Swiper(".hero-swiper_bottom-image_swiper", {
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
    crossFade: true
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const sponsorMarquee = new Swiper(".hero_swiper_sponsors-swiper", {
    slidesPerView: "auto",
    spaceBetween: 120,
    centeredSlides: true,
    loop: true,
    speed: 25e3,
    allowTouchMove: false,
    slideClass: "hero_swiper_sponsors-slide",
    autoplay: {
      delay: 1.5,
      disableOnInteraction: false
    },
    modules: [Autoplay]
  });
});
homeController.on("slideChange", () => {
  const index = homeController.activeIndex;
  const slides = homeController.slides;
  const activeSlide = slides[index];
  const controllerIndex = activeSlide.getAttribute("controller-index");
  homeControlled.slideTo(Number(controllerIndex));
  homeBgTop.slideTo(Number(controllerIndex));
  homeBgBottom.slideTo(Number(controllerIndex));
});
//# sourceMappingURL=home-swiper.js.map
