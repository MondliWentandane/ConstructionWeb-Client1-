import React from 'react'
import Logo from '../assets/Logo1.png';

const Footer:React.FC = () => {
  return (
    <div className='mainFooterSection'>
        <div className="contentContainerFooter">
            <div className='footerSectOne'>
                <img src={Logo} alt="" className='Logo' />
                <h3>KEYSTONE CONSTRUCTION <br /> Building & Renovation</h3>
            </div>
            <div className="footerSectTwo">
                <p><strong>Limpopo Office<hr/></strong>
                    3 Bosbok Avenue <br/>
                    Fuana Park<br/>
                    Polokwane </p> <br id='theId'/>
                
                <p><strong>Phone<hr/></strong>
                    068 881 1921</p>
                
            </div>
            <div className='footerSectThree'>
                <p><strong>Office Hours<hr/></strong>
                    Monday → Friday <br />
                    08:00am → 16:00pm</p> <br className='diAcvt' />
                <p><strong>Email<hr/></strong>
                    keystoneconstructionpty@gmail.com</p>
                  </div>
        </div>      
    </div>
  )
}

export default Footer
