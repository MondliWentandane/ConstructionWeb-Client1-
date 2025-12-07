import React from 'react'
import { useState, useEffect } from 'react';
import WelcomeBG1 from '../assets/WelcomeBG.jpeg';
import WelcomeBG2 from '../assets/WelcomeBG2.jpeg';
import WelcomeBG3 from '../assets/WelcomeBG4.jpeg';
import '../styles/HomeStyle.css'

const Home:React.FC = () => {
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
          <h2><span id='wSpan'>Welcome</span> to the official page of <br /> <span style={{color:'#f54d23ff'}}>Keystone Construction</span></h2>
        <div className='aboutPars'>
          <div>
            <i>We are dedicated to building the foundations of your future, turning architectural aspirations into 
            solid, enduring realities.</i><br /> <br className='brActive'/> <br />
            <p><span>Why Choose Keystone Construction?</span><br /> The name "Keystone" defines our philosophy: the central stone at the summit of an arch, locking the whole 
               structure together. This symbolizes the essential role we play in the success of your project. Here's why 
               we are the right partner for your next build:</p> <br />
          </div>          
          <div>
            <p><span>Uncompromising Craftsmanship:</span> <br />At Keystone Construction, we don't just build structures; we craft legacies. We use superior materials and 
               employ highly skilled tradespeople who deliver exceptional quality and durability in every fixture and 
               finish.</p> <br />
            <p><span>Foundation of Trust and Integrity:</span><br />We believe a successful project is built on trust. Our transparent processes and honest communication 
               ensure you are confident and informed from the initial consultation to project completion.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home