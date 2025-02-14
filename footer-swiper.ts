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

const footerSwiper = new Swiper(".footer_swiper", {
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
    delay: 5000,
  },

  modules: [Navigation, Autoplay],
});

// Footer Swiper Overlay insert (sollte wegen defer sauber funktionieren)
const footerSwiperE = document.querySelector(".footer_swiper");
const footerOverlay = document.createElement("div");
footerOverlay.classList.add("footer_swiper_overlay");
footerSwiperE?.appendChild(footerOverlay);
