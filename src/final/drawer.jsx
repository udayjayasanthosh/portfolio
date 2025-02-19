import React from "react";
import "./drawer.css"
import { FaHome } from "react-icons/fa";
import { ImCross } from "react-icons/im";
export default function Drawer()
{
    function Closing()
    {
        document.getElementById("drawer").style.width="0px"
    }
    function Home()
    {
        const a=document.getElementById("home");
        if (a) {
            a.scrollIntoView({
              behavior: 'smooth',  
              block: 'end',
              inline: 'nearest',      
        });
        }
        Closing()
    }
    function Skills()
    {
        const a=document.getElementById("skills_parent");
        if (a) {
            a.scrollIntoView({
              behavior: 'smooth',  
              block: 'center',
              inline: 'nearest',      
        });
        }
        Closing()
    }
    function Project()
    {
        const a=document.getElementById("project");
        if (a) {
            a.scrollIntoView({
              behavior: 'smooth',  
              block: 'start',
              inline: 'nearest',      
        });
        }
        Closing()
    }
    function Contact()
    {
        const a=document.getElementById("contact");
        if (a) {
            a.scrollIntoView({
              behavior: 'smooth',  
              block: 'center',
              inline: 'nearest',      
        });
        }
        Closing()
    }
    function Education()
    {
        const a=document.getElementById("education");
        if (a) {
            a.scrollIntoView({
              behavior: 'smooth',  
              block: 'center',
              inline: 'nearest',      
        });
        }
        Closing()
    }
    return(
        <div id="drawer">
            <div className="drawer_header">
                <img src="logo3-bag.png"/>
                <div onClick={()=>{Closing()}}><ImCross />
                </div>
            </div>
            <div className="drawer_list" onClick={Home}>HOME</div>
            <div className="drawer_list" onClick={Skills}>SKILLS</div>
            <div className="drawer_list" onClick={Education}>Education</div>
            <div className="drawer_list" onClick={Project}>PROJECT</div>
            <div className="drawer_list" onClick={Contact}>CONTACT</div>
            <a href="uday_resume_.pdf" download="uday_resume.pdf" style={{textDecoration:"none"}}>
            <button className="resume_buttons">RESUME</button>
            </a>
        </div>
    )
}