import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'

import Register from "./Pages/RegisterPage";
import Login from "./Pages/LoginPage";
import Home from "./Pages/HomePage"
import Admin from "./Pages/AdminLoginPage"
import AdminHome from "./Pages/AdminHomePage"
import { AuthContextProvider } from "./Context/AuthContext";


const App = () => {

  return (
    <AuthContextProvider>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/adminhome" element={<AdminHome />} />

      </Routes>
    </AuthContextProvider>
  )
}





export default App;
