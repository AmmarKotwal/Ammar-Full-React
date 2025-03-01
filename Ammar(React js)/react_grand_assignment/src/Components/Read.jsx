import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Read() {
    let url="https://67bd6cf4321b883e790c62e0.mockapi.io/crud/emp_data";
    let[fetch_data,setfetchdata]=useState([]);
    let[filterdata,setfilterdata]=useState("");
    let [order, setOrder] = useState("");
    let [msg, setMsg] = useState("");
    let [isShow, setisShow] = useState(false);


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

    if (order  === "3") {
        txt_data.sort((a, b) => a.salary - b.salary);
        
    } else if ( order === "4") {
        txt_data.sort((a, b) => b.salary- a.salary);

    } else if ( order === "1") {
        txt_data.sort((a, b)=>a.name.localeCompare(b.name));

    } else if ( order === "2") {
        txt_data.sort((a, b)=>b.name.localeCompare(a.name));
    }    


    function deleteItem(id, name) {
        try {
            if (window.confirm(`Are you sure you want to delete ${name}'s record?`)) {
                axios.delete(`${url}/${id}`)
                .then(()=>{
                    setfetchdata((old_record)=>old_record.filter((a)=>a.id !== id))
                    setMsg(`${name}'s record has been deleted successfully`)
                    setisShow(true)
                }).catch((e)=>{
                    console.error(e)
                })
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=> {
        if (isShow === true) {
            let time = setTimeout(() => {
                setisShow(false)
            }, 2000);
            return () => clearTimeout(time);
        }
    }, [isShow])

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
                <option value="1">By Name (A-Z)</option>
                <option value="2">By Name (Z-A)</option>
                <option value="3">By Salary In Ascending Order</option>
                <option value="4">By Salary In Descending Order</option>
            </select>
            <br />
            {
    isShow === true && (
        <p style={{color:"green"}}>{msg}</p>
    )}
<br />
<div className="row">

    {
        txt_data.map((a, id)=>(
            <div className="col-md-3 mb-4">
    <div className="card h-100">
<div className="card-body">
<h3 className="card-title">{a.name}</h3>
<h6 className="card-subtitle mb-2 text-muted">{a.email}</h6>
<p className="card-text">{a.salary}</p>
<button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Update
</button>&nbsp;&nbsp;&nbsp;
<Link to="" className="card-link">
<button className='btn btn-outline-danger' type="submit" onClick={() => deleteItem(a.id, a.name)}>Delete</button>
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

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Update Form</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{backgroundColor: '#B0C4DE'}}>
      <div className='mb-3'>
                    <label className="form-label fw-bold">Name</label>
                    <input type="text" className="form-control"  />

                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Email</label>
                    <input type="email" className="form-control" />
                    
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Salary</label>
                    <input type="number" className="form-control"  />
                   
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Password</label>
                    <input type="password" className="form-control" />
                   
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Designation</label>
                    <select className='form-select' >
                        <option value="">Please select</option>
                        <option value="Software Engineer">Software Engineer</option>
                        <option value="HR Manager">HR Manager</option>
                        <option value="Project Manager">Project Manager</option>
                        <option value="Janitor">Janitor</option>
                    </select>
                   
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Department</label>
                    <select className='form-select'>
                        <option value="">Please select</option>
                        <option value="Labour">Labour</option>
                        <option value="Developer">Developer</option>
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                    </select>
                   
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Gender</label>
                    <div>
                        <input type="radio" className="form-check-input me-2" name='gender' /> Male
                        <input type="radio" className="form-check-input mx-2" name='gender' /> Female
                        <input type="radio" className="form-check-input mx-2" name='gender' /> Custom
                    </div>
                   
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</div> 
  )
}
