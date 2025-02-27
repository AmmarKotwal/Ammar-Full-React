import React from 'react'
import { Link } from 'react-router-dom'

export default function 
Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
            <Link className="navbar-brand text-success" style={{fontWeight: 'bold', marginBottom: '20px' }} to="/">COURIER</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link className="nav-link text-success" style={{fontWeight: 'bold', marginBottom: '20px' }} to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link text-success" style={{fontWeight: 'bold', marginBottom: '20px' }} to="/a">About</Link></li>
                    <li className="nav-item"><Link className="nav-link text-success" style={{fontWeight: 'bold', marginBottom: '20px' }} to="/f">Feedback</Link></li>
                    <li className="nav-item"><Link className="nav-link text-success" style={{fontWeight: 'bold', marginBottom: '20px' }} to="/t">Track Order</Link></li>
                    <li className="nav-item"><Link className="nav-link text-success" style={{fontWeight: 'bold', marginBottom: '20px' }} to="/p">Packages</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    <br />
    <br />
    <br />    
    </div>
  )
}
