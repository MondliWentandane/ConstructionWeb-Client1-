import React from 'react'
import InstaIcon from '../assets/icons/instaIcon.png';
import ContactDes from '../assets/ContactDes.jpeg';

const Contact:React.FC = () => {
  return (
    <div className='contactSect'>
      <div className='content'>
        <div className='redCont'>
          <h1>CONTACT  US</h1>
          <strong>Let’s discuss your project <br />
                  requirements <br />
                  and schedule a consultation <br />
                  with our team</strong> <br />
          <button>Request a Quote</button>  <br /> 
           <img src={InstaIcon} alt="" className='icon'/>
        </div>
        <img src={ContactDes} alt="" className='wallPa' />
      </div>
    </div>
  )
}

export default Contact;
