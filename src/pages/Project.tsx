import React from 'react';
import pro1 from '../assets/pro1.jpeg';
import pro2 from '../assets/pro2.jpeg';
import pro4 from '../assets/pro4.jpeg';
import pro6 from '../assets/pro6.jpeg';
import { Link } from 'react-router-dom';
// Import motion from the correct package
import { motion } from "motion/react"; 

const Project: React.FC = () => {
    
    // Define the animation properties once for clarity and re-use
    const enterAnimationProps = {
        initial: { opacity: 0, scale: 0.8 }, // Start slightly smaller and invisible
        animate: { opacity: 1, scale: 1 }, // Animate to full size and visible
        transition: {
            duration: 0.4,
            scale: { type: "spring", stiffness: 200, damping: 20, bounce: 0.5 }, // Using spring for a bouncy effect
        },
    };
    
    // Function to calculate a slight delay for staggered appearance
    // This makes the animation look more dynamic
    const getDelay = (index: number) => ({
        ...enterAnimationProps.transition,
        delay: index * 0.3, // Stagger by 100ms
    });

    return (
        <div className='projectsPage'>
            <div className="projectSectIntro">
                <h1>Featured Projects</h1>
            </div>
            <div className="projectSectPros">
                <div className='bothSide'>
                    <motion.div
                        className='proCard'
                        {...enterAnimationProps}
                        transition={getDelay(0)} // Apply delay
                    >
                        <img src={pro1} alt="" />
                        <div className="proDesc">
                            <h3>RESIDENTIAL REMODEL</h3>
                            <p>Residential remodeling is our bread and butter. 
                                It is the backbone of our business. Our top designers 
                                and contractors can take on small changes, and larger 
                                remodels equally, with expertise and dedication.</p>            
                        </div>
                    </motion.div>
                    <motion.div
                        className='proCard'
                        {...enterAnimationProps}
                        transition={getDelay(1)}
                    >
                        <img src={pro2} alt="" />
                        <div className="proDesc">
                            <h3>RESIDENTIAL REMODEL</h3>
                            <p>Residential remodeling is our bread and butter. 
                                It is the backbone of our business. Our top designers 
                                and contractors can take on small changes, and larger 
                                remodels equally, with expertise and dedication.</p>            
                        </div>
                    </motion.div>
                </div>

                <div className='middleProCard'>
                    <Link to='/projectGallaryR' className='button'>View More</Link>
                </div>

                <div className='bothSide'>
                    <motion.div
                        className='proCard'
                        {...enterAnimationProps}
                        transition={getDelay(2)} // Apply delay
                    >
                        <img src={pro4} alt="" />
                        <div className="proDesc">
                            <h3>RESIDENTIAL REMODEL</h3>
                            <p>Residential remodeling is our bread and butter. 
                                It is the backbone of our business. Our top designers 
                                and contractors can take on small changes, and larger 
                                remodels equally, with expertise and dedication.</p>            
                        </div>
                    </motion.div>
                    <motion.div
                        className='proCard'
                        {...enterAnimationProps}
                        transition={getDelay(3)} // Apply delay
                    >
                        <img src={pro6} alt="" />
                        <div className="proDesc">
                            <h3>RESIDENTIAL REMODEL</h3>
                            <p>Residential remodeling is our bread and butter. 
                                It is the backbone of our business. Our top designers 
                                and contractors can take on small changes, and larger 
                                remodels equally, with expertise and dedication.</p>            
                        </div>
                    </motion.div>          
                </div>
            </div>
        </div>
    );
}

export default Project;