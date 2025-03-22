import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./Landing_page/Home/HomePage";
import Signup from "./Landing_page/Signup/Signup";
import About from "./Landing_page/About/AboutPage";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  </BrowserRouter>
);