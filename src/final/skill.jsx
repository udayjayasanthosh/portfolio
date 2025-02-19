import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "./skill.css";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import CircularProgress from "../testing/squares";

export default function Skill() {
  const revealRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (target.id === "skills_heading") {
              anime({
                targets: target,
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 1000,
                easing: "easeOutExpo",
              });
            } else if (target.id === "skill_s") {
              anime({
                targets: target,
                opacity: [0, 1],
                scale: [0.5, 1],
                duration: 800,
                easing: "easeInOutQuad",
              });
            } else if (target.id === "kills") {
              anime({
                targets: target,
                opacity: [0, 1],
                rotate: [-90, 0],
                duration: 1200,
                easing: "easeOutElastic",
              });
            }

            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills_parent">
      <div
        id="skills_heading"
        ref={(el) => (revealRef.current[0] = el)}
      >
        <div id="skill_s" ref={(el) => (revealRef.current[1] = el)}>
          S
        </div>
        <div id="kills" ref={(el) => (revealRef.current[2] = el)}>
          kills
        </div>
      </div>
      <div id="skill_set">
          <div className="blocking">
              <CircularProgress percentage={80}/>
              <div className="blocking-matter">HTML</div>
          </div>
          {/* <div className="blocking">
              <CircularProgress percentage={70}/>
              <div className="blocking-matter">CSS</div>
          </div> */}
          <div className="blocking">
              <CircularProgress percentage={60}/>
              <div className="blocking-matter">Java Script</div>
          </div>
          <div className="blocking">
              <CircularProgress percentage={50}/>
              <div className="blocking-matter">React</div>
          </div>
          <div className="blocking">
              <CircularProgress percentage={40}/>
              <div className="blocking-matter">Node js</div>
          </div>
          <div className="blocking">
              <CircularProgress percentage={60}/>
              <div className="blocking-matter">Mongo DB</div>
          </div>
          <div className="blocking">
              <CircularProgress percentage={75}/>
              <div className="blocking-matter">My Sql</div>
          </div>
          <div className="blocking">
              <CircularProgress percentage={60}/>
              <div className="blocking-matter">React Native</div>
          </div>
          <div className="blocking">
              <CircularProgress percentage={70}/>
              <div className="blocking-matter">c++</div>
          </div>
          <div className="blocking">
              <CircularProgress percentage={70}/>
              <div className="blocking-matter">Python</div>
          </div>
      </div>
    </div>
  );
}
