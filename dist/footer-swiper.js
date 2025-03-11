import {
  Autoplay,
  Navigation,
  Swiper
} from "./chunk-TMPE5RUM.js";

// footer-swiper.ts
var footerSwiper = new Swiper(".footer_swiper", {
  loop: true,
  direction: "horizontal",
  slidesPerView: 4.8,
  centeredSlides: true,
  createElements: true,
  wrapperClass: "footer_swiper-wrapper",
  slideClass: "footer_swiper-slide",
  navigation: true,
  speed: 500,
  autoplay: {
    delay: 5e3
  },
  modules: [Navigation, Autoplay]
});
var footerSwiperE = document.querySelector(".footer_swiper");
var footerOverlay = document.createElement("div");
footerOverlay.classList.add("footer_swiper_overlay");
footerSwiperE?.appendChild(footerOverlay);
//# sourceMappingURL=footer-swiper.js.map
