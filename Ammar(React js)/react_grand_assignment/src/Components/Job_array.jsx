import React, { useState } from 'react'

export default function Job_array() {
    let array_of_obj = [
        {job_title: "Software Engineer", job_description: "Develop software applications", salary_offered: 10000, address: "Karachi"},
        {job_title: "Data Scientist", job_description: "Analyze data", salary_offered: 15000, address: "Lahore"},
        {job_title: "Product Manager", job_description: "Manage products", salary_offered: 20000, address: "Peshawar"},
        {job_title: "Product Manager", job_description: "ABC", salary_offered: 25000, address: "Queta"},
        {job_title: "Product Manager", job_description: "DEF", salary_offered: 30000, address: "Islamabad"},
        {job_title: "Product Manager", job_description: "GHI", salary_offered: 40000, address: "Multan"},
        {job_title: "Product Manager", job_description: "JKL", salary_offered: 50000, address: "Faisalabad"},
        {job_title: "Product Manager", job_description: "XYZ", salary_offered: 60000, address: "Kashmir"},   
    ]

    let [search, setSearch] = useState("");
    let [order, setOrder] = useState("");

    let filter = search ? array_of_obj.filter((a)=>a.job_title.toLowerCase().includes(search.toLowerCase())) : array_of_obj
    
    if (order  === "1") {
        filter.sort((a, b) => a.salary_offered - b.salary_offered);
        
    } else if ( order === "2") {
        filter.sort((a, b) => b.salary_offered - a.salary_offered);
    }

  return (
    <div>
        <br />
        <br />
        <h1>Job Array</h1>
        <br />
        <div className="container">
            <input className='form-control my-3' type="text" placeholder="Search for jobs..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <br />
            <select className='form-select my-3' value={order} onChange={(e) => setOrder(e.target.value)}>
                <option value="">Sort</option>
                <option value="1">Ascending Order</option>
                <option value="2">Descending Order</option>
            </select>
            <br />
            <div className="row">
        {filter.map((a)=>(
            <div className="container my-5">
            <div className="card shadow-lg p-4 rounded">
                <h3 className="text-center mb-3">Employee Details</h3>
                <ul className="list-group">
                    <li className="list-group-item"><strong>Job Title: </strong>{a.job_title}</li>
                    <li className="list-group-item"><strong>Job Description: </strong>{a.job_description}</li>
                    <li className="list-group-item"><strong>Salary_Offered: </strong>{a.salary_offered}</li>
                    <li className="list-group-item"><strong>Address: </strong>{a.address}</li>
                </ul>
            </div>
        </div>             
        ))}
        </div>
        </div>
        { filter.length === 0 ?(<p style={{color: "red"}}>No Jobs Found</p>): "" }
    </div>
  )
}
