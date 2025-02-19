import React, { useRef } from "react";
import "./project.css";
import anime from "animejs";
import { useEffect } from "react";
// import Slider from "react-slick";
// import Slider from "react-slick";

export default function Projects() {
    const revealref = useRef([]);
    useEffect(() => {
        const observe = new IntersectionObserver((entries) => {
            entries.forEach((element) => {
                if (element.isIntersecting) {
                    const target = element.target;
                    const id = element.target.id;
                    if (id === "project_title") {
                        anime({
                            targets: target,
                            opacity: [0, 1],
                            translateX: [50, 0],
                            duration: 1000,
                            easing: "easeOutExpo",
                        });
                    } else if (id === "project_s") {
                        anime({
                            targets: target,
                            opacity: [0, 1],
                            scale: [0.5, 1],
                            duration: 800,
                            easing: "easeInOutQuad",
                        });
                    } else if (id === "project_project") {
                        anime({
                            targets: target,
                            opacity: [0, 1],
                            rotate: [-90, 0],
                            duration: 1200,
                            easing: "easeOutElastic",
                        });
                    }
                    else if (target.classList.contains("card-title")) {
                        anime({
                            targets: target,
                            opacity: [0, 1],
                            translateX: [-30, 0],
                            duration: 800,
                            easing: "easeOutCubic",
                        });
                    }
                     else if (target.tagName.toLowerCase() === "p") {
                        anime({
                            targets: target,
                            opacity: [0, 1],
                            translateY: [20, 0],
                            duration: 1000,
                            easing: "easeOutQuart",
                        });
                    }
                    observe.unobserve(target);
                }
            });
        }, { threshold: 0.5});

        revealref.current.forEach((el) => {
            if (el) observe.observe(el);
        });

        return () => observe.disconnect();
    }, []);

    return (
        <div id="project">
            <div id="project_title" ref={(ele) => (revealref.current[0] = ele)}>
                <div id="project_s" ref={(ele) => (revealref.current[1] = ele)}>
                    P
                </div>
                <div id="project_project" ref={(ele) => (revealref.current[2] = ele)}>
                    rojects
                </div>
            </div>
            <div id="project-content">
                {/* <Slider {...settings}> */}
                <div className="project-cards" ref={(ele) => revealref.current.push(ele)}>
                    <div className="card-title" ref={(ele) => revealref.current.push(ele)}>2048</div>
                    <img src="2048.png" alt="2048 Game" ref={(ele) => revealref.current.push(ele)} />
                    <p ref={(ele) => revealref.current.push(ele)}>A modern, interactive version of the classic 2048 puzzle game, developed using React for a seamless and responsive experience. The game challenges players to combine numbered tiles by swiping in different directions, aiming to reach the 2048 tile.</p>
                    <button className="project_button" onClick={()=>{window.location.href="https://2048-game-self-six.vercel.app/"}}>Explore</button>
                </div>
                <div className="project-cards" ref={(ele) => revealref.current.push(ele)}>
                    <div className="card-title" ref={(ele) => revealref.current.push(ele)}>Diary</div>
                    <img src="" alt="Diary App" ref={(ele) => revealref.current.push(ele)} />
                    <p ref={(ele) => revealref.current.push(ele)}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae exercitationem velit blanditiis laboriosam nulla harum consectetur? Possimus odit aperiam suscipit.</p>
                    <button className="project_button">Explore</button>
                </div>
                <div className="project-cards" ref={(ele) => revealref.current.push(ele)}>
                    <div className="card-title" ref={(ele) => revealref.current.push(ele)}>Alumni Connect</div>
                    <img src="" alt="Alumni Connect" ref={(ele) => revealref.current.push(ele)} />
                    <p ref={(ele) => revealref.current.push(ele)}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae exercitationem velit blanditiis laboriosam nulla harum consectetur? Possimus odit aperiam suscipit.</p>
                    <button className="project_button">Explore</button>
                </div>
                {/* </Slider> */}
            </div>
        </div>
    );
}
