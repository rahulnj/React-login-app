import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom"


const LoginForm = ({ Login, error }) => {
    const [details, setDetails] = useState({ name: "", email: "", password: "" })
    const submitHandler = async e => {
        e.preventDefault();
        const userData = {
            name: details.name,
            email: details.email,
            password: details.password
        }
        Login(details)
        try {
            const { data } = await axios.post('/auth/login', userData)
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='App'>
                <div className="form-inner">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <input type="submit" value="LOGIN" />
                    <Link to="/" >Don't have an account?</Link>
                    {(error != "") ? (<div className="error">{error}</div>) : ""}
                </div>
            </div>
        </form >
    )
}


export default LoginForm