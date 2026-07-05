import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "AI-Powered Multi-Disease Prediction System",
    category: "Machine Learning / Streamlit Web App",
    tools: "Python, Scikit-learn, Streamlit, Pandas. 3 classification models (Diabetes, Heart, Kidney disease), 85% accuracy, sub-second latency.",
    image: "/images/disease_prediction.png",
  },
  {
    title: "Driver Drowsiness Detection System",
    category: "Computer Vision / Python AI",
    tools: "Python, OpenCV, Computer Vision. Real-time facial landmark detection pipeline, Eye Aspect Ratio (EAR) algorithm, 30 FPS, 1-2s alerts.",
    image: "/images/drowsiness_detection.png",
  },
  {
    title: "Smart Traffic Light System - Prototype",
    category: "Embedded Systems / IoT",
    tools: "Raspberry Pi, Python, Embedded Systems. Adaptive traffic signal control system, dynamic 4-lane signal timing, simulated 20-25% improvement.",
    image: "/images/smart_traffic.png",
  },
];

const Work = () => {
  useGSAP(() => {
    function getTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return 0;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      const width = rect.width * box.length - (rectLeft + parentWidth) + padding;
      return width > 0 ? width : 0;
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: 0.3,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
