import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function port() {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".port__item");
    const container = document.querySelector("#port");

    gsap.to(sections, {
        xPercent: -120 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: container,
            start: "top 56px",
            end: () => "+=" + container.offsetWidth,
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        }
    });
}