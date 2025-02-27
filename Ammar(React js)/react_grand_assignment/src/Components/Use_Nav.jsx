import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Use_Nav() {
    let [uname, setUname] = useState("");
    let [pass, setPass] = useState("");
    let [msg, setMsg] = useState("");
    let [is_show, setIs_show] = useState(false);
    let nav = useNavigate()

    function login_logic() {
        if (uname.toLowerCase() === "ammar" && pass.toLowerCase() === "123") {
            nav("/pro", {state: {msg: "This Msg Is From Login", u: uname}});
        }else {
            setMsg("Invalid Username Or Password")
            setIs_show(true)
        }
    }

  return (
    <div>
        <div className="container">
            <br />
            <h1 className="text-center">Login Page</h1>
            <br />
                <label>Enter Your Name</label>&nbsp;
                <input type="text" value={uname} onChange={(e) => setUname(e.target.value)} placeholder="Username"/>
                <br />
                <br />
                <label>Enter Your Password</label>&nbsp;
                <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password"/>
                <br />
                <br />

                <button className='btn btn-outline-success' onClick={login_logic}>Login</button>
                <br />
                <br />
                {
                    is_show && (
                        <h4 style={{color: "red"}}>{msg}</h4>
                    )
                }
        </div>

    </div>
  )
}
