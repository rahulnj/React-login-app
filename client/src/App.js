import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'

import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {

  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Register />} />
    </Routes>
  )
}





export default App;
