import React from 'react'
import aboutImg from '../assets/aboutImg.png';

const AboutUs:React.FC = () => {
  return (
    <div className='aboutP'>
      <div className='aboutSect'>
        <div>
            <h1>About Us</h1>
            <p><strong>Building More Than Structures</strong> <br/>
                At <span className='keyword'>Keystone Construction</span>, we don't just pour concrete or raise beams—we lay the 
                foundations of the future. Every project is a testament to human ingenuity and the 
                power of vision meeting determination.</p>
              
            <p><strong>Our Vision: Your Dreams, Realized</strong> <br />
                We believe that every great structure begins with an even greater dream. Our mission 
                is to transform your vision from blueprints into a tangible, lasting reality. We thrive 
                on the challenge of getting around obstacles and seeing a project stand tall, a monument 
                to the power of imagination and hard work.</p> 
            <button>Read More...</button>
        </div>
        <img src={aboutImg} alt="" />            
      </div>
    </div>
  )
}

export default AboutUs
