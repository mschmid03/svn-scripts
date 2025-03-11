import {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  HashNavigation,
  Manipulation,
  Navigation,
  Swiper
} from "./chunk-TMPE5RUM.js";

// team-swiper.ts
var teamController = new Swiper(".team-controller_swiper", {
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
    slideShadows: false
  },
  modules: [
    Manipulation,
    Navigation,
    Autoplay,
    EffectCoverflow,
    HashNavigation
  ],
  navigation: {
    enabled: true,
    nextEl: ".team-controller_button-next",
    prevEl: ".team-controller_button-prev"
  }
});
var realSlides = teamController.slides;
var indexAttribute = "data-swiper-slide-index";
realSlides.sort(
  (a, b) => a.getAttribute(indexAttribute) > b.getAttribute(indexAttribute)
);
var slidesStrings = [];
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
var teamControlled = new Swiper(".teams-swiper_container", {
  slidesPerView: 1,
  effect: "fade",
  // enabled: false,
  centeredSlides: true,
  hashNavigation: true,
  initialSlide: 0,
  speed: 0,
  allowTouchMove: false,
  navigation: false,
  modules: [EffectFade, HashNavigation],
  fadeEffect: {
    crossFade: true
  }
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
//# sourceMappingURL=team-swiper.js.map
