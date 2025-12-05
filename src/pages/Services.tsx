import React from 'react'
import cardImg1 from '../assets/cardImg.webp';
import cardImg2 from '../assets/cardImg2.jpg';
import cardImg3 from '../assets/cardImg3.webp';

const Services: React.FC = () => {
  return (
    <div className='servicePage'>
        <div style={{width:"100%", height:"fit-content",}}><h1>Our Capabilities</h1></div>
        <div className='cardsSect'>
            <div className='theCards'>
                <div className='card'>
                    <img src={cardImg1} alt=""/>
                    <div className='contentCard'>
                        <h3>Kitchen & Bathroom <br />Makeovers</h3>
                        <div>
                            <p>Revamping essential home spaces with functional designs,
                                    improved layouts, and modern finishes that add value and
                                    comfort.</p>                            
                        </div>
                        <div id='btnDiv'>
                            <button> What We Do...</button> 
                        </div>   
                    </div>
                </div>
                <div className='card'>
                    <img src={cardImg3} alt=""/>
                    <div className='contentCard'>
                        <h3>Interior & Exterior <br />Decking/Cladding</h3>
                        <div>
                            <p>Fitting high-quality cladding 
                                    materials to protect your home’s 
                                    exterior while giving it a modern,
                                    elegant look.</p>   <br />                         
                        </div>
                        <div id='btnDiv'>
                            <button> What We Do...</button> 
                        </div>        
                    </div>
                </div>
                <div className='card'>
                    <img src={cardImg2} alt=""/>
                    <div className='contentCard'>
                        <h3>Home Renovations</h3>
                        <div>
                            <p>Transforming interior spaces 
                                    with modern designs, improved 
                                    layouts, and high-quality 
                                    finishes to elevate your entire 
                                    living experience.</p>   <br />                         
                        </div>
                        <div id='btnDiv'>
                            <button> What We Do...</button> 
                        </div>        
                    </div>
                </div>
            </div>
        </div>
        <div style={{height:'15%'}}>

        </div>
    </div>
  )
}

export default Services;
