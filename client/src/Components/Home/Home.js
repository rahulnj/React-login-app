import React, { useContext, useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

import './Home.css';
import { AuthContext } from "../../Context/AuthContext";

function Home() {
    const { loggedIn } = useContext(AuthContext)
    console.log(loggedIn);

    const navigate = useNavigate()
    const logoutHandler = async () => {
        const data = await axios.get('/auth/logout')
        console.log(data);
        if (data) {
            localStorage.removeItem('user');
            navigate('/login')
        }
    }

    return (
        <div className="welcome">
            <h2>Hi, <span>{loggedIn.name}</span></h2>
            <button onClick={logoutHandler} >Logout</button>
        </div>
    )
}

export default Home