import React, { useRef } from 'react';
import { motion, useScroll, useMotionValue, useMotionValueEvent, animate, MotionValue } from 'framer-motion';
import cardImg1 from '../assets/cardImg.webp';
import cardImg2 from '../assets/cardImg2.jpg';
import cardImg3 from '../assets/cardImg3.webp';
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

  return (
    <div className='servicePage'>
        <div style={{width:"100%", height:"fit-content",}}><h1>Our Capabilities</h1></div>
        <div className='cardsSect'>
            <svg id="scroll-progress" width="80" height="80" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    className="indicator"
                    style={{ pathLength: scrollXProgress }}
                />
            </svg>
            <motion.div className='theCards' ref={containerRef} style={{ maskImage }}>
                <div className='card'>
                    <img src={cardImg1} alt=""/>
                    <div className='contentCard'>
                        <h3>Kitchen & Bathroom <br />Makeovers</h3>
                        <div>
                            <p>Revamping essential home spaces with functional designs,
                                    improved layouts, and modern finishes that add value and
                                    comfort.</p>                            
                        </div>
                        <div id='btnDiv'>
                            <button> What We Do...</button> 
                        </div>   
                    </div>
                </div>
                <div className='card'>
                    <img src={cardImg3} alt=""/>
                    <div className='contentCard'>
                        <h3>Interior & Exterior <br />Decking/Cladding</h3>
                        <div>
                            <p>Fitting high-quality cladding 
                                    materials to protect your home's 
                                    exterior while giving it a modern,
                                    elegant look.</p>   <br />                         
                        </div>
                        <div id='btnDiv'>
                            <button> What We Do...</button> 
                        </div>        
                    </div>
                </div>
                <div className='card'>
                    <img src={cardImg2} alt=""/>
                    <div className='contentCard'>
                        <h3>Home Renovations</h3>
                        <div>
                            <p>Transforming interior spaces 
                                    with modern designs, improved 
                                    layouts, and high-quality 
                                    finishes to elevate your entire 
                                    living experience.</p>   <br />                         
                        </div>
                        <div id='btnDiv'>
                            <button> What We Do...</button> 
                        </div>        
                    </div>
                </div>
                {/* Duplicate cards to show scroll functionality */}
                <div className='card'>
                    <img src={cardImg1} alt=""/>
                    <div className='contentCard'>
                        <h3>Kitchen & Bathroom <br />Makeovers</h3>
                        <div>
                            <p>Revamping essential home spaces with functional designs,
                                    improved layouts, and modern finishes that add value and
                                    comfort.</p>                            
                        </div>
                        <div id='btnDiv'>
                            <button> What We Do...</button> 
                        </div>   
                    </div>
                </div>
                <div className='card'>
                    <img src={cardImg3} alt=""/>
                    <div className='contentCard'>
                        <h3>Interior & Exterior <br />Decking/Cladding</h3>
                        <div>
                            <p>Fitting high-quality cladding 
                                    materials to protect your home's 
                                    exterior while giving it a modern,
                                    elegant look.</p>   <br />                         
                        </div>
                        <div id='btnDiv'>
                            <button> What We Do...</button> 
                        </div>        
                    </div>
                </div>
            </motion.div>
        </div>
        <div style={{height:'15%'}}>

        </div>
    </div>
  );
}

export default Services;