import React from 'react'
import Logo from '../assets/Logo1.png';
import InstaIcon from '../assets/icons/instaIcon.png';

const Footer:React.FC = () => {
  return (
    <div className='mainFooterSection'>
        <div className="contentContainerFooter">
            <div className='footerSectOne'>
                <img src={Logo} alt="" className='Logo' />
                <h3>KEYSTONE CONSTRUCTION <br /> Building & Renovation</h3>
                <img src={InstaIcon} alt=""  className='icon'/>
            </div>
            <div className="footerSectTwo">
                <p><h2>Limpopo Office<hr/></h2>
                    3 Boskok Avenue <br/><br /><br /><br />
                    Fuana Park<br/><br /><br /><br />
                    Polokwane </p>
                
                <p><h2>Phone<hr/></h2>
                    068 881 1921</p>
                
            </div>
            <div className='footerSectThree'>
                <p><h2>Office Hours<hr/></h2>
                    Monday → Friday <br /><br /><br /><br />
                    08:00am → 16:00pm</p>
                <p><h2>Email<hr/></h2>
                    keystoneconstructionpty@gmail.com</p>
                              
            </div>
            <div className='devContact'>
                <h4>Contact the designer: +27 78 177 5837 | mondli46401@gmail.com </h4>
            </div>
        </div>      
    </div>
  )
}

export default Footer
