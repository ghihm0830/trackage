import React, { useState, useEffect } from 'react';

const FEATURES = [
    {
        key: "1",
        feature: "Track your shipment from all shipping companies"
    },
    {
        key: "2",
        feature: "Manage your shipment by shipping company or recipient"
    },
    {
        key: "3",
        feature: "Search your shipment only with just two: tracking number and recipient's last name"
    }
]

export default function Feature() {
    const [isMouseOver, setIsMouseOver] = useState(Array(FEATURES.length).fill(false));
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth)
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const handleMouseOver = (index) => {
        setIsMouseOver(prevState => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });
    };

    const handleMouseOut = (index) => {
        setIsMouseOver(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
    };

  return (
    <div className='features'>
        {FEATURES.map((feature, index) => (
            <div className='feature-box' key={feature.key}>
                <svg className='feature-svg' width="100%" height="130" viewBox="0 0 333 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_669_890)">
                    <path d="M6 172V3L166.5 87.5L327 3V172H6Z" fill="#FDF6F0"/>
                    <path d="M6 172V3L327 172M6 172H327M6 172L327 3V172" stroke="black" stroke-width="3"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_669_890" x="0.5" y="0.515091" width="332" height="180.985" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_669_890"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_669_890" result="shape"/>
                    </filter>
                    </defs>
                </svg>
                <div className='feature-text' onMouseOver={() => handleMouseOver(index)} onMouseOut={() => handleMouseOut(index)} style={{ minWidth: "210px", top: (isMouseOver[index] && index === 2) ? "-60%" : (isMouseOver[index] ? "-45%" : "-10px"), transition: "top 0.5s ease-out", borderLeft: "2px solid #1C1C1C", borderRight: "2px solid #1C1C1C", padding: isMouseOver ? "0.5em" : null}}>
                    <h3 style={{display: isMouseOver[index] ? null : "none"}}>{feature.feature}</h3>
                </div>
            </div>
        ))}
    </div>
  )
}
