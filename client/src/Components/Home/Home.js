import React, { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"



import './Home.css';

function Home() {

    const navigate = useNavigate()
    const logoutHandler = async () => {
        const data = await axios.get('/auth/logout')
        console.log(data);
        if (data) {
            navigate('/login')
        }
    }

    return (
        <div className="welcome">
            <h2>Hi, <span>hi</span></h2>
            <button onClick={logoutHandler} >Logout</button>
        </div>
    )
}

export default Home