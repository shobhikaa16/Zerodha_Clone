import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Hero() {
  return (
    <div className='container p-10'>
      <div className='row text-center d-flex flex-column align-items-center'>
        <img src='/images/homeHero.png' alt='Hero img' className='mb-5' style={{ width: "800px", height: "auto" }}/>
        <h1 className='mt-5'>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button  className= 'p-2 btn btn-primary fs-5' style={{width:"15%",margin: "0 auto"}}>Sign up for free</button>
      </div>

    </div>
        
  );
}

export default Hero