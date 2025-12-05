import React, { useState } from 'react';
import InstaIcon from '../assets/icons/instaIcon.png';
import ContactDes from '../assets/ContactDes.jpeg';
import { AnimatePresence, motion } from "motion/react"; 

// --- Modal Component ---
const ContactModal = ({ onClose }: { onClose: () => void }) => {

    const FormContent = (
        <form className='theForm'>
            <h3>Send Us a Message</h3>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Tell us about your project..." rows={4} required />
            <motion.button 
                type="submit" 
                className='btn'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                Send Request
            </motion.button>
        </form>
    );

    return (
        // 1. Animated Backdrop (Overlay)
        <motion.div
            className='modal-backdrop'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose} 
        >
            {/* 2. Centered Modal Content (Form Card) */}
            <motion.div
                className='modal-content'
                initial={{ y: -50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 150, damping: 20 }}
                onClick={(e) => e.stopPropagation()} 
            >
                <button onClick={onClose} className='modal-close-btn'>&times;</button>
                {FormContent}
            </motion.div>
        </motion.div>
    );
};


const Contact: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='contactSect'>
            <div className='content'>
                <div className='redCont'>
                    <h1>CONTACT  US</h1>
                    <strong>Let’s discuss your project <br />
                        requirements <br />
                        and schedule a consultation <br />
                        with our team</strong> <br />
                    
                    <motion.button
                        onClick={toggleModal}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='quote-btn' // New class for the main button
                    >
                        Request a Quote
                    </motion.button> 
                    
                    <br /> 
                    <img src={InstaIcon} alt="" className='icon'/>
                </div>
                <img src={ContactDes} alt="" className='wallPa' />
            </div>
            
            {/* AnimatePresence for the modal mounting/unmounting */}
            <AnimatePresence>
                {isModalOpen && <ContactModal onClose={toggleModal} />}
            </AnimatePresence>
        </div>
    );
}

export default Contact;