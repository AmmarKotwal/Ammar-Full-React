import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function MockApi_test() {

    //form states
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

    //show datat states
    let url="https://67bd6cf4321b883e790c62e0.mockapi.io/crud/emp_data";
    let[fetch_data,setfetchdata]=useState([]);
    let [isShow, setisShow] = useState(false);

    //form validations
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

    //form submit functions
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

    //show data functions
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
        
    }

  return (
    <div>
        <br />
        <h1>Mock API Test</h1>
        <br />
        <button onClick={(a)=>data_call(a.name,a.email,a.salary,a.password,a.designation,a.department,a.gender,a.id)} type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Employee Record
</button>
<br />
<div className="container">
{
    isShow === true && (
        <h5 style={{color:"green"}}>{msg}</h5>
    )}
<br />
    <div className="row">
        {
        fetch_data.map((a, id)=>(
    <table className="table table-striped table-hover">
    <thead className="table-info">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Salary</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Gender</th>
        </tr>
    </thead>
        <tbody>
            <td>{a.name}</td>
            <td>{a.email}</td>
            <td>{a.password}</td>
            <td>{a.salary}</td>
            <td>{a.designation}</td>
            <td>{a.department}</td>
            <td>{a.gender}</td>
        </tbody>

</table>
))}
{
            fetch_data.length===0&&(
                <p style={{color:"red"}}>No Record Found</p>
            )}
    </div>
</div>

 

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Employee's Data Form</h1>
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
        <button className="btn btn-primary w-50 me-2 fw-bold" onClick={dataIn}>Submit</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
