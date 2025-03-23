import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appstore,
}) {
  return (
    <div className="container mb-5">
      <div className="row mt-5 ms-5">
        <div className="col-6 mt-5 ">
          <img src={imageURL}  />
        </div>
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mb-4">
            <a href={tryDemo}>Try demo <FontAwesomeIcon icon={faArrowRight} /></a>
            <a href={learnMore} style={{marginLeft:"100px"}}>Learn More <FontAwesomeIcon icon={faArrowRight} /></a>
          </div>
          <div className="d-flex">
            <a href={googlePlay} style={{ textDecoration: "none" }}>
              <img src="/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appstore} style={{ textDecoration: "none" }}>
              <img src="/images/appstoreBadge.svg" style={{marginLeft:"30px"}} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
