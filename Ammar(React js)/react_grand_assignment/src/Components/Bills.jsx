import React, {useState} from 'react'
import Table from './Table';


export default function Bills() {
    let [name, setName] = React.useState("");
    let [units, setUnits] = React.useState(0);
    let [bill, setBill] = useState(0);

    function E_Bill_Calc() {
        bill = parseFloat(units) * 25;

        setName(name)
        setUnits(units)
        setBill(bill)
    }

  return (
    <div>
        <div className="container mt-5 p-4 bg-light rounded shadow-lg">
        <br />
        <h1>Electricity Bill Calculator</h1>
        <br />
        <label htmlFor="">Enter Your Name</label>
        <input type="text" className='form-control my-2' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} required/>
        <label htmlFor="">Enter No.Of Units</label>
        <input type="number" className='form-control my-2' placeholder='Enter No.Of Units' value={units} onChange={(e) => setUnits(e.target.value)} required/>
        <br />
        <button className='btn btn-primary fw-bold w-100' onClick={E_Bill_Calc}>Calculate Electricity Bill</button>
        <br />
        <br />
        <Table name={name} units={units} bill={bill} />
        </div>

    </div>
  )
}
