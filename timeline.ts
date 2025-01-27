import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

/* The following plugin is a Club GSAP perk */
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);

let tl = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: "#timeline-track",
    pin: true, // pin the trigger element while active
    markers: true,
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "+=5000", // end after scrolling 500px beyond the start
    scrub: 2.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    snap: {
      snapTo: "labels", // snap to the closest label in the timeline
      duration: { min: 0.2, max: 1 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      delay: 0.5, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
    },
  },
  defaults: { ease: "none" },
});
tl.addLabel("one", "+=0");
tl.addLabel("second", "+=500");
tl.addLabel("third", "+=1000");
tl.addLabel("fourth", "+=1500");
tl.addLabel("fifth", "+=2000");
tl.addLabel("sixth", "+=2500");
tl.addLabel("seventh", "+=3000");
tl.addLabel("eight", "+=3500");

tl.fromTo(
  "#timeline-line-svg",
  { drawSVG: "0% 0%" },
  { duration: 3500, drawSVG: "0% 100%" },
  "one",
);
tl.to(
  "#timeline-dates-container",
  {
    ease: "none",
    duration: 3500,
    top: "-80.5rem",
  },
  "one",
);

const blobSVGs = gsap.utils.toArray(".timeline_blob-svg");
blobSVGs.splice(0, 1);

tl.fromTo(
  blobSVGs,
  { opacity: "60%" },
  { duration: "150", opacity: "100%", stagger: { each: 500 } },
  "second-=200",
);

const bgImages = gsap.utils.toArray(".timeline_background-image");

tl.fromTo(
  bgImages[0],
  {
    autoAlpha: 1,
  },
  { autoAlpha: 0, duration: 150 },
  "one+=175",
);
tl.fromTo(
  bgImages[0],
  {
    top: "-7.5%",
  },
  {
    top: "-15%",
    duration: 325,
  },
  "one",
);

bgImages.splice(0, 1);

tl.fromTo(
  bgImages,
  { autoAlpha: 0 },
  { autoAlpha: 1, duration: 150, stagger: { each: 500 } },
  "one+=175",
);

tl.fromTo(
  bgImages[6],
  { top: "0%" },
  { top: "-7.5%", duration: 325 },
  "seventh+=175",
);
bgImages.splice(6, 1);

tl.fromTo(
  bgImages,
  { autoAlpha: 1 },
  { autoAlpha: 0, duration: 150, stagger: { each: 500 } },
  "two+=175",
);
tl.fromTo(
  bgImages,
  { top: "0%" },
  { top: "-15%", duration: 650, stagger: { each: 500 } },
  "one+=175",
);

const years = [
  { id: "#year-1", position: "one" },
  { id: "#year-2", position: "second" },
  { id: "#year-3", position: "third" },
  { id: "#year-4", position: "fourth" },
  { id: "#year-5", position: "fifth" },
  { id: "#year-6", position: "sixth" },
  { id: "#year-7", position: "seventh" },
  { id: "#year-8", position: "eight" },
];
const yearIn = {
  ease: "power2.inOut",
  duration: 220,
  fontSize: "4.5rem",
  paddingRight: "2rem",
};
const yearOut = {
  ease: "power2.inOut",
  duration: 220,
  fontSize: "1.25rem",
  paddingRight: "0rem",
};
for (let year of years) {
  console.log(year);
  if (year.id !== "#year-1") {
    console.log("yeah");
    tl.to(year.id, yearIn, `${year.position}-=240`);
  }
  if (year.id !== "#year-8") {
    tl.to(year.id, yearOut, `${year.position}+=20`);
  }
}

const texts = [
  { id: "#text-1", position: "one" },
  { id: "#text-2", position: "second" },
  { id: "#text-3", position: "third" },
  { id: "#text-4", position: "fourth" },
  { id: "#text-5", position: "fifth" },
  { id: "#text-6", position: "sixth" },
  { id: "#text-7", position: "seventh" },
  { id: "#text-8", position: "eight" },
];
const textIn = {
  ease: "none",
  duration: 150,
  autoAlpha: "100%",
};
const textOut = {
  ease: "none",
  duration: 150,
  autoAlpha: "0%",
};
for (let text of texts) {
  if (text.id !== "#text-1") {
    tl.fromTo(text.id, { autoAlpha: "0%" }, textIn, `${text.position}-=230`);
  }
  if (text.id !== "#text-8") {
    tl.fromTo(text.id, { autoAlpha: "100%" }, textOut, `${text.position}+=50`);
  }
}
