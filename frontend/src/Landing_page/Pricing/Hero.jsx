import React from "react";

function Hero() {
  return (
    <div classname="container">
      <div className="row mt-5  text-center">
        <h1>Charges</h1>
        <p className="text-muted mt-2" style={{ fontSize: "20px" }}>
          List of all charges and taxes
        </p>
      </div>
      <div className="row p-75">
        <div className="col-4 text-center text-muted">
          <img src="/images/z1.svg" alt="" />
          <h3>Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center text-muted">
          <img src="/images/z3.svg" alt="" />
          <h3>Intraday and F&O </h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center text-muted">
          <img src="/images/z2.svg" alt="" />
          <h3>Free direct MF</h3>
          <p>
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
