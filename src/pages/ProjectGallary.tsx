import React from 'react';
// Import motion
import { motion } from "motion/react"; 
import '../styles/ProjectGallaryStyle.css';

import b1 from '../assets/before/b1.jpeg';
import b2 from '../assets/before/b2.jpeg';
import b3 from '../assets/before/b3.jpeg';
import b4 from '../assets/before/b4.jpeg';
import b5 from '../assets/before/b5.jpeg';
import b6 from '../assets/before/b6.jpeg';
import b7 from '../assets/before/b7.jpeg';
import b8 from '../assets/before/b8.jpeg';

import a1 from '../assets/after/a1.jpeg'
import a2 from '../assets/AlumPro.jpeg'
import a3 from '../assets/fansDesk.jpeg'
import a11 from '../assets/fans1.jpeg';
import a12 from '../assets/fans2.jpeg';
import a13 from '../assets/Decorative.jpeg';

import a4 from '../assets/after/a4.jpeg'
import a5 from '../assets/after/a5.jpeg'
import a6 from '../assets/after/a6.jpeg'
import a7 from '../assets/after/a7.jpeg'
import a8 from '../assets/after/a8.jpeg'
import a9 from '../assets/after/a9.jpeg'
import a10 from '../assets/after/a10.jpeg'


const ProjectGallary: React.FC = () => {

    // Define the animation properties
    const enterAnimationProps = {
        initial: { opacity: 0, scale: 0.8 }, 
        animate: { opacity: 1, scale: 1 }, 
        transition: {
            duration: 0.4,
            scale: { type: "spring", stiffness: 200, damping: 20, bounce: 0.5 },
        },
    };
    
    // Function to calculate a slight delay for staggered appearance
    const getDelayTransition = (index: number, baseDelay: number = 0) => ({
        ...enterAnimationProps.transition,
        delay: baseDelay + index * 0.05, // Stagger by 50ms, with an optional base delay
    });

    const beforeImages = [b1, b2, b3, b4, b5, b6, b7, b8];
    const afterImages = [a1, a2, a3,a11, a12,a13, a4, a5, a6, a7, a8, a9, a10 ];

    return (
        <div className='GalaryPage'>
            
            <div className="beforePro">
                {beforeImages.map((src, index) => (
                    <motion.img whileHover={{ scale: 1.2 }}whileTap={{ scale: 0.8 }}
                        key={`b-${index}`}
                        src={src} 
                        alt={`Before image ${index + 1}`} 
                        {...enterAnimationProps}
                        transition={getDelayTransition(index)} // Apply staggered delay
                    />
                ))}
            </div>
            
            <div>
                <h1>After</h1>
            </div>
            
            <div className="borderGallary">
                <div className="afterSect">
                    {afterImages.map((src, index) => (
                        <motion.img whileHover={{ scale: 1.2 }}whileTap={{ scale: 0.8 }}
                            key={`a-${index}`}
                            src={src} 
                            alt={`After image ${index + 1}`} 
                            {...enterAnimationProps}
                            transition={getDelayTransition(index, 0.4)} // Apply staggered delay, starting 400ms later
                        />
                    ))}
                </div>          
            </div>
        </div>
    );
}

export default ProjectGallary;