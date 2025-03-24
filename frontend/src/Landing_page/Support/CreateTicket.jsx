import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function CreateTicket() {
  return (
    <div className="container mt-5">
      <div className="row p-5 mt-5 mb-5">
        <p className="text-muted" style={{ fontSize: "22px" }}>
          To create a ticket, select a relevant topic
        </p>
      </div>

      <div className="row p-5">
        <div className="col-4 p-5 ">
          <p style={{ fontSize: "18px" }}>
            <FontAwesomeIcon icon={faCirclePlus} className="me-2" />
            Account Opening
          </p>
          <ul className="list-unstyled ms-4 space-y-3">
            <li>
              <a href="#" className="text-decoration-none">
                Resident Individual
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Minor
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Non-Resident Indian (NRI)
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Company, Partnership, HUF and LLP
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Glossary
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4 p-5">
          <p style={{ fontSize: "18px" }}>
            <FontAwesomeIcon icon={faCirclePlus} className="me-2" />
            Your Zerodha Account
          </p>
          <ul className="list-unstyled ms-4 space-y-3">
            <li>
              <a href="#" className="text-decoration-none">
                Resident Individual
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Minor
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Non-Resident Indian (NRI)
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Company, Partnership, HUF and LLP
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Glossary
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4 p-5">
          <p style={{ fontSize: "18px" }}>
            <FontAwesomeIcon icon={faCirclePlus} className="me-2" />
            Kite
          </p>
          <ul className="list-unstyled ms-4 space-y-3">
            <li>
              <a href="#" className="text-decoration-none">
                Resident Individual
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Minor
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Non-Resident Indian (NRI)
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Company, Partnership, HUF and LLP
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Glossary
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row p-5">
        <div className="col-4 p-5 ">
          <p style={{ fontSize: "18px" }}>
            <FontAwesomeIcon icon={faCirclePlus} className="me-2" />
            Funds
          </p>
          <ul className="list-unstyled ms-4 space-y-3">
            <li>
              <a href="#" className="text-decoration-none">
                Resident Individual
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Minor
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Non-Resident Indian (NRI)
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Company, Partnership, HUF and LLP
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Glossary
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4 p-5">
          <p style={{ fontSize: "18px" }}>
            <FontAwesomeIcon icon={faCirclePlus} className="me-2" />
            Console
          </p>
          <ul className="list-unstyled ms-4 space-y-3">
            <li>
              <a href="#" className="text-decoration-none">
                Resident Individual
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Minor
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Non-Resident Indian (NRI)
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Company, Partnership, HUF and LLP
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Glossary
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4 p-5">
          <p style={{ fontSize: "18px" }}>
            <FontAwesomeIcon icon={faCirclePlus} className="me-2" />
            Coin
          </p>
          <ul className="list-unstyled ms-4 space-y-3 ">
            <li>
              <a href="#" className="text-decoration-none">
                Resident Individual
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Minor
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Non-Resident Indian (NRI)
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Company, Partnership, HUF and LLP
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Glossary
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
