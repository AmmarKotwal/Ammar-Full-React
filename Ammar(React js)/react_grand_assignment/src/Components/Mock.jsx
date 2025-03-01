import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Mock() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [salary, setSal] = useState(0);
    let [pw, setPw] = useState('');
    let [desg, setDesg] = useState('');
    let [dep, setDep] = useState('');
    let [gen, setGen] = useState('');
    let [msg, setMsg] = useState('');
    let [trigger, setTrigger] = useState(false);
    let [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Invalid email format";
        }
        if (!salary || salary <= 0) newErrors.salary = "Salary must be greater than 0";
        if (!pw || pw.length < 6) newErrors.pw = "Password must be at least 6 characters";
        if (!desg) newErrors.desg = "Designation is required";
        if (!dep) newErrors.dep = "Department is required";
        if (!gen) newErrors.gen = "Gender selection is required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    async function dataIn(e) {
        if (!validateForm()) return;
        
        try {
            let data = await axios.post('https://67bd6cf4321b883e790c62e0.mockapi.io/crud/emp_data', {
                name, email, salary, password: pw, designation: desg, department: dep, gender: gen
            });
            setMsg("Form Submitted Successfully!");
            setTrigger(true);
            setName('');
            setEmail('');
            setSal(0);
            setPw('');
            setDesg('');
            setDep('');
            setGen('');
            setErrors({});
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center text-primary mb-4">Add Record</h1>
            <div className='card p-4 shadow-lg' style={{backgroundColor: '#B0C4DE'}}>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                    {errors.name && <p className="text-danger small">{errors.name}</p>}
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <p className="text-danger small">{errors.email}</p>}
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Salary</label>
                    <input type="number" className="form-control" value={salary} onChange={(e) => setSal(e.target.value)} />
                    {errors.salary && <p className="text-danger small">{errors.salary}</p>}
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Password</label>
                    <input type="password" className="form-control" value={pw} onChange={(e) => setPw(e.target.value)} />
                    {errors.pw && <p className="text-danger small">{errors.pw}</p>}
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Designation</label>
                    <select className='form-select' value={desg} onChange={(e) => setDesg(e.target.value)}>
                        <option value="">Please select</option>
                        <option value="Software Engineer">Software Engineer</option>
                        <option value="HR Manager">HR Manager</option>
                        <option value="Project Manager">Project Manager</option>
                        <option value="Janitor">Janitor</option>
                    </select>
                    {errors.desg && <p className="text-danger small">{errors.desg}</p>}
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Department</label>
                    <select className='form-select' value={dep} onChange={(e) => setDep(e.target.value)}>
                        <option value="">Please select</option>
                        <option value="Labour">Labour</option>
                        <option value="Developer">Developer</option>
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                    </select>
                    {errors.dep && <p className="text-danger small">{errors.dep}</p>}
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Gender</label>
                    <div>
                        <input type="radio" className="form-check-input me-2" name='gender' value='male' checked={gen === 'male'} onChange={(e) => setGen(e.target.value)} /> Male
                        <input type="radio" className="form-check-input mx-2" name='gender' value='female' checked={gen === 'female'} onChange={(e) => setGen(e.target.value)} /> Female
                        <input type="radio" className="form-check-input mx-2" name='gender' value='custom' checked={gen === 'custom'} onChange={(e) => setGen(e.target.value)} /> Custom
                    </div>
                    {errors.gen && <p className="text-danger small">{errors.gen}</p>}
                </div>
                <div className='d-flex justify-content-between'>
                    <button className="btn btn-primary w-50 me-2 fw-bold" onClick={dataIn}>Submit</button>
                    <Link to="/read" className="btn btn-primary w-50 fw-bold">View Record</Link>
                </div>
            </div>
            {trigger && <div className='alert alert-success mt-4 text-center'>{msg}</div>}
        </div>
    );
}
