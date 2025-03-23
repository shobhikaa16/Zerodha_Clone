import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function RightSection({
  imageURL,
  productName,
  productDescription,

  learnMore,
}) {
  return (
    <div className="container mb-5">
      <div className="row mt-5 ms-5">
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mb-4">
            <a href={learnMore} >
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div className="col-6 mt-5 ">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
