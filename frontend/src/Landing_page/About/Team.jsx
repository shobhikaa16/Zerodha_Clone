import React from "react";

function Team() {
  return (
    <div className="container mt-5">
      <div className="row mt-3   ">
        <h1 className=" " style={{ marginLeft: "53%" }}>
          People
        </h1>
      </div>

      <div
        className="row p-5 text-muted "
        style={{ lineHeight: "1.9", fontSize: "1em" }}
      >
        <div className="col-6 p-5 text-end">
          <img
            src="/images/nithinKamath.jpg"
            className="float-end p-2"
            style={{ borderRadius: "100%", width: "60%" }}
            alt=""
          />
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry..
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage{" "}
            </a>
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA{" "}
            </a>
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter{" "}
            </a>
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-4 p-5">
            <img
              src="/images/pic1.jpg"
              alt=""
              style={{ borderRadius: "100%", width: "85%" }}
              className=""
            />
            <p className="text-center me-3 mt-2">
              <h4>Hanan Delvi</h4>
              CCO</p>
          </div>
          <div className="col-4 p-5">
            <img
              src="/images/pic2.jpg"
              style={{ borderRadius: "100%", width: "85%" }}
              alt=""
            />
            <p className="text-center me-3 mt-2">
              <h4>Seema Patil</h4>
              Director</p>
          </div>
          <div className="col-4 p-5">
            <img
              src="/images/pic3.jpg"
              alt=""
              style={{ borderRadius: "100%", width: "85%" }}
            />
            <p className="text-center me-3 mt-2">
              <h4>Karthik Rangappa</h4>
              Chief of Education</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4 p-5">
            <img
              src="/images/pic4.jpg"
              alt=""
              style={{ borderRadius: "100%", width: "85%" }}
              className=""
            />
            <p className="text-center me-3 mt-2">
              <h4>Nikhil Kamath</h4>
              Co-founder & CFO</p>
          </div>
          <div className="col-4 p-5">
            <img
              src="/images/pic5.jpg"
              style={{ borderRadius: "100%", width: "85%" }}
              alt=""
            />
            <p className="text-center me-3 mt-2">
              <h4>Dr. Kailash Nadh</h4>
              CTO</p>
          </div>
          <div className="col-4 p-5">
            <img
              src="/images/pic6.jpg"
              alt=""
              style={{ borderRadius: "100%", width: "90%" }}
            />
            <p className="text-center me-3 mt-2">
              <h4>Venu Madhav</h4>
              COO</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Team;
