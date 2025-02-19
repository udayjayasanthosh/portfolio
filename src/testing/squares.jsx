import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

const CircularProgress = ({ percentage }) => {
  // Set up state to store dynamic radius and text size
  const [radius, setRadius] = useState(40);
  const [fontSize, setFontSize] = useState("20px");
  
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = useRef(circumference);
  const svgRef = useRef(null);
  const observerRef = useRef(null);

  // Update radius and font size based on screen width
  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 500)
      {
          setRadius(30);  // Smaller radius for mobile
        setFontSize("16px");
      }
      if (screenWidth < 600) {
        setRadius(40);  // Smaller radius for mobile
        setFontSize("16px");  // Smaller text for mobile
      } else if (screenWidth < 900) {
        setRadius(50);  // Medium radius for tablet
        setFontSize("18px");  // Medium text for tablet
      } else {
        setRadius(55);  // Larger radius for desktop
        setFontSize("20px");  // Larger text for desktop
      }
    };

    // Call update on mount and when window resizes
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: strokeDashoffset,
            current: [circumference, circumference - (percentage / 100) * circumference],
            easing: "easeInOutQuad",
            duration: 1000,
            update: () => {
              svgRef.current.querySelector(".progress-circle").setAttribute("stroke-dashoffset", strokeDashoffset.current);
            },
          });
        }
      },
      { threshold: 0.5 }
    );

    if (svgRef.current) {
      observerRef.current.observe(svgRef.current);
    }

    return () => {
      if (observerRef.current && svgRef.current) {
        observerRef.current.unobserve(svgRef.current);
      }
    };
  }, [percentage, circumference]);

  return (
    <div className="flex justify-center items-center">
      <svg ref={svgRef} height={radius * 2} width={radius * 2}>
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          className="progress-circle"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          stroke="#DC143C"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize={fontSize}
          fill="#DC143C"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
