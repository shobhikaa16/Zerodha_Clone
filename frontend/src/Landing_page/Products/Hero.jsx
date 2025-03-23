import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <div className="container text-center mt-5 p- mb-5">
      <div className='p-10'>
      <h1>Zerodha Products</h1>
      <p className='text-muted' style={{fontSize:"20px"}}>Sleek, modern, and intuitive trading platforms</p>
      <p className='mt-4 '>Check out our <a href=""style={{textDecoration:"none"}}>Investment offerings <FontAwesomeIcon icon={faArrowRight} /></a>
      </p>
      </div>
    </div>
  )
}

export default Hero