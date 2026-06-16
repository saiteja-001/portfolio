import Splitting from "splitting";
import "splitting/dist/splitting.css";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const landingTargets = document.querySelectorAll(".landing-info h3, .landing-intro h2, .landing-intro h1");
  landingTargets.forEach((el) => {
    Splitting({ target: el, by: "chars" });
  });
  const landingChars = document.querySelectorAll(".landing-info h3 .char, .landing-intro h2 .char, .landing-intro h1 .char");

  gsap.fromTo(
    landingChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  const el2 = document.querySelector(".landing-h2-1");
  const el3 = document.querySelector(".landing-h2-2");

  if (el2) Splitting({ target: el2, by: "chars" });
  if (el3) Splitting({ target: el3, by: "chars" });

  const chars2 = el2 ? el2.querySelectorAll(".char") : [];
  const chars3 = el3 ? el3.querySelectorAll(".char") : [];

  // Animate the initial visible word at startup
  gsap.fromTo(
    chars2,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  LoopText(chars2, chars3);
}

function LoopText(chars1: any, chars2: any) {
  var tl = gsap.timeline({ repeat: -1 });

  // Hide chars2 initially
  gsap.set(chars2, { opacity: 0, y: 80 });

  tl.to(chars1, {
    y: -80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.inOut",
    stagger: 0.05,
  }, "+=2.5")
  .to(chars2, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.inOut",
    stagger: 0.05,
  }, "<")
  .to(chars2, {
    y: -80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.inOut",
    stagger: 0.05,
  }, "+=2.5")
  .to(chars1, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.inOut",
    stagger: 0.05,
  }, "<");
}
