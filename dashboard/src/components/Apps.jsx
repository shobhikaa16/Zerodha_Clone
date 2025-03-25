import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard"; // Keep Dashboard import
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";

const Appp = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Summary />} />
        <Route path="orders" element={<Orders />} />
        <Route path="holdings" element={<Holdings />} />
        <Route path="positions" element={<Positions />} />
        <Route path="funds" element={<Funds />} />
        <Route path="apps" element={<Apps />} />
      </Route>
    </Routes>
  );
};

export default Appp;
