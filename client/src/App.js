import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'

import Register from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home"


const App = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  )
}





export default App;
