import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/api/loginuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Post request successful:', data);
            if (!data.success) {
                alert("Enter Valid Credential");
            }
            if (data.success) {
                navigate("/");
            }

        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/register" className='m-3 btn btn-danger'>Sign up User</Link>
                </form>
            </div>
        </>
    )
}
