import React, { useContext } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"

import './Home.css';
import { AuthContext } from "../../Context/AuthContext";

function Home() {
    const { loggedIn, setLoggedIn } = useContext(AuthContext)

    console.log(loggedIn);

    const navigate = useNavigate()
    const logoutHandler = async () => {
        const data = await axios.get('/auth/logout')
        console.log(data);
        if (data) {
            localStorage.removeItem('user');
            setLoggedIn('')
            navigate('/home')
        }
    }

    return (
        <div className="welcome">
            <h2>Hi, <span>{loggedIn.name}</span></h2>
            {loggedIn ? <button onClick={logoutHandler} >Logout</button> : ''}
        </div>
    )
}

export default Home