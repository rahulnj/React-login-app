import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home"


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
