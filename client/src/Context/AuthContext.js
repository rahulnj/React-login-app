import React, { useState, createContext, useEffect } from 'react'
import axios from "axios"
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(undefined)
    const getLoggedIn = async () => {
        const { resData } = await axios.post('/auth/login');
        setLoggedIn(resData)
    }
    useEffect(() => {
        getLoggedIn()
    }, [])



    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}


