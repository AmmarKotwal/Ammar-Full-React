import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Read() {
    let url="https://67bd6cf4321b883e790c62e0.mockapi.io/crud/emp_data";
    let[fetch_data,setfetchdata]=useState([]);
    let[filterdata,setfilterdata]=useState("");
    let [order, setOrder] = useState("");

    useEffect(()=>{
        try {
            axios.get(url)
        .then((a)=>{
            setfetchdata(a.data);
            console.log(a.data)
        }).catch((e)=>console.error(e))
        } catch (error) {
            console.error(error)
        }
    },[])

    let txt_data = filterdata?
    fetch_data.filter((a)=>a.name.toLowerCase().includes(filterdata.toLowerCase())):fetch_data

    if (order  === "1") {
        txt_data.sort((a, b) => a.salary - b.salary);
        
    } else if ( order === "2") {
        txt_data.sort((a, b) => b.salary- a.salary);
    }


    function deleteItem(index) {
        if (window.confirm("Are you sure you want to delete this item?")) {
            setfetchdata(fetch_data.filter((_, i) => i !== index));
        }
    }

  return (
    <div>
        <br />
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
<Link class="btn btn-primary me-md-2" type="button" to="/">Add Record</Link>
</div>
<br />
<h1>Employee's Data</h1>

<div className="container">
    <input type="text" className="form-control my-3" placeholder="Search" value={filterdata} onChange={(a)=>setfilterdata(a.target.value)}/>
    <br />
            <select className='form-select my-3' value={order} onChange={(e) => setOrder(e.target.value)}>
                <option value="">Sort</option>
                <option value="1">Ascending Order</option>
                <option value="2">Descending Order</option>
            </select>
            <br />
<div className="row">

    {
        txt_data.map((a, index)=>(
            <div className="col-md-3 mb-4">
    <div className="card h-100">
<div className="card-body">
<h3 className="card-title">{a.name}</h3>
<h6 className="card-subtitle mb-2 text-muted">{a.email}</h6>
<p className="card-text">{a.salary}</p>
<Link to="/update" className="card-link">
<button className='btn btn-outline-warning' type="submit">Update</button>
</Link>
<Link to="" className="card-link">
<button className='btn btn-outline-danger' type="submit" onClick={() => deleteItem(index)}>Delete</button>
</Link>
</div>
</div>
    
     </div>
        ))  
    }
     {
            txt_data.length===0&&(
                <p style={{color:"red"}}>No Record Found</p>
            )}
</div>
</div>

</div> 
  )
}
