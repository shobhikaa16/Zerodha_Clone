import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./Landing_page/Navbar";
import HomePage from "./Landing_page/Home/HomePage";
import Signup from "./Landing_page/Signup/Signup";
import AboutPage from "./Landing_page/About/AboutPage";
import ProductPage from "./Landing_page/Products/ProductPage";
import PricingPage from "./Landing_page/Pricing/PricingPage";
import SupportPage from "./Landing_page/Support/SupportPage";
import Footer from "./Landing_page/Footer";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
