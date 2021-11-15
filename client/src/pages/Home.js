import React, { useState } from "react";
import axios from "axios"

function home() {
    const logoutHandler = async () => {


    }

    return (
        <div className="welcome">
            <h2>Hi, <span>hi</span></h2>
            <button onClick={logoutHandler} >Logout</button>
        </div>
    )
}

export default home
