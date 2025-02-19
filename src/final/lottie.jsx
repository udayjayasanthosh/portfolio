import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
export default function Lotti()
{
    return(
        <div style={{width:51,height:50,display:"block"}}>
         <DotLottieReact
            style={{width:150,height:150}}
            src="animation.lottie"
            loop
            autoplay
        />
        </div>
    )
}