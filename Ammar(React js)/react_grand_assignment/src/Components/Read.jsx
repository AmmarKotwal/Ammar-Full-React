import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Read() {
    let url="https://67bd6cf4321b883e790c62e0.mockapi.io/crud/emp_data";
    let[fetch_data,setfetchdata]=useState([]);
    let[filterdata,setfilterdata]=useState("");
    let [order, setOrder] = useState("");
    let [msg, setMsg] = useState("");
    let [isShow, setisShow] = useState(false);

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [salary, setSal] = useState(0);
    let [pw, setPw] = useState('');
    let [desg, setDesg] = useState('');
    let [dep, setDep] = useState('');
    let [gen, setGen] = useState('');
    let [id, setId] = useState('');

    let loc = useLocation()
    let uname = loc.state?.na;
    let r = loc.state?.dep;



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

    function data_call(a,b,c,d,e,f,g,h) {
        setName(a)
        setEmail(b)
        setSal(c)
        setPw(d)
        setDesg(e)
        setDep(f)
        setGen(g)
        setId(h) 
    }

    function update_data() {
        axios.put(`${url}/${id}`, {
            name: name,
            email: email,
            salary: salary,
            password: pw,
            designation: desg,
            department: dep,
            gender: gen  
        }).then (()=>{
            setfetchdata((old_record)=>old_record.map((a)=>a.id === id ? {...a,
                name: name,
                email: email,
                salary: salary,
                password: pw,
                designation: desg,
                department: dep,
                gender: gen

            }: a ))
            setMsg(`${name}'s Data has Been Updated Successfully`)
            setisShow(true)
        }).catch((e)=>{
            console.error(e)
        })
    }

  return (
    <div>
        <h1>Welcome {uname} <br /> {r}</h1>
        <br />   

<br />
<h1>Employee's Data</h1>
{ r === "admin" &&
    (<div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <Link class="btn btn-primary me-md-2" type="button" to="/">Add Record</Link>
    </div>)
}

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
        <h5 style={{color:"green"}}>{msg}</h5>
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
{
    r === "Manager" && (
        <Link to="" className="card-link">
<button className='btn btn-outline-danger' type="submit" onClick={() => deleteItem(a.id, a.name)}>Delete</button>
</Link>
    )
}
{
    r === "admin" && (
        <div>
            <button onClick={()=>data_call(a.name,a.email,a.salary,a.password,a.designation,a.department,a.gender,a.id)} type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Update
</button>&nbsp;&nbsp;&nbsp;
<Link to="" className="card-link">
<button className='btn btn-outline-danger' type="submit" onClick={() => deleteItem(a.id, a.name)}>Delete</button>
</Link>
        </div>
    )
}
</div>
</div>
    
     </div>
        ))  
    }
     {
            txt_data.length===0&&(
                <h5 style={{color:"red"}}>No Record Found</h5>
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
                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />

                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Salary</label>
                    <input type="number" className="form-control"  value={salary} onChange={(e)=>setSal(e.target.value)} />
                   
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Password</label>
                    <input type="password" className="form-control"value={pw} onChange={(e)=>setPw(e.target.value)} /> 
                   
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Designation</label>
                    <select className='form-select' value={desg} onChange={(e)=>setDesg(e.target.value)}>
                        <option value="" selected={desg === ""}>Please select</option>
                        <option value="Software Engineer" selected={desg === "Software Engineer"}>Software Engineer</option>
                        <option value="HR Manager" selected={desg === "HR Manager"}>HR Manager</option>
                        <option value="Project Manager" selected={desg === "Project Manager"}>Project Manager</option>
                        <option value="Janitor" selected={desg === "Janitor"}>Janitor</option>
                    </select>
                   
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Department</label>
                    <select className='form-select'value={dep} onChange={(e)=>setDep(e.target.value)} >
                        <option value=""  selected={dep === ""}>Please select</option>
                        <option value="Labour" selected={dep === "Labour"}>Labour</option>
                        <option value="Developer" selected={dep === "Developer"}>Developer</option>
                        <option value="HR" selected={dep === "HR"}>HR</option>
                        <option value="Manager" selected={dep === "Manager"}>Manager</option>
                    </select>
                   
                </div>
                <div className='mb-3'>
                    <label className="form-label fw-bold">Gender</label>
                    <div>
                        <input type="radio" className="form-check-input me-2" name='gender' value="male" onChange={(e)=>setGen(e.target.value)} checked={gen === "male"} /> Male
                        <input type="radio" className="form-check-input mx-2" name='gender'value="female" onChange={(e)=>setGen(e.target.value)}  checked={gen === "female"}/>  Female
                        <input type="radio" className="form-check-input mx-2" name='gender' value="custom" onChange={(e)=>setGen(e.target.value)} checked={gen === "custom"} /> Custom
                    </div>
                   
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={()=>{update_data();
            document.querySelector(".close").click()
        }}>Save changes</button>
      </div>
    </div>
  </div>
</div>

</div> 
  )
}
