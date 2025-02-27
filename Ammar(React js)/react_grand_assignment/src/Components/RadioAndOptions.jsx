import React, { useState } from 'react';
import Cards from './Cards';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RadioAndOptions() {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState(0);
    const [designation, setDesignation] = useState("");
    const [department, setDepartment] = useState("");
    const [gender, setGender] = useState("");
    const [is_perm, setIs_perm] = useState("");
    const [date_of_join, setDate_of_join] = useState("");
    const [age, setAge] = useState(0);

    function get_values() {
        console.log(name, salary, designation, department, gender, is_perm, date_of_join, age);
        // Reset all values after form submission
        setName("");
        setSalary(0);
        setDesignation("");
        setDepartment("");
        setGender("");
        setIs_perm("");
        setDate_of_join("");
        setAge(0);
    }

    return (
        <div className="container my-5">
            <div className="card shadow-lg p-4 rounded">
                <h2 className="text-center mb-4">Employee Details Form</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                        <label className="form-label">Enter Your Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Enter Your Salary</label>
                        <input type="number" className="form-control" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Your Salary" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Select Your Designation</label>
                        <select className="form-select" value={designation} onChange={(e) => setDesignation(e.target.value)} required>
                            <option value="">Select</option>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Data Scientist">Data Scientist</option>
                            <option value="Product Manager">Product Manager</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Select Your Department</label>
                        <select className="form-select" value={department} onChange={(e) => setDepartment(e.target.value)} required>
                            <option value="">Select</option>
                            <option value="IT">IT</option>
                            <option value="Finance">Finance</option>
                            <option value="HR">HR</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <div>
                            <input type="radio" id="male" checked={gender === "M"} name="gender" value="M" onChange={(e) => setGender(e.target.value)} />
                            <label className="form-check-label" htmlFor="male">Male</label>
                            <input type="radio" id="female" checked={gender === "F"} name="gender" value="F" onChange={(e) => setGender(e.target.value)} className="ms-3" />
                            <label className="form-check-label" htmlFor="female">Female</label>
                            <input type="radio" id="others" checked={gender === "O"} name="gender" value="O" onChange={(e) => setGender(e.target.value)} className="ms-3" />
                            <label className="form-check-label" htmlFor="others">Others</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Is Permanent</label>
                        <div>
                            <input type="radio" id="yes" checked={is_perm === "Y"} name="perm" value="Y" onChange={(e) => setIs_perm(e.target.value)} />
                            <label className="form-check-label" htmlFor="yes">Yes</label>
                            <input type="radio" id="no" checked={is_perm === "N"} name="perm" value="N" onChange={(e) => setIs_perm(e.target.value)} className="ms-3" />
                            <label className="form-check-label" htmlFor="no">No</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Date of Join</label>
                        <input type="date" className="form-control" value={date_of_join} onChange={(e) => setDate_of_join(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Your Age" required />
                    </div>

                    <div className="text-center">
                        <button className="btn btn-outline-dark w-50" onClick={get_values}>Submit</button>
                    </div>
                </form>
            </div>

            <Cards
                a={name}
                b={salary}
                c={designation}
                d={department}
                e={gender}
                f={is_perm}
                g={date_of_join}
                h={age}
            />
        </div>
    );
}
