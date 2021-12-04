import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'

import Register from "./Pages/RegisterPage";
import Login from "./Pages/LoginPage";
import Home from "./Pages/HomePage"


const App = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  )
}





export default App;
