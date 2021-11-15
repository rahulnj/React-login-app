import React, { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const RegisterForm = ({ error }) => {

    const [details, setDetails] = useState({ name: "", email: "", password: "" })
    const [err, setErr] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(details);
        const userData = {
            name: details.name,
            email: details.email,
            password: details.password
        }
        try {
            const { data } = await axios.post('/auth/register', userData)
            console.log(data);
            if (data) {
                navigate('/login')
            }
        } catch (error) {
            setErr(error.response.data.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='App'>
                <div className="form-inner">
                    <h2>Register</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <input type="submit" value="REGISTER" />
                    <Link to="/login" >Already have an account?</Link>
                    {/* <a >Already have an account?</a> */}
                    {(err != "") ? (<div className="error">{err}</div>) : ""}
                </div>
            </div>
        </form >
    )
}

export default RegisterForm