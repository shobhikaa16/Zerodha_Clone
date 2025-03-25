import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import Apps from "./components/Apps"; // Ensure App.jsx exists
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ="/*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
