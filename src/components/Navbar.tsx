import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

export const smoother = {
  paused: (state?: boolean) => {
    if (state !== undefined) {
      document.body.style.overflowY = state ? "hidden" : "auto";
    }
    return document.body.style.overflowY === "hidden";
  },
  scrollTop: (val?: number) => {
    if (val !== undefined) {
      window.scrollTo({ top: val });
    }
    return window.scrollY;
  },
  scrollTo: (target: any, smooth?: boolean, _position?: string) => {
    let element: HTMLElement | null = null;
    if (typeof target === "string") {
      element = document.querySelector(target);
    } else if (target instanceof HTMLElement) {
      element = target;
    }
    if (element) {
      element.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
    }
  }
};

const Navbar = () => {
  useEffect(() => {
    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) {
            smoother.scrollTo(section, true, "top top");
          }
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Sai Teja
        </a>
        <a
          href="mailto:saitejakgp2019@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          saitejakgp2019@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#certifications" href="#certifications">
              <HoverLinks text="CERTIFICATIONS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
