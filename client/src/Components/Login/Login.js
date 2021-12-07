import React, { useState, useContext } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import './Login.css';
import { AuthContext } from "../../Context/AuthContext";


function Login() {

    const { loggedIn, setLoggedIn } = useContext(AuthContext)


    const [details, setDetails] = useState({ email: "", password: "" })
    const [userData, setUserData] = useState('')
    const [admin, setAdmin] = useState('')
    const [err, setErr] = useState('')
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault();
        const userData = {
            email: details.email,
            password: details.password
        }

        try {
            const { data } = await axios.post('/auth/login', userData);
            if (data && !data.isAdmin) {
                setUserData(data)
                setLoggedIn(data)
                navigate('/home')
            } else if (data && data.isAdmin) {
                setAdmin(data)
                console.log("admin", data);
            }
        } catch (error) {
            console.log(error);
            setErr(error.response.data.message)
        }
    }


    return (

        <form onSubmit={handleLogin}>
            <div className='form-container'>
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
                    {(err !== "") ? (<div className="error">{err}</div>) : ""}
                </div>
            </div>
        </form >

    )
}

export default Login
