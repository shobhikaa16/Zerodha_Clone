import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="pt-5 mt-5 mb-5 text-light" id="supportWrapper">
        <h4 className="">Support portal</h4>
        <a href="" style={{ color: "white" }}>
          Track Tickets
        </a>
      </div>
      <div className="row ps-5 mt-5  ms-5 mb-5 text-light" >
        <div className=" col-6  p-5 mt-5mb-5 ">
          <p style={{fontSize:"25px"}}>Search for an answer or browse help topics to create a ticket</p>
          <div className="d-flex ">
          <input type="text" placeholder="Eg. how do I activate F&O,why is my order getting rejected... " className="bg-white p-3 " style={{width:"100%"}} />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="bg-white p-4" style={{color:"gray", fontWeight:"bold"}} />
          </div>
          <br />
          <div className="mt-2">
          <a href="" style={{ color: "white", marginRight:"13px",fontSize:"17px" }}>Track account opening</a>
          <a href="" style={{ color: "white", marginRight:"13px",fontSize:"17px"  }}>Track segment activation</a>
          <a href="" style={{ color: "white", marginRight:"13px",fontSize:"17px"  }}>Intraday margins</a><br />
          <a href="" style={{ color: "white",fontSize:"17px" }}>Kite user manual</a>
          </div>
          

        </div>
        <div className=" col-6  mt-5 mb-5 ">
          <p style={{fontSize:"25px", marginTop:"30px"}}>Featured</p>
          <a href="" style={{ color: "white"}}>1. Latest Intraday leverages and Square-off timings</a><br />
          <a href="" className="mt-3" style={{ color: "white"}}>1. Latest Intraday leverages and Square-off timings</a>

        </div>
      </div>
    </section>
  );
}

export default Hero;
