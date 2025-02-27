import React, { useState } from 'react';
import P_table from './P_table';

export default function Pizza() {
    let [name, setName] = useState("");
    let [ph_no, setPh_no] = useState("");
    let [flavour, setFlavour] = useState("");
    let [size, setSize] = useState("");
    let [crust, setCrust] = useState("");

    function pizza() {
        console.log(name, ph_no, flavour, size, crust);
    }

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Pizza Ordering Form</h1>

            <div className="card p-4 shadow-sm">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter Pizza's Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        placeholder="Enter pizza name"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="ph_no" className="form-label">Enter Phone Number</label>
                    <input
                        type="tel"
                        id="ph_no"
                        value={ph_no}
                        onChange={(e) => setPh_no(e.target.value)}
                        className="form-control"
                        placeholder="Enter your phone number"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="flavour" className="form-label">Select Pizza's Flavour</label>
                    <select
                        id="flavour"
                        value={flavour}
                        onChange={(e) => setFlavour(e.target.value)}
                        className="form-select"
                    >
                        <option value="Margherita">Margherita</option>
                        <option value="Pepperoni">Pepperoni</option>
                        <option value="Hawaiian">Hawaiian</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="size" className="form-label">Select Pizza's Size</label>
                    <select
                        id="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="form-select"
                    >
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Select Pizza's Crust:</label>&nbsp;&nbsp;
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            id="thin"
                            name="crust"
                            value="Thin"
                            onChange={(e) => setCrust(e.target.value)}
                            className="form-check-input"
                        />
                        <label htmlFor="thin" className="form-check-label">Thin Crust</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            id="stuffed"
                            name="crust"
                            value="Stuffed"
                            onChange={(e) => setCrust(e.target.value)}
                            className="form-check-input"
                        />
                        <label htmlFor="stuffed" className="form-check-label">Stuffed Crust</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            id="pan"
                            name="crust"
                            value="Pan"
                            onChange={(e) => setCrust(e.target.value)}
                            className="form-check-input"
                        />
                        <label htmlFor="pan" className="form-check-label">Pan Crust</label>
                    </div>
                </div>

                <button onClick={pizza} className="btn btn-primary w-100">Save</button>
            </div>

            <div className="mt-4">
                <P_table a={name} b={ph_no} c={flavour} d={size} e={crust} />
            </div>
        </div>
    );
}
