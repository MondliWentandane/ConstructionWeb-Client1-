import React from 'react';
import pro1 from '../assets/AlumPro.jpeg';
import pro2 from '../assets/WelcomeBG.jpeg';
import pro4 from '../assets/pro4.jpeg';
import pro6 from '../assets/pro6.jpeg';
import { Link } from 'react-router-dom';
// Import motion from the correct package
import { motion } from "motion/react"; 
import '../styles/ProjectStyle.css';

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
                            <h3>Aluminium Installation</h3>
                            <p>Old window frames were removed, and replaced with new 
                                Charcoal Aluminium windows</p>            
                        </div>
                    </motion.div>
                    <motion.div
                        className='proCard'
                        {...enterAnimationProps}
                        transition={getDelay(1)}
                    >
                        <img src={pro2} alt="" />
                        <div className="proDesc">
                            <h3>House Renovation</h3>
                            <p>Old carpet was removed, and install with Viryl planks along with 
                                matching skirting boards</p>            
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
                            <h3>Kitchen Remodel</h3>
                            <p>Residential remodeling is our bread and butter. 
                                A new kitchen was installed, along with new plumbing fixtures</p>            
                        </div>
                    </motion.div>
                    <motion.div
                        className='proCard'
                        {...enterAnimationProps}
                        transition={getDelay(3)} // Apply delay
                    >
                        <img src={pro6} alt="" />
                        <div className="proDesc">
                            <h3>Bathroom Remodel</h3>
                            <p>A new bathroom was renovated, along with new vanity cabinet and 
                                plumbing fixtures</p>            
                        </div>
                    </motion.div>          
                </div>
                <div className='middleProCard secMidd'>
                    <Link to='/projectGallaryR' className='button'>View More</Link>
                </div>
            </div>
        </div>
    );
}

export default Project;