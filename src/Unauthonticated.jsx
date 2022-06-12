import React from "react";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Route, Routes } from "react-router-dom";

const Unauthonticated = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Unauthonticated;
