// Einstiegspunkt für die ganze Site: wird einmal im Site Head eingebunden
// (<script type="module" src=".../dist/main.js">) und startet nur die Module,
// deren Elemente auf der aktuellen Seite vorkommen.
//
// Die Module werden bewusst statisch importiert und synchron gestartet: So laufen sie
// wie früher vor DOMContentLoaded, also bevor Webflow seine Slider/Tabs vermisst.
// Mit dynamischem import() startete der Home-Swiper erst danach, und der News-Slider
// auf Home wurde mit falscher Breite (ganze Swiper-Leiste statt einer Slide) vermessen.

// CSS landet gebündelt in dist/main.css (Swiper-Basis einmal plus eigene Anpassungen)
import "swiper/css";
import "./custom.scss";
import { initTabDeepLinks } from "./modules/tab-deeplink";
import * as footerSwiper from "./modules/footer-swiper";
import * as homeSwiper from "./modules/home-swiper";
import * as homeSponsor from "./modules/home-sponsor";
import * as timeline from "./modules/timeline";
import * as teamImageSwiper from "./modules/team-image-swiper";
import * as teamController from "./modules/team-controller";
import * as teamInternal from "./modules/team-internal";

type Feature = {
    selector: string;
    init: () => void;
    skip?: () => boolean;
};

const features: Feature[] = [
    { selector: ".footer_swiper", init: footerSwiper.init },
    { selector: ".home-controller", init: homeSwiper.init },
    { selector: ".hero_swiper_sponsors-logo-container", init: homeSponsor.init },
    { selector: "#timeline-track", init: timeline.init },
    {
        selector: ".team-image-swiper_container",
        init: teamImageSwiper.init,
        // Auf Leichtathletik war das Script bisher auskommentiert
        skip: () => location.pathname.startsWith("/abteilungen/leichtathletik"),
    },
    { selector: ".team-controller_swiper", init: teamController.init },
    { selector: ".team-uebersicht_internal_controller-container", init: teamInternal.init },
];

initTabDeepLinks();

for (const { selector, init, skip } of features) {
    if (!document.querySelector(selector) || skip?.()) continue;
    try {
        init();
    } catch (error) {
        console.error(`[svn-scripts] ${selector}`, error);
    }
}
