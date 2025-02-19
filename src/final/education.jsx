import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "./education.css";

export default function Education() {
    const revealRefs = useRef(new Set());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        const target = entry.target;

                        if (id === "education_header") {
                            anime({
                                targets: target,
                                translateX: [-50, 0],
                                opacity: [0, 1],
                                duration: 1000,
                                easing: "easeOutExpo",
                            });
                        }
                        else if (id === "education_") {
                            anime({
                                targets: target,
                                opacity: [0, 1],
                                scale: [0.5, 1],
                                duration: 800,
                                easing: "easeInOutQuad",
                            });
                        }
                        else if (id === "education_s") {
                            anime({
                                targets: target,
                                opacity: [0, 1],
                                rotate: [-90, 0],
                                duration: 1200,
                                easing: "easeOutElastic",
                            });
                        }
                        else if (target.classList.contains("branch") || target.classList.contains("branch_reverse")) {
                            anime({
                                targets: target,
                                translateY: [50, 0],
                                opacity: [0, 1],
                                scale: [0.8, 1],
                                duration: 2000,
                                easing: "easeOutExpo",
                                delay: anime.stagger(300),
                            });
                        }

                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        revealRefs.current.forEach((ele) => {
            if (ele) observer.observe(ele);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const addToRefs = (el) => {
        if (el) revealRefs.current.add(el);
    };

    return (
        <div id="education">
            <div id="education_header" ref={addToRefs}>
                <div id="education_" ref={addToRefs}>E</div>
                <div id="education_s" ref={addToRefs}>ducation</div>
            </div>
            <div id="education_content">
                <div id="education_block">
                    <div id="steam"></div>
                    <div className="branch" ref={addToRefs}>
                        <div className="branch_matter">
                            <h1>Ravindra Bharathi School</h1>
                            <p>SSC 10th</p>
                            <p className="gpa">10 GPA</p>
                        </div>
                        <div className="branch_circle" />
                    </div>
                    <div className="branch_reverse" ref={addToRefs}>
                        <div className="branch_circle"></div>
                        <div className="branch_matter">
                            <h1>Pragathi Junior College</h1>
                            <p>INTER MPC</p>
                            <p className="gpa">90.5%</p>
                        </div>
                    </div>
                    <div className="branch" ref={addToRefs}>
                        <div className="branch_matter">
                            <h1>Aditya Engineering College</h1>
                            <p>BTECH {"(CSE)"}</p>
                            <p>Current GPA: 8.77</p>
                        </div>
                        <div className="branch_steam"></div>
                        <div className="branch_circle"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
