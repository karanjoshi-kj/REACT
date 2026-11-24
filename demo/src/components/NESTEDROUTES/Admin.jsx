import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <h1>ADMIN</h1>
      <ul>
        <li><Link to="/admin/userlogin">LOGIN</Link></li>
        <li><Link to="/admin/userdashboard">DASHBOARD</Link></li>
        <li><Link to="/admin/sign">SIGNIN</Link></li>
        <li><Link to="/admin/profile">CHECK PROFILE</Link></li>
      </ul>
      <Outlet />   
       {/* IN-BUILT COMPONENT WHICH HELPS THE NESTED PARENT ROUTE WITH ATTACHMENT TO CHILD ROUTE .  */}
    </div>
  )
}
  
export default Admin
