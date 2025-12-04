import React from 'react';
import pro1 from '../assets/pro1.jpeg';
import pro2 from '../assets/pro2.jpeg';
import pro4 from '../assets/pro4.jpeg';
import pro6 from '../assets/pro6.jpeg';
import { Link } from 'react-router-dom';

const Project: React.FC = () => {
  return (
    <div className='projectsPage'>
      <div className="projectSectIntro">
        <h1>Featured Projects</h1>
      </div>
      <div className="projectSectPros">
        <div className='bothSide'>
          <div className='proCard'>
            <img src={pro1} alt="" />
            <div className="proDesc">
              <h3>RESIDENTIAL REMODEL</h3>
              <p>Residential remodeling is our bread and butter. 
                  It is the backbone of our business. Our top designers 
                  and contractors can take on small changes, and larger 
                  remodels equally, with expertise and dedication.</p>            
            </div>
          </div>
          <div className='proCard'>
            <img src={pro2} alt="" />
            <div className="proDesc">
              <h3>RESIDENTIAL REMODEL</h3>
              <p>Residential remodeling is our bread and butter. 
                  It is the backbone of our business. Our top designers 
                  and contractors can take on small changes, and larger 
                  remodels equally, with expertise and dedication.</p>            
            </div>
          </div>
        </div>
        <div className='middleProCard'>
          <Link to='/projectGallaryR' className='button'>View More</Link>
        </div>
        <div className='bothSide'>
          <div className='proCard'>
            <img src={pro4} alt="" />
            <div className="proDesc">
              <h3>RESIDENTIAL REMODEL</h3>
              <p>Residential remodeling is our bread and butter. 
                  It is the backbone of our business. Our top designers 
                  and contractors can take on small changes, and larger 
                  remodels equally, with expertise and dedication.</p>            
            </div>
          </div>
          <div className='proCard'>
            <img src={pro6} alt="" />
            <div className="proDesc">
              <h3>RESIDENTIAL REMODEL</h3>
              <p>Residential remodeling is our bread and butter. 
                  It is the backbone of our business. Our top designers 
                  and contractors can take on small changes, and larger 
                  remodels equally, with expertise and dedication.</p>            
            </div>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Project;
