import { gsap } from "gsap";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* The following plugin is a Club GSAP perk */
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);
// commit comment
let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: "#timeline-track",
        pin: true, // pin the trigger element while active
        // markers: true,
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=5000", // end after scrolling 500px beyond the start
        scrub: 2.5, // smooth scrubbing, takes 1 second tu "catch up" to the scrollbar
        snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 1 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.5, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        },
        // onUpdate: (self) => {
        //     console.log(self);
        //     console.log(
        //         "progress:",
        //         self.progress.toFixed(3),
        //         "direction:",
        //         self.direction,
        //         "velocity",
        //         self.getVelocity()
        //     );
        // },
    },
    defaults: { ease: "none" },
});
// Clear the total duration to ensure we're not inheriting old values
tl.clear();

// Add explicit duration animation to guarantee the full timeline length
tl.to({}, { duration: 3500 }, 0);

// Now add the labels relative to the start
tl.addLabel("one", "0");
tl.addLabel("two", "500");
tl.addLabel("three", "1000");
tl.addLabel("four", "1500");
tl.addLabel("five", "2000");
tl.addLabel("six", "2500");
tl.addLabel("seven", "3000");
tl.addLabel("eight", "3500");

let mm = gsap.matchMedia();

// We already have a full-duration animation from clear/to above

// Base animation for both desktop and mobile
tl.fromTo(
    ".timeline_line-svg.is-animated", // Removed tablet-up qualifier to apply to both
    { drawSVG: "0% 0%" },
    { duration: 3500, drawSVG: "0% 100%" },
    "one"
);

// Desktop-specific animations
mm.add("(min-width: 768px)", () => {
    // console.log("Desktop view active");
    tl.to(
        "#timeline-dates-container",
        {
            ease: "none",
            duration: 3500,
            top: "-80.5rem",
        },
        "one"
    );

    tl.fromTo(
        ".timeline_heading",
        {
            autoAlpha: 1,
        },
        {
            ease: "none",
            duration: 150,
            autoAlpha: 0,
        },
        "one+=50"
    );

    const blobSVGs = gsap.utils.toArray("#desktop-dates .timeline_blob-svg");
    blobSVGs.splice(0, 1);

    tl.fromTo(
        blobSVGs,
        { opacity: "60%" },
        { duration: "150", opacity: "100%", stagger: { each: 500 } },
        "two-=200"
    );
});

// Mobile-specific animations
mm.add("(max-width: 767px)", () => {
    // console.log("Mobile view active");
    tl.to(
        "#timeline-dates-container-s",
        {
            ease: "none",
            duration: 3500,
            left: "-80.5rem",
        },
        "one"
    );

    const blobSVGs = gsap.utils.toArray("#mobile-dates .timeline_blob-svg");
    blobSVGs.splice(0, 1);

    tl.fromTo(
        blobSVGs,
        { opacity: "60%" },
        { duration: "150", opacity: "100%", stagger: { each: 500 } },
        "two-=200"
    );
});

// Get all background images without modifying the array
const bgImages = gsap.utils.toArray(".timeline_background-image");
const allBgImages = [...bgImages].reverse(); // Create a copy to avoid mutation issues

// First image animations
tl.fromTo(
    allBgImages[0],
    { autoAlpha: 1 },
    { autoAlpha: 0, duration: 150 },
    "one+=175"
);
tl.fromTo(
    allBgImages[0],
    { top: "-7.5%" },
    { top: "-15%", duration: 325 },
    "one"
);

// Middle images animations (2-7)
const middleImages = allBgImages.slice(1, 7);
tl.fromTo(
    middleImages,
    { autoAlpha: 0 },
    {
        autoAlpha: 1,
        duration: 150,
        stagger: {
            each: 500,
            from: "start",
        },
    },
    "one+=175"
);

// Last image animation
tl.fromTo(
    allBgImages[7],
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 150 },
    "seven+=175"
);
tl.fromTo(
    allBgImages[7], // Assuming there are 8 images total
    { top: "0%" },
    { top: "-7.5%", duration: 325 },
    "seven+=175"
);

// Use position parameter string with label to ensure animations extend to the end
tl.fromTo(
    middleImages,
    { autoAlpha: 1 },
    {
        autoAlpha: 0,
        duration: 150,
        stagger: {
            each: 500,
            from: "start",
        },
    },
    "two+=175"
);
tl.fromTo(
    middleImages,
    { top: "0%" },
    {
        top: "-15%",
        duration: 650,
        stagger: {
            each: 500,
            from: "start",
        },
    },
    "one+=175"
);

// Add a final animation at the end to ensure timeline extends fully
tl.to({}, { duration: 0.1 }, "eight");

let fontSizeLarge;
let paddingSize;
mm.add("(min-width: 768px)", () => {
    fontSizeLarge = "4.5rem";
    paddingSize = "2rem";
});
mm.add("(max-width: 767px)", () => {
    fontSizeLarge = "2.25rem";
    paddingSize = "0rem";
});

// Already have full timeline animations

const years = [
    { id: "#year-1", position: "one" },
    { id: "#year-2", position: "two" },
    { id: "#year-3", position: "three" },
    { id: "#year-4", position: "four" },
    { id: "#year-5", position: "five" },
    { id: "#year-6", position: "six" },
    { id: "#year-7", position: "seven" },
    { id: "#year-8", position: "eight" },
];
const yearIn = {
    ease: "power2.inOut",
    duration: 220,
    fontSize: fontSizeLarge,
    paddingRight: paddingSize,
};
const yearOut = {
    ease: "power2.inOut",
    duration: 220,
    fontSize: "1.25rem",
    paddingRight: "0rem",
};
for (let year of years) {
    // console.log(year);
    if (year.id !== "#year-1") {
        // console.log("yeah");
        tl.to(year.id, yearIn, `${year.position}-=240`);
    }
    if (year.id !== "#year-8") {
        tl.to(year.id, yearOut, `${year.position}+=20`);
    }
}

const texts = [
    { id: "#text-1", position: "one" },
    { id: "#text-2", position: "two" },
    { id: "#text-3", position: "three" },
    { id: "#text-4", position: "four" },
    { id: "#text-5", position: "five" },
    { id: "#text-6", position: "six" },
    { id: "#text-7", position: "seven" },
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
        tl.fromTo(
            text.id,
            { autoAlpha: "0%" },
            textIn,
            `${text.position}-=230`
        );
    }
    if (text.id !== "#text-8") {
        tl.fromTo(
            text.id,
            { autoAlpha: "100%" },
            textOut,
            `${text.position}+=50`
        );
    }
}

// Force GSAP to calculate the correct total duration
// This ensures the totalDuration matches our labels
tl.totalDuration(3500);

// Force ScrollTrigger to recalculate after all animations are defined
ScrollTrigger.refresh(true);
