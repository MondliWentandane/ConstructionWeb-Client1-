import React from 'react'

const Home:React.FC = () => {
  return (
    <div className='homeSection'>
      <div className='welcomeSection'>
        <div className='heading'>
          <h1>Transforming <br />Houses into Homes</h1>
          <h3>Keystone Construction 'Building & Renovation' is dedicated to building lasting relationships with clients 
            by consistently exceeding expectations through exceptional performance by every team member. We bring years of 
            industry expertise to every project, ensuring quality, safety, and efficiency from inception to completion.</h3>
        </div>
      </div>
      <div className='aboutSection'>
          <h2><span id='wSpan'>Welcome</span> to the official page of <br /> <span style={{color:'#f54d23ff'}}>Keystone Construction</span></h2>
        <div className='aboutPars'>
          <div>
            <p>We are dedicated to building the foundations of your future, turning architectural aspirations into 
            solid, enduring realities.</p>
          </div>
          <div>
            <h3>Uncompromising Craftsmanship:</h3>
            <p>At Keystone Construction, we don't just build structures; we craft legacies. We use superior materials and 
               employ highly skilled tradespeople who deliver exceptional quality and durability in every fixture and 
               finish.</p>
          </div>
          <div>
            <h3>Why Choose Keystone Construction?</h3>
            <p>The name "Keystone" defines our philosophy: the central stone at the summit of an arch, locking the whole 
               structure together. This symbolizes the essential role we play in the success of your project. Here’s why 
               we are the right partner for your next build:</p>
          </div>
          <div>
            <h3>Foundation of Trust and Integrity:</h3>
            <p>We believe a successful project is built on trust. Our transparent processes and honest communication 
               ensure you are confident and informed from the initial consultation to project completion.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
