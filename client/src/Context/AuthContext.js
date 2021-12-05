import React, { useState, createContext, useEffect } from 'react'
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState('')
    // console.log(loggedIn);
    //run once
    useEffect(() => {
        getUserData()
    }, [])


    useEffect(() => {
        saveUserDatatoLocal()
    }, [loggedIn])



    const saveUserDatatoLocal = () => {
        localStorage.setItem("user", JSON.stringify(loggedIn))
    }
    const getUserData = () => {
        if (localStorage.getItem('user') === null) {
            localStorage.setItem('user', JSON.stringify([]))
        } else {
            let LocalUser = JSON.parse(localStorage.getItem('user'));
            console.log(LocalUser);
            setLoggedIn(LocalUser);
        }

    }






    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}


