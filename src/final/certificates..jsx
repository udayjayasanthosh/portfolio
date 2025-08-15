import React from 'react';
import { useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './certificate.css';
import anime from 'animejs';

const testimonials = [
  {
    url: "cisco c++.pdf",
    name: "c++ Programming Essentials",
    Posted: "Cisco",
    img: "cisco_c++.png",
  },
  {
    url: "js-1.pdf",
    name: "JavaScript Essentials 1",
    Posted: "Cisco",
    img: "js_essential1.png",
  },
  {
    url: "js-2.png",
    name: "JavaScript Essentials 2",
    Posted: "Cisco",
    img: "js_essential2.png",
  },
  {
    url: "JS It.pdf",
    name: "JavaScript",
    Posted: "Pearson",
    img: "js-it.png",
  },
  {
    url: "oracle_certification.pdf",
    name: "Oracle Database",
    Posted: "Oracle Certified Foundations Associate, Database",
    img: "OracelCertificate.png",
  },
  {
    url: "fsd.pdf",
    name: "FSD with ReactNative",
    Posted: "Technical Hub",
    img: "fsd_reactNative.png",
  },
  {
    url: "python Guvi.png",
    name: "Python",
    Posted: "Guvi",
    img: "python Guvi.png",
  },
  {
    url: "sql_intermediate.pdf",
    name: "Sql Intermediate",
    Posted: "Hacker Rank",
    img: "sql_hackerrank.png",
  },
];

export default function Certificate() {

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
          } else if (id === "contact_title") {
            anime({
              targets: target,
              opacity: [0, 1],
              rotate: [-90, 0],
              duration: 1200,
              easing: "easeOutElastic",
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px", display: "flex", justifyContent: "center", gap: "8px" }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#DC143C",
        }}
      ></div>
    ),
  };

  const addToRefs = (el) => {
    if (el) revealRefs.current.add(el);
  };


  return (
    <div style={{
      width: '100%', overflow: "hidden", alignItems: "center", justifyContent: "center", marginTop: 100, marginBottom: 100, display: "flex", flexDirection: "column"
    }} id="certificate">
      <div id="contact_header" ref={addToRefs}>
        <div id="contact_title_c" ref={addToRefs}>C</div>
        <div id="contact_title" ref={addToRefs}>ertificates</div>
      </div>
      <div className="testimonial-container">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-user">
                <img src={t.img} alt={t.name} />
                <div className='cr_lower'>
                  <div className='cr_matter'>
                    <strong>{t.name}</strong>
                    <p>{t.Posted}</p>
                  </div>
                  <button>
                    <a style={{textDecoration:"none",color:"white"}}  href={t.url} download={t.name}>Dowload</a></button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

  )
}