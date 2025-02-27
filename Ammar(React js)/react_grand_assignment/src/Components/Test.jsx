import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Test() {
    let [msg, setMsg] = useState("");
    let nav = useNavigate()

    function get_value() {
        console.log(msg)
        setMsg("");

        if (msg === "Karachi") {
            nav("/kar", {state: {msg: "This Is Karachi"}});
        } else if (msg === "Islamabad") {
            nav("/isl", {state: {msg: "This Is islamabad"}});
        } else if (msg === "Lahore") {
            nav("/lah", {state: {msg: "This Is Lahore"}});
        }
    }
  return (
    <div>
        <br />
        <h1>Test</h1>
        <br />
        <label>Select Any One City</label>
        <select className='form-select' name="select" value={msg} onChange={(e) => setMsg(e.target.value)}>
            <option value="">Select An Option</option>
            <option value="Karachi">Karachi</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Lahore">Lahore</option>
        </select>
        <br />
        <button className="btn btn-outline-success" type="submit" onClick={get_value}>Get</button>
    </div>
  )
}
