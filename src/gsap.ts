// GSAP kommt aus der Webflow-GSAP-Integration (Site Settings → GSAP), nicht aus dem Bundle.
// Dort aktiv sein müssen: ScrollTrigger, Draggable, InertiaPlugin, DrawSVGPlugin.
// Das npm-Paket "gsap" ist nur für die Typen installiert und muss zur Webflow-Version passen.
import type { gsap as GsapType } from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";
import type { Draggable as DraggableType } from "gsap/Draggable";

type GsapGlobals = {
    gsap: typeof GsapType;
    ScrollTrigger: typeof ScrollTriggerType;
    Draggable: typeof DraggableType;
};

const globals = window as unknown as GsapGlobals;

export const gsap = globals.gsap;
export const ScrollTrigger = globals.ScrollTrigger;
export const Draggable = globals.Draggable;
