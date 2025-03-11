import {
  Autoplay,
  Navigation,
  Swiper
} from "./chunk-TMPE5RUM.js";

// team-image-swiper.ts
var imgSwiperNodes = document.querySelectorAll(
  ".team-image-swiper_container"
);
var imgSwipers = [];
imgSwiperNodes.forEach((node) => {
  imgSwipers.push(
    new Swiper(node, {
      effect: "slide",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 1,
      modules: [Navigation, Autoplay],
      navigation: {
        enabled: true,
        nextEl: ".team-image-swiper_next",
        prevEl: ".team-image-swiper_prev"
      }
    })
  );
});
//# sourceMappingURL=team-image-swiper.js.map
