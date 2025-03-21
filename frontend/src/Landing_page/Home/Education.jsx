import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <div className="container mt-5 p-10">
          <div className="row">
          <div className="col-6">
            <img src="/images/education.svg" alt="" />
          </div>
            <div className="col-6"> 
              <h1 className="mb-5">Free and open market education</h1>
              <p>Varsity, the largest online stock market education book in the world covering everything from 
                the basics to advanced trading.
              </p>
              <a href="" className="" style={{ textDecoration: "none" }}>
                Varsity <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <p className='mt-5'>TradingQ&A, the most active trading and investment community in 
                India for all your market related queries.
              </p>
              <a href="" className="" style={{ textDecoration: "none" }}>
                TradingQ&A <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
  );
}

export default Education;
