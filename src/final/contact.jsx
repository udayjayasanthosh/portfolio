import React, { useEffect, useRef } from "react";
import "./contact.css";
import anime from "animejs";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
export default function Contact() {
    const revealRefs = useRef(new Set());

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const target = entry.target;

                    if (id === "contact_header") {
                        anime({
                            targets: target,
                            translateX: [50, 0],
                            opacity: [0, 1],
                            duration: 1000,
                            easing: "easeOutExpo",
                        });
                    } else if (id === "contact_title_c") {
                        anime({
                            targets: target,
                            opacity: [0, 1],
                            scale: [0.5, 1],
                            duration: 800,
                            easing: "easeInOutQuad",
                        });
                    } else if (id === "contact_title" ) {
                        anime({
                            targets: target,
                            opacity: [0, 1],
                            rotate: [-90, 0],
                            duration: 1200,
                            easing: "easeOutElastic",
                        });
                    }
                    else if(id=="contact_space" || id=="lotty")
                    {
                        anime({
                            targets: target,
                            opacity: [0, 1],
                            scale:[0.5,1],
                            duration: 1200,
                            easing: "easeOutExpo",
                        });
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        revealRefs.current.forEach((ele) => {
            if (ele) observer.observe(ele);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // Callback ref to add elements to the Set
    const addToRefs = (el) => {
        if (el) revealRefs.current.add(el);
    };

    return (
        <div id="contact">
            <div id="contact_header" ref={addToRefs}>
                <div id="contact_title_c" ref={addToRefs}>C</div>
                <div id="contact_title" ref={addToRefs}>ontact</div>
            </div>
            <div id="contact_content">
                <div id="lotty" ref={addToRefs}>
                    <DotLottieReact
                        src="./animation.lottie"
                        loop
                        autoplay
                    />
                </div>
                <form id="contact_space" action="https://api.web3forms.com/submit" method="POST" ref={addToRefs}>
                    <div id="links">
                        <div className="link" onClick={()=>{window.location.href="https://www.linkedin.com/in/uday-jaya-santhosh-506265288/"}}>
                            <div  id="contact_icon" >
                                <FaLinkedin /></div><div>LinkedIn</div>
                        </div>
                        <div className="link" id="link1" onClick={()=>{window.location.href="https://github.com/udayjayasanthosh"}}>
                             <div id="contact_icon"><IoLogoGithub /></div><div>Git-Hub</div>
                            
                        </div>
                        <div className="link" id="link2" onClick={()=>{window.location.href="mailto:udayjayasanthosh0908@gmail.com"}}>
                            <div id="contact_icon"><MdEmail /></div><div>Email</div> 
                        </div>
                    </div>
                    <input type="hidden" name="access_key" value="347d77d6-f3da-4e2a-beee-8b823dac1f34"/>
                    <input type="text" placeholder="Full Name" id="fullname" name="name"/>
                    <input type="email" placeholder="Email" id="fullname" name="email"/>
                    <input type="number" placeholder="Phone number" id="fullname" name="phone number"/>
                    <textarea id="textarea" placeholder="Enter your message" name="message"/>
                    <div id="button_styling">
                    <button id="contact_button" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
