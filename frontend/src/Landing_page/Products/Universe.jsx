import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <p>
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
        <h1 className="mt-5">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        
        <div className="col-4 mt-5 text-center">
          <img
            src="/images/zerodhaFundhouse.png"
            style={{ width: "50%" }}
            alt=""
          />
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 mt-5 text-center">
          <img
            src="/images/sensibullLogo.svg"
            style={{ width: "50%" }}
            alt=""
          />
          <p className="text-small text-muted mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 mt-5  text-center">
          <img src="/images/tijori.svg" style={{ width: "50%" }} alt="" />
          <p className="text-small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-4 text-center">
          <img src="/images/streakLogo.png" style={{ width: "50%" }} alt="" />
          <p className="text-small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-4 text-center">
          <img
            src="/images/smallcaseLogo.png"
            style={{ width: "50%" }}
            alt=""
          />
          <p className="text-small text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-4 text-center">
          <img
            src="/images/zerodhaFundhouse.png"
            style={{ width: "50%" }}
            alt=""
          />
          <p className="text-small text-muted mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button  className= 'p-2 btn btn-primary mt-5 fs-5 fw-semibold mb-5' style={{width:"15%",margin: "0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
