"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swiper_1 = __importDefault(require("swiper"));
require("swiper/css");
const modules_1 = require("swiper/modules");
const imgSwiperNodes = document.querySelectorAll(".team-image-swiper_container");
const imgSwipers = [];
imgSwiperNodes.forEach((node) => {
    imgSwipers.push(new swiper_1.default(node, {
        effect: "slide",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 1,
        modules: [modules_1.Navigation, modules_1.Autoplay],
        navigation: {
            enabled: true,
            nextEl: ".team-image-swiper_next",
            prevEl: ".team-image-swiper_prev",
        },
    }));
});
// // Home Swipers
// if (document.querySelector("#image-swiper-1")) {
//     const imageSwiper1 = new Swiper("#image-swiper-1", {
//         effect: "slide",
//         grabCursor: true,
//         centeredSlides: true,
//         loop: true,
//         slidesPerView: 1,
//         modules: [Navigation, Autoplay],
//         navigation: {
//             enabled: true,
//             nextEl: ".team-image-swiper_next",
//             prevEl: ".team-image-swiper_prev",
//         },
//     });
// }
// if (document.querySelector("#image-swiper-2")) {
//     const imageSwiper2 = new Swiper("#image-swiper-2", {
//         effect: "slide",
//         grabCursor: true,
//         centeredSlides: true,
//         loop: true,
//         slidesPerView: 1,
//         modules: [Navigation, Autoplay],
//         navigation: {
//             enabled: true,
//             nextEl: ".team-image-swiper_next",
//             prevEl: ".team-image-swiper_prev",
//         },
//     });
// }
// if (document.querySelector("#image-swiper-3")) {
//     const imageSwiper3 = new Swiper("#image-swiper-3", {
//         effect: "slide",
//         grabCursor: true,
//         centeredSlides: true,
//         loop: true,
//         slidesPerView: 1,
//         modules: [Navigation, Autoplay],
//         navigation: {
//             enabled: true,
//             nextEl: ".team-image-swiper_next",
//             prevEl: ".team-image-swiper_prev",
//         },
//     });
// }
// if (document.querySelector("#image-swiper-4")) {
//     const imageSwiper4 = new Swiper("#image-swiper-4", {
//         effect: "slide",
//         grabCursor: true,
//         centeredSlides: true,
//         loop: true,
//         slidesPerView: 1,
//         modules: [Navigation, Autoplay],
//         navigation: {
//             enabled: true,
//             nextEl: ".team-image-swiper_next",
//             prevEl: ".team-image-swiper_prev",
//         },
//     });
// }
// if (document.querySelector("#image-swiper-5")) {
//     const imageSwiper5 = new Swiper("#image-swiper-5", {
//         effect: "slide",
//         grabCursor: true,
//         centeredSlides: true,
//         loop: true,
//         slidesPerView: 1,
//         modules: [Navigation, Autoplay],
//         navigation: {
//             enabled: true,
//             nextEl: ".team-image-swiper_next",
//             prevEl: ".team-image-swiper_prev",
//         },
//     });
// }
// if (document.querySelector("#image-swiper-6")) {
//     const imageSwiper6 = new Swiper("#image-swiper-6", {
//         effect: "slide",
//         grabCursor: true,
//         centeredSlides: true,
//         loop: true,
//         slidesPerView: 1,
//         modules: [Navigation, Autoplay],
//         navigation: {
//             enabled: true,
//             nextEl: ".team-image-swiper_next",
//             prevEl: ".team-image-swiper_prev",
//         },
//     });
// }
// if (document.querySelector("#image-swiper-7")) {
//     const imageSwiper7 = new Swiper("#image-swiper-7", {
//         effect: "slide",
//         grabCursor: true,
//         centeredSlides: true,
//         loop: true,
//         slidesPerView: 1,
//         modules: [Navigation, Autoplay],
//         navigation: {
//             enabled: true,
//             nextEl: ".team-image-swiper_next",
//             prevEl: ".team-image-swiper_prev",
//         },
//     });
// }
// if (document.querySelector("#image-swiper-8")) {
//     const imageSwiper8 = new Swiper("#image-swiper-8", {
//         effect: "slide",
//         grabCursor: true,
//         centeredSlides: true,
//         loop: true,
//         slidesPerView: 1,
//         modules: [Navigation, Autoplay],
//         navigation: {
//             enabled: true,
//             nextEl: ".team-image-swiper_next",
//             prevEl: ".team-image-swiper_prev",
//         },
//     });
// }
// if (document.querySelector("#image-swiper-9")) {
//     const imageSwiper9 = new Swiper("#image-swiper-9", {
//         effect: "slide",
//         grabCursor: true,
//         centeredSlides: true,
//         loop: true,
//         slidesPerView: 1,
//         modules: [Navigation, Autoplay],
//         navigation: {
//             enabled: true,
//             nextEl: ".team-image-swiper_next",
//             prevEl: ".team-image-swiper_prev",
//         },
//     });
// }
// if (document.querySelector("#image-swiper-10")) {
//     const imageSwiper10 = new Swiper("#image-swiper-10", {
//         effect: "slide",
//         grabCursor: true,
//         centeredSlides: true,
//         loop: true,
//         slidesPerView: 1,
//         modules: [Navigation, Autoplay],
//         navigation: {
//             enabled: true,
//             nextEl: ".team-image-swiper_next",
//             prevEl: ".team-image-swiper_prev",
//         },
//     });
// }
