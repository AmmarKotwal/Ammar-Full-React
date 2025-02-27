import React, {useState} from 'react'

export default function Get_ValueFromInputField() {
    let [name, setName] = useState('')
    let [f_name, setFname] = useState('')
    let [m_name, setMname] = useState('')
    let [email, setEmail] = useState('')
    let [dob, setDob] = useState('')
    let [no_of_siblings, setNo_of_siblings] = useState(0)
    let [address, setAddress] = useState('')
    let [ph_no, setPh_no] = useState('')

    function get_value() {
        console.log(name)
        console.log(f_name)
        console.log(m_name)
        console.log(email)
        console.log(dob)
        console.log(no_of_siblings)
        console.log(address)
        console.log(ph_no)

        
    }

  return (
    <div>
        <br />
        <div className="container">
            <label htmlFor="">Enter Your Name</label>
            <input type="text" className='form-control my-2' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} required />
            <label htmlFor="">Enter Your Father's Name</label>
            <input type="text" className='form-control my-2' placeholder="Enter Your Father's Name" value={f_name} onChange={(e) => setFname(e.target.value)} required/>
            <label htmlFor="">Enter Your Mother's Name</label>
            <input type="text" className='form-control my-2' placeholder="Enter Your Mother's Name" value={m_name} onChange={(e) => setMname(e.target.value)} required/>
            <label htmlFor="">Enter Your Email</label>
            <input type="email" className='form-control my-2' placeholder='Enter Your Email ' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <label htmlFor="">Enter Your DOB</label>
            <input type="date" className='form-control my-2' placeholder='Enter Your Date of Birth' value={dob} onChange={(e) => setDob(e.target.value)} required/>
            <label htmlFor="">Enter Your No. of Siblings</label>
            <input type="number" className='form-control my-2' placeholder='Enter Your No. of Siblings' value={no_of_siblings} onChange={(e) => setNo_of_siblings(e.target.value)} required/>
            <label htmlFor="">Enter Your Address</label>
            <input type="text" className='form-control my-2' placeholder='Enter Your Address' value={address} onChange={(e) => setAddress(e.target.value)} required />
            <label htmlFor="">Enter Your Phone Number</label>
            <input type="tel" className='form-control my-2' placeholder='Enter Your Phone Number' value={ph_no} onChange={(e) => setPh_no(e.target.value)} required/>
        </div>
        <br />
        <button className="btn btn-primary" onClick={get_value}>Get Value</button>

    </div>
  )
}
