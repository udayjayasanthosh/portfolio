import React from "react";
import "./Nav.css"
import { FaListAlt } from "react-icons/fa";
export default function Nav_bar()
{
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
    }
    function Project()
    {
        const a=document.getElementById("project");
        if (a) {
            a.scrollIntoView({
              behavior: 'smooth',  
              block: 'center',
              inline: 'nearest',      
        });
        }
    }
    function Contact()
    {
        const a=document.getElementById("contact");
        if (a) {
            a.scrollIntoView({
              behavior: 'smooth',  
              block: 'start',
              inline: 'nearest',      
        });
        }
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
    }
    function Certificate()
    {
        const a=document.getElementById("certificate");
        if (a) {
            a.scrollIntoView({
              behavior: 'smooth',  
              block: 'center',
              inline: 'nearest',      
        });
        }
    }
    
    return(
        <div id="nav">
            <div id="heading_nav">
                <img src="logo3-bag.png" id="flexing"/>
            </div>
            <div id="header_list">
                <div className="list_item" onClick={Home}>Home</div>
                <div className="list_item" onClick={Skills}>Skills</div>
                <div className="list_item" onClick={Education}>Education</div>
                <div className="list_item" onClick={Certificate}>Certificates</div>
                <div className="list_item"  onClick={Project}>Projects</div>
                <div className="list_item" onClick={Contact}>Contact</div>

                <a href="uday_resume_.pdf" download="uday_resume.pdf" style={{textDecoration:"none"}}>
                <div className="resume_button">Resume</div>
                </a>
                <div id="list" onClick={()=>{document.getElementById("drawer").style.width="320px"}}>
                    <FaListAlt />
                </div>
            </div>
        </div>
    )
}