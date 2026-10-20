// Einstiegspunkt für die ganze Site: wird einmal im Site Head eingebunden
// (<script type="module" src=".../dist/main.js">) und lädt nur die Module,
// deren Elemente auf der aktuellen Seite vorkommen.
// CSS landet gebündelt in dist/main.css (Swiper-Basis einmal plus eigene Anpassungen)
import "swiper/css";
import "./custom.scss";
import { initTabDeepLinks } from "./modules/tab-deeplink";

type Feature = {
    selector: string;
    load: () => Promise<unknown>;
    skip?: () => boolean;
};

const features: Feature[] = [
    { selector: ".footer_swiper", load: () => import("./modules/footer-swiper") },
    { selector: ".home-controller", load: () => import("./modules/home-swiper") },
    {
        selector: ".hero_swiper_sponsors-logo-container",
        load: () => import("./modules/home-sponsor"),
    },
    { selector: "#timeline-track", load: () => import("./modules/timeline") },
    {
        selector: ".team-image-swiper_container",
        load: () => import("./modules/team-image-swiper"),
        // Auf Leichtathletik war das Script bisher auskommentiert
        skip: () => location.pathname.startsWith("/abteilungen/leichtathletik"),
    },
    { selector: ".team-controller_swiper", load: () => import("./modules/team-controller") },
    {
        selector: ".team-uebersicht_internal_controller-container",
        load: () => import("./modules/team-internal"),
    },
];

initTabDeepLinks();

for (const { selector, load, skip } of features) {
    if (!document.querySelector(selector) || skip?.()) continue;
    load().catch((error) => console.error(`[svn-scripts] ${selector}`, error));
}
