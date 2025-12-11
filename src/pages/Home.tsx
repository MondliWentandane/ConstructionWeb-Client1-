import React from 'react'
import { useState, useEffect } from 'react';
import WelcomeBG1 from '../assets/WelcomeBG.jpeg';
import WelcomeBG2 from '../assets/WelcomeBG2.jpeg';
import WelcomeBG3 from '../assets/WelcomeBG4.jpeg';
import fansImg from '../assets/fans1.jpeg';
import fansImg2 from '../assets/fans2.jpeg';
import aboutImg from '../assets/aboutImg.png';
import aboutImgPhone from '../assets/beforeAfter.png';
import { AnimatePresence, motion } from "motion/react";
import '../styles/HomeStyle.css';
import '../styles/AboutUsStyle.css';
import { useScrollToHash } from '../hooks/useScrollToHash';

const Home:React.FC = () => {
  useScrollToHash();
  const backgroundImages = [
    WelcomeBG1,
    WelcomeBG2,
    WelcomeBG3
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(true);
      
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % backgroundImages.length);
        setFadeIn(false);
      }, 1000); // Crossfade duration
    }, 7000);

    return () => clearInterval(interval);
  }, [nextImageIndex]);


  /**=== The code bellow is comming from the about us page */

  const [isMoreInfoVisible, setIsMoreInfoVisible] = useState(false);
    const toggleMoreInfo = () => {setIsMoreInfoVisible(!isMoreInfoVisible);};
    const MoreInfoContent = (
          <>
              <p><strong>Our Foundation: Quality and Integrity</strong> <br />
                  "The bitterness of poor quality remains long after the sweetness 
                  of low price is forgotten". This principle guides every nail we 
                  hammer and every wall we raise. We use the best materials and reveal 
                  the quality through dedicated craftsmanship. Our success isn't just 
                  measured by the final building, but by the relationships and trust we 
                  build along the way.</p> 
          </>
      );

  return (
    <div className='homeSection'>
      <div className='welcomeSection'>
        {/* Current background image */}
        <div 
          className="backgroundImage zoom-out"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.212), 
            rgba(7, 7, 7, 0.25)), url(${backgroundImages[currentImageIndex]})`
          }}
        />
        {/* Next background image for crossfade */}
        <div 
          className={`backgroundImage zoom-out ${fadeIn ? 'fade-in' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.212), 
            rgba(7, 7, 7, 0.25)), url(${backgroundImages[nextImageIndex]})`,
            opacity: fadeIn ? 1 : 0
          }}
        />
        <div className='heading'>
          <h1>Transforming <br />Houses into Homes</h1>
          <h3>Keystone Construction 'Building & Renovation' is dedicated to building lasting relationships with clients 
            by consistently exceeding expectations through exceptional performance by every team member. We bring years of 
            industry expertise to every project, ensuring quality, safety, and efficiency from inception to completion.</h3>
        </div>
      </div>
      <div className='aboutSection'>
          <h2><span id='wSpan'>Welcome</span> to <span style={{color:'#9b2e13ff'}}>
            Keystone Construction</span> <br />- Building & Renovation official page</h2> <br />
        <div className='aboutPars'>
          <img src={aboutImgPhone} alt="" className='phoneImg' />
          <div>
            <i>At <span style={{color: "#9e0d0dff", fontSize:"120%"}}>Keystone Construction</span>, we don't just pour concrete or raise beams—we lay the
foundations of the future.</i> <br /><br />
            <p> Every project is a testament to human ingenuity and the
                 power of vision meeting determination. We believe that every great structure begins with an even greater dream.</p> <br />
            <p><span style={{color: "#9e0d0dff", fontSize:"120%", fontWeight: "bold"}}>Our mission </span>is to transform your vision from blueprints into a tangible, lasting reality.
                We thrive on the challenge of getting around obstacles and seeing a project stand tall, a monument to 
                 the power of imagination and hard work.</p>

             <p>The bitterness of poor quality remains
                    long after the sweetness of low price is forgotten". This principle guides every
                    nail we hammer and every wall we raise.We use the best materials and reveal the quality 
                    through dedicated craftsmanship.</p> <br />
                   
          </div>                  
            <img src={aboutImg} alt="" className='formalImg'/> 
            
        </div> 
        <br /> 
        <div className='aboutSect' id='about-section'>
                 
                <img src={fansImg} alt="" className='desktopImg'/>
                <img src={fansImg2} alt="" className='mobileImg' />
                <div className='abtContext'>
                   <div>
                    <p><strong>Exceptional Craftsmanship</strong><br />
                    We use superior materials and employ highly skilled tradespeople who deliver exceptional quality in every texture, 
                    detail, and finish. Our standards ensure that every project reflects the excellence our clients deserve.
                    </p> <br />
                    <p><strong>Reliable Project Management</strong><br />
                    We respect your time and investment. Our expert project management guarantees efficient workflows, 
                    ensuring your project is delivered on schedule and within the agreed-upon budget. You can trust us to handle every step with professionalism and transparency.
                     </p> <br />

                     <p><strong>Tailored Construction Solutions</strong><br />
               Your vision is unique — and we honour that. We listen closely to your needs 
               and provide custom construction solutions, adapting our expertise to match 
               your specific requirements and aesthetic goals. Our goal is to bring your vision to life with strength, integrity, and precision.
                </p> 
                   </div>
                    <AnimatePresence initial={false}>
                                {isMoreInfoVisible && (
                                    <motion.div key="moreInfo" initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: "15px" }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }} transition={{ duration: 0.3 }}
                                        style={{ overflow: "hidden" }}>
                                        {MoreInfoContent}
                                    </motion.div>)}
                            </AnimatePresence>
                            <motion.button onClick={toggleMoreInfo} whileHover={{ scale: 1.05 }}whileTap={{ scale: 0.95 }}
                               animate={{ rotate: 360 }} transition={{ duration: 1 }} className='button'> 
                                {isMoreInfoVisible ? "Read Less" : "Read More..."}
                            </motion.button>
                </div>      
              </div>
      </div>
    </div>
  )
}

export default Home