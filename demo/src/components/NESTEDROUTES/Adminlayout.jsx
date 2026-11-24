import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Adminlayout = () => {
  return (
    <div>
      <h1>THIS IS ADMIN PAGE</h1>
      <ul>
        <li><Link to="/admin/studentdashboard">DASHBOARD</Link></li>
        <li><Link to="/admin/userdetails">STUDENT DETAILS</Link></li>
        <li><Link to="/admin/coursedetails">COURSES</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Adminlayout
