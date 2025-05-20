import {
  Autoplay,
  Navigation,
  Swiper
} from "./chunk-TJMDIUQ2.js";

// footer-swiper.ts
var footerSwiper = new Swiper(".footer_swiper", {
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
    delay: 5e3
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    },
    1440: {
      slidesPerView: 4.8
    }
  },
  modules: [Navigation, Autoplay]
});
var footerSwiperE = document.querySelector(".footer_swiper");
var footerOverlay = document.createElement("div");
footerOverlay.classList.add("footer_swiper_overlay");
footerSwiperE?.appendChild(footerOverlay);
//# sourceMappingURL=footer-swiper.js.map
