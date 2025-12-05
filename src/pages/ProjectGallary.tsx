import React from 'react'
import b1 from '../assets/before/b1.jpeg';
import b2 from '../assets/before/b2.jpeg';
import b3 from '../assets/before/b3.jpeg';
import b4 from '../assets/before/b4.jpeg';
import b5 from '../assets/before/b5.jpeg';
import b6 from '../assets/before/b6.jpeg';
import b7 from '../assets/before/b7.jpeg';
import b8 from '../assets/before/b8.jpeg';

import a1 from '../assets/after/a1.jpeg'
import a2 from '../assets/after/a2.jpeg'
import a3 from '../assets/after/a3.jpeg'
import a4 from '../assets/after/a4.jpeg'
import a5 from '../assets/after/a5.jpeg'
import a6 from '../assets/after/a6.jpeg'
import a7 from '../assets/after/a7.jpeg'
import a8 from '../assets/after/a8.jpeg'
import a9 from '../assets/after/a9.jpeg'
import a10 from '../assets/after/a10.jpeg'


const ProjectGallary: React.FC = () => {
  return (
    <div className='GalaryPage'>
      
        <div className="beforePro">
            <img src={b1} alt="" />
            <img src={b2} alt="" />
            <img src={b3} alt="" />
            <img src={b4} alt="" />
            <img src={b5} alt="" />
            <img src={b6} alt="" />
            <img src={b7} alt="" />
            <img src={b8} alt="" />
        </div>
        <div>
            <h1>After</h1>
        </div>
        <div className="borderGallary">
          <div className="afterSect">
              <img src={a1} alt="" />
              <img src={a2} alt="" />
              <img src={a3} alt="" />
              <img src={a4} alt="" />
              <img src={a5} alt="" />
              <img src={a6} alt="" />
              <img src={a7} alt="" />
              <img src={a8} alt="" />
              <img src={a9} alt="" />
              <img src={a10} alt="" />
          </div>          
        </div>
    </div>
  )
}

export default ProjectGallary;
