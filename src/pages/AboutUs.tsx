import React, { useState } from 'react'
import aboutImg from '../assets/aboutImg.png';
import aboutImgPhone from '../assets/beforeAfter.png';
import { AnimatePresence, motion } from "motion/react";
import '../styles/AboutUsStyle.css';

const AboutUs:React.FC = () => {
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
    <div className='aboutP'>
      <div className='aboutSect'>
        <img src={aboutImgPhone} alt="" className='phoneImg' /> 
        <div>
            
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
        <img src={aboutImg} alt="" className='formalImg'/>            
      </div>
    </div>
  )
}

export default AboutUs;