import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Pricing() {
  return (
    <div className="container p-5 ">
      <div className="row">
        <div className="col-5 ps-5"> 
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.{" "}
          </p>
          <a href="" className="ms-5" style={{ textDecoration: "none" }}>
            Explore our products <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
        <div className="d-flex ">
            <img src="images/z1.svg" alt="Image 1" className="img-fluid" style={{ maxWidth: "30%" }} />
            <img src="images/z2.svg" alt="Image 2" className="img-fluid" style={{ maxWidth: "30%" }} />
            <img src="images/z3.svg" alt="Image 3" className="img-fluid" style={{ maxWidth: "30%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
