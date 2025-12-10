import React, { useState } from 'react';
import InstaIcon from '../assets/icons/instaIcon.png';
import ContactDes from '../assets/ContactDes.jpeg';
import { AnimatePresence, motion } from "motion/react"; 
import '../styles/ContactStyle.css';

// --- Modal Component ---
const ContactModal = ({ onClose }: { onClose: () => void }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cellno: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('https://client1backend-ryan-production.up.railway.app/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    cellno: '',
                    message: ''
                });
                // Close modal after 2 seconds
                setTimeout(() => {
                    onClose();
                }, 2000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const FormContent = (
        <form className='theForm' onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>
            
            {submitStatus === 'success' && (
                <div style={{ 
                    padding: '10px', 
                    backgroundColor: '#4CAF50', 
                    color: 'white', 
                    borderRadius: '5px', 
                    marginBottom: '15px',
                    textAlign: 'center'
                }}>
                    ✓ Message sent successfully! We'll contact you soon.
                </div>
            )}
            
            {submitStatus === 'error' && (
                <div style={{ 
                    padding: '10px', 
                    backgroundColor: '#f44336', 
                    color: 'white', 
                    borderRadius: '5px', 
                    marginBottom: '15px',
                    textAlign: 'center'
                }}>
                    ✗ Failed to send message. Please try again.
                </div>
            )}

            <input 
                type="text" 
                name="name"
                placeholder="Full Name" 
                value={formData.name}
                onChange={handleChange}
                required 
                disabled={isSubmitting}
            />
            <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                value={formData.email}
                onChange={handleChange}
                required 
                disabled={isSubmitting}
            />
            <input 
                type="tel" 
                name="cellno"
                placeholder="Phone Number" 
                value={formData.cellno}
                onChange={handleChange}
                disabled={isSubmitting}
            />
            <textarea 
                name="message"
                placeholder="Tell us about your project..." 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                required 
                disabled={isSubmitting}
            />
            <motion.button 
                type="submit" 
                className='btn'
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                disabled={isSubmitting}
                style={{ 
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
            >
                {isSubmitting ? 'Sending...' : 'Send Request'}
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
            <div className='phoneCont'>
                <h1>Let Build Together your Home..</h1>
            </div>
            <div className='content'>
                <div className='redCont'>
                    <h1>CONTACT  US</h1>
                    <strong>Let's discuss your project <br />
                        requirements <br />
                        and schedule a consultation <br />
                        with our team</strong> <br />
                    
                    <motion.button
                        onClick={toggleModal}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='quote-btn'
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