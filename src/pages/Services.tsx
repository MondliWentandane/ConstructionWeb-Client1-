import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValue, useMotionValueEvent, animate, MotionValue } from 'framer-motion';
import cardImg1 from '../assets/cardImg.webp';
import cardImg2 from '../assets/cardImg2.jpg';
import cardImg3 from '../assets/cardImg3.webp';
import cardImg4 from '../assets/fans2.jpeg';
import '../styles/ServicesStyle.css';

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
    const maskImage = useMotionValue(
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
    );

    useMotionValueEvent(scrollXProgress, "change", (value) => {
        if (value === 0) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
            );
        } else if (value === 1) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
            );
        } else if (
            scrollXProgress.getPrevious() === 0 ||
            scrollXProgress.getPrevious() === 1
        ) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
            );
        }
    });

    return maskImage;
}

const Services: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const maskImage = useScrollOverflowMask(scrollXProgress);
  
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (cardIndex: number) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const servicesData = [
    {
      title: "Kitchen & Bathroom Makeovers",
      description: "Revamping essential home spaces with functional designs, improved layouts, and modern finishes that add value and comfort.",
      items: [
        "Kitchen Cabinets",
        "Ceiling/Suspending",
        "Tiling",
        "Aluminium Window & Doors",
        "Drywalling",
        "Interior & Exterior Painting",
        "Roof Painting"
      ],
      image: cardImg1
    },
    {
      title: "Composite Decking & Cladding",
      description: "Fitting high-quality cladding materials to protect your home's exterior while giving it a modern, elegant look.",
      items: [
        "Structural System",
        "Decking",
        "Cladding",
        "Railings",
        "Architectural Beams",
        "Indoor Flooring"
      ],
      image: cardImg3
    },
    {
      title: "Commercial & Home Renovations",
      description: "Transforming interior spaces with modern designs, improved layouts, and high-quality finishes to elevate your entire living experience.",
      items: [
        "Floors",
        "Walls",
        "Countertops",
        "Waterproofing"
      ],
      image: cardImg2
    },
    {
      title: "Clear-Vu Fence",
      description: "Installing premium security fencing solutions that combine safety with unobstructed views, perfect for residential and commercial properties.",
      items: [
        "Clear Vu Fence",
        "Sliding Gate",
        "Pedestrian Gate",
        "Electric Fence",
        "Pool Fence"
      ],
      image: cardImg4
    }
  ];

  return (
    <div className='servicePage'>
        <div style={{width:"100%", height:"fit-content",}}><h1>Our Capabilities</h1></div>
        <div className='cardsSect'>
            <motion.div className='theCards' ref={containerRef} style={{ maskImage }}>
                {servicesData.map((service, index) => (
                  <div className='card' key={index}>
                      <img src={service.image} alt=""/>
                      <div className='contentCard'>
                          <h3>{service.title}</h3>
                          <div>
                              <p>{service.description}</p>
                              {service.description.split('\n').length === 1 && <br />}
                          </div>
                          {expandedCard === index && (
                            <div style={{
                              marginTop: '10px',
                              padding: '15px',
                              backgroundColor: 'rgba(0, 0, 0, 0.1)',
                              borderRadius: '8px',
                              maxHeight: '200px',
                              overflowY: 'auto'
                            }}>
                              <ul style={{
                                listStyleType: 'disc',
                                paddingLeft: '20px',
                                margin: 0
                              }}>
                                {service.items.map((item, itemIndex) => (
                                  <li key={itemIndex} style={{ marginBottom: '5px' }}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div id='btnDiv'>
                              <button onClick={() => toggleCard(index)}>
                                {expandedCard === index ? 'Close' : 'What We Do...'}
                              </button> 
                          </div>   
                      </div>
                  </div>
                ))}
            </motion.div>
        </div>
        <div style={{height:'15%'}}>

        </div>
    </div>
  );
}

export default Services;