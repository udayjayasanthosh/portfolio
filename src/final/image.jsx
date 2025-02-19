import React from "react";
import "./image.css";
import anime from "animejs";
import { useEffect } from "react";
export default function Images()
{
    useEffect(()=>{
        anime({
            targets: '.image',
            duration: 1200, // Increase duration for a smoother effect
            opacity: [0, 1],
            translateX: [-50, 0],
            easing: 'easeOutQuad' // Use a smoother easing function
        }).play();},[])
    return(
        <img className="image" src="happy-boy-with-laptop.png"/>

    )
}