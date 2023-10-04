import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Register() {
    const [credentials, setCredentials] = useState({name:"", email: "", password: "", location: ""})

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/api/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.location
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Post request successful:', data);
            if(!data.success){
                alert("Enter Valid Credential");
            }
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle errors
        });
    }
    const onChange = (e) => {
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name </label>
                        <input type="text" className="form-control" id="name" name='name' value={credentials.name} onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password"  name='password' value={credentials.password} onChange={onChange}/>
                        <div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">address</label>
                        <input type="text" className="form-control" id="location"  name='location' value={credentials.location} onChange={onChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already User</Link>
                </form>
            </div>
        </>
    )
}
