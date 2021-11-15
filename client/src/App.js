import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'

import Register from "./pages/Register";
import Login from "./pages/Login";




const App = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route exact path="/login" element={<Login />} />

    </Routes>
  )
}





export default App;
