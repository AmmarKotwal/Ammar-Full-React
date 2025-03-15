import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
    let [uname, setUname] = useState("");
    let [upass, setUPass] = useState("");

    


    let nav = useNavigate()
    const url = "https://67bd6cf4321b883e790c62e0.mockapi.io/crud/emp_data"

    async function login() {
        let api_var = axios.get(url)
        let api_data = (await api_var).data
        let find_record = api_data.find((a)=> (a.name === uname || a.email === uname) &&(a.password === upass))

        if (
            find_record
        ) {
            nav("/read", {state: {na: find_record.name,dep:find_record.department}})
        } else {
            setUname("");
            setUPass("");
            toast.error("Invalid Credentials")
        }
        
    }
  return (
    <div>
        <div className="container mt-5">
            <h1 className="text-center text-primary mb-4">Login</h1>
            <div className='card p-4 shadow-lg' style={{backgroundColor: '#B0C4DE'}}>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Username Or Email</label>
                    <input type="text" className="form-control" value={uname} onChange={(e) => setUname(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Password</label>
                    <input type="password" className="form-control" value={upass} onChange={(e) => setUPass(e.target.value)} />

                </div>
                <div className='d-flex justify-content-between'>
                    <button className="btn btn-primary w-50 me-2 fw-bold" onClick={login}>Login</button>
                    <Link to="/m" className="btn btn-primary w-50 fw-bold">Don't Have Account?</Link>
                </div>
                <ToastContainer />
                </div>
                </div>
    </div>
  )
}
