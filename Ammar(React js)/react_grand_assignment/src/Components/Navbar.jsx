import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">React</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Add Record</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/read">View Record</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/read">Mock Api Test</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/update">Update Record</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/delete">Delete Record</Link>
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/w">Weight Converter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/m">Click Counter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/t">Temperature Converter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/b">BMI Calculator</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/g">Get Values</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/r">Radio And Options</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/p">Pizza</Link>
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link active" to="/q">Quiz</Link>
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link" to="/a">Array</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/j">Job Array</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/u">Use Navigate</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pro">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/test">Test</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/kar">Karachi</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/isl">Islamabad</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/lah">Lahore</Link>
        </li> */}
         {/* <li className="nav-item">
          <Link className="nav-link" to="/planet">Planets</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/f">Feedback Form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/todo">To-Do List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/word">Letter and Word Count</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/e">Props</Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
