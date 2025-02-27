import React from 'react';

export default function Cards({ a, b, c, d, e, f, g, h }) {
    return (
        <div className="container my-5">
            <div className="card shadow-lg p-4 rounded">
                <h3 className="text-center mb-3">Employee Details</h3>
                <ul className="list-group">
                    <li className="list-group-item"><strong>Name: </strong>{a}</li>
                    <li className="list-group-item"><strong>Salary: </strong>{b}</li>
                    <li className="list-group-item"><strong>Designation: </strong>{c}</li>
                    <li className="list-group-item"><strong>Department: </strong>{d}</li>
                    <li className="list-group-item"><strong>Gender: </strong>{e}</li>
                    <li className="list-group-item"><strong>Is Permanent: </strong>{f}</li>
                    <li className="list-group-item"><strong>Date of Joining: </strong>{g}</li>
                    <li className="list-group-item"><strong>Age: </strong>{h}</li>
                </ul>
            </div>
        </div>
    );
}
