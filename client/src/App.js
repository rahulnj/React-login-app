import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'

import Register from "./Pages/RegisterPage";
import Login from "./Pages/LoginPage";
import Home from "./Pages/HomePage"
import Admin from "./Pages/AdminLogin"
import { AuthContextProvider } from "./Context/AuthContext";


const App = () => {

  return (
    <AuthContextProvider>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </AuthContextProvider>
  )
}





export default App;
