import React from 'react'

function OpenAccount() {
  return (
    <div className='container p-10 mb-5'>
      <div className='row text-center d-flex flex-column align-items-center'>
        <h1 style={{ fontSize: "2rem"}}className='mt-4'>Open a Zerodha account</h1>
        <p className='fs-6 mt-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <button  className= 'p-2 btn btn-primary mt-4 fs-5 fw-semibold mb-5' style={{width:"15%",margin: "0 auto"}}>Sign up for free</button>
      </div>

    </div>
  )
}

export default OpenAccount