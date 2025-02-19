import React from "react";
import "./uday.css";
import BlurText from "./BlurText";
import { IoLogoLinkedin } from "react-icons/io";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import anime from "animejs";
export function Text()
{
    useEffect(()=>{
        anime({
            targets:'.icon_',
            translateY:[-50,0],
            opacity:[-1,1],
            duration:1500,
            easing:"easeOutQuad"
        }).play()
    },[])
    return(
        <div id="name">
        <BlurText
        text="HI, I'M"
        delay={200}
        animateBy="words"
        direction="left"
        className="text-2xl mb-8"
        />
        <BlurText
        text="UDAY JAYA SANTHOSH"
        delay={200}
        animateBy="words"
        direction="left"
        className="text-2xl mb-8"
        />
        <div id="first-line">
            <div style={{color:"#5994B9",marginRight:"10px"}}>const</div>
            <div style={{color:"orange"}}> Uday</div>
            <div>:</div>
            <div style={{color:"orange",marginLeft:"10px"}}>Array</div>
            <div>{"<"}</div>
            <div style={{color:"lightgreen"}}>Ingredient</div>
            <div>{">"}</div>
            <div style={{color:"#5994B9"}}>{"="}</div>
            <div>{"["}</div>
        </div>
        <div id="second-line">
            <div style={{color:"grey"}}>Full stack Developer</div>
            <div>{","}</div>
            <div style={{color:"grey"}}>Coder</div>
            <div>{","}</div>
            <div style={{color:"grey"}}>software Developer</div>
        </div>
        <div id="third-line">
            <div>{"]"}</div>
            <div>{";"}</div>
        </div>
        <div id="profile_icons">
            <div className="icon_" onClick={()=>{window.location.href="https://www.linkedin.com/in/uday-jaya-santhosh-506265288/"}}>
                <IoLogoLinkedin />
            </div>
            <div className="icon_" onClick={()=>{window.location.href="https://github.com/udayjayasanthosh"}}>
                <FaGithub />
            </div>
            <div className="icon_" onClick={()=>{window.location.href="mailto:udayjayasanthosh0908@gmail.com"}}>
                <MdEmail />
            </div>
        </div>
        </div>
    )
}