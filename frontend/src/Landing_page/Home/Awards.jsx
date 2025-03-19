import React from "react";

function Awards() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="/images/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <div className="row">
            <div className="col-6 mb-5">
              <ul>
                <li>
                  <p>Future and options</p>
                </li>
                <li>
                  <p>Future and options</p>
                </li>
                <li>
                  <p>Future and options</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Future and options</p>
                </li>
                <li>
                  <p>Bonds and Government Security</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="/images/pressLogos.png" alt="" style={{width:"90%"}} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
