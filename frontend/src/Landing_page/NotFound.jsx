import React from "react";

function NotFound() {
  return (
    <div className="container p-10 mb-5 mt-5">
      <div className="row text-center d-flex flex-column align-items-center">
        <h1 style={{ fontSize: "2rem" }} className="mt-4">
          Page not found. Error: 404
        </h1>
        <p className="fs-6 mt-3">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
