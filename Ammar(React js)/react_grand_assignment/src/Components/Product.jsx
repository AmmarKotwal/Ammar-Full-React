import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Product() {
    let useloc = useLocation();
    let a = useloc.state?.msg;
    let b = useloc.state?.u;
    let student = [
        {id: 1, name: "std1" , age: 20 , fees: 5000},
        {id: 2, name: "std2" , age: 21 , fees: 6000},
        {id: 3, name: "std3" , age: 22 , fees: 7000},
        {id: 4, name: "std4" , age: 23 , fees: 8000},
        {id: 5, name: "std5" , age: 24 , fees: 9000},
        {id: 6, name: "std6" , age: 25 , fees: 10000},

    ]

  return (
    <div>
        <h1>Welcome! {b}</h1>
        <h6>{a}</h6>
        <div className="container">
            <div className="row">
                {
                    student.map((a)=>(
                        <div className="mt-3 col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">{a.name}</h4>
                                    <p className="card-text"> <strong>Fees:</strong> {a.fees}</p>
                                    <Link className='btn btn-outline-warning' to={`/sd/${a.id}`}>Details</Link>
                            </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}
