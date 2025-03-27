import Swiper from "swiper";
import "swiper/css";
import {
    Autoplay,
    EffectCoverflow,
    EffectFade,
    Manipulation,
    Navigation,
} from "swiper/modules";

const internalSlider: any[][] = [];

// Select the node that will be observed for mutations
const targetNodes = document.querySelectorAll(
    ".team-uebersicht_internal_controller-container"
);
console.log(targetNodes);
// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

targetNodes.forEach((targetNode, i) => {
    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.addedNodes.length > 0) {
                const controllerSlideArray =
                    targetNode.querySelectorAll(".swiper-slide");
                console.log(controllerSlideArray);
                console.log(controllerSlideArray.length);
                if (!(controllerSlideArray.length <= 1)) {
                    internalSlider[i] = [];
                    const teamAttribute = targetNode.getAttribute("team");
                    if (teamAttribute !== null) {
                        // Later, you can stop observing
                        observer.disconnect();

                        internalSlider[i][0] = new Swiper(
                            `.team-uebersicht_internal_controller-container[team="${teamAttribute}"] .team-uebersicht_internal_controller`,
                            {
                                effect: "slide",
                                grabCursor: true,
                                centeredSlides: false,
                                spaceBetween: "18",
                                loop: true,
                                initialSlide: 0,
                                slidesPerView: "auto",

                                modules: [Navigation, Manipulation],

                                navigation: {
                                    enabled: true,
                                    nextEl: `.team-uebersicht_internal_controller-next[team="${teamAttribute}"]`,
                                    prevEl: `.team-uebersicht_internal_controller-prev[team="${teamAttribute}"]`,
                                },
                            }
                        );

                        const realSlides = internalSlider[i][0].slides;
                        const indexAttribute = "data-swiper-slide-index";
                        realSlides.sort(
                            (a, b) =>
                                a.getAttribute(indexAttribute) >
                                b.getAttribute(indexAttribute)
                        );
                        const slidesStrings = [];
                        realSlides.forEach((slide, i) => {
                            const slideIndex = slide.getAttribute(
                                "data-swiper-slide-index"
                            );
                            slide.setAttribute("controller-index", slideIndex);
                            slidesStrings.push(slide.outerHTML);
                        });
                        internalSlider[i][0].removeAllSlides();
                        while (internalSlider[i][0].slides.length < 10) {
                            internalSlider[i][0].appendSlide([
                                ...slidesStrings,
                            ]);
                        }
                        internalSlider[i][0].slideTo(0);

                        internalSlider[i][1] = new Swiper(
                            `.team-uebersicht_internal_controlled[team="${teamAttribute}"]`,
                            {
                                slidesPerView: 1,
                                effect: "fade",
                                // enabled: false,
                                centeredSlides: true,
                                initialSlide: 0,
                                speed: 0,
                                allowTouchMove: false,
                                navigation: false,
                                modules: [EffectFade],
                                fadeEffect: {
                                    crossFade: true,
                                },
                            }
                        );
                        internalSlider[i][0].on(
                            "slideChangeTransitionStart",
                            () => {
                                const index = internalSlider[i][0].activeIndex;
                                const slides = internalSlider[i][0].slides;
                                const activeSlide = slides[index];
                                const controllerIndex =
                                    activeSlide.getAttribute(
                                        "controller-index"
                                    );
                                console.log(controllerIndex);
                                internalSlider[i][1].slideTo(
                                    Number(controllerIndex)
                                );
                                console.log(internalSlider[i][1].activeIndex);
                            }
                        );
                    }
                } else {
                    targetNode.remove();
                }
            }
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    // // Later, you can stop observing
    // observer.disconnect();
});
