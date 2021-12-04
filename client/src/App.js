import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'

import Register from "./Pages/RegisterPage";
import Login from "./Pages/LoginPage";
import Home from "./Pages/HomePage"
import { AuthContextProvider } from "./Context/AuthContext";


const App = () => {

  return (
    <AuthContextProvider>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </AuthContextProvider>
  )
}





export default App;
