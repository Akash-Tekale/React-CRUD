import React from "react";
import { ReactDOM } from "react";
import {NavLink} from 'react-router-dom'

function Navbar (){
    return(
        <>
       <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/student">Student</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

       </>
    )
}
export default Navbar