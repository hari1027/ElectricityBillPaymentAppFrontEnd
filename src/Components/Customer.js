import '../App.css';
import React from 'react'

import {Link , Outlet} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function Customer() {
  return (
    <div>

   

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 
     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">  
      <div className="navbar-nav">

          <Link className="nav-item nav-link text color-light" to='add'>AddCustomer</Link>
          <Link className="nav-item nav-link text color-light" to='viewanddelete'>CustomerInfo</Link>
          <Link className="nav-item nav-link text color-light" to='update'>UpdateCustomer</Link>
          <Link className="nav-item nav-link text color-light" to='useroperation1'>ViewByCustomerId</Link>
          <Link className="nav-item nav-link text color-light" to='useroperation2'>ViewByUserId</Link>
          <Link className="nav-item nav-link text color-light" to='useroperation3'>ViewByUsername</Link>
          <Link className="nav-item nav-link text color-light" to='useroperation4'>ViewByMobilenumber</Link>
          <Link className="nav-item nav-link text color-light" to='useroperation5'>ViewByEmail</Link>
          <Link className="nav-item nav-link text color-light" to='useroperation6'>ViewByFirstname</Link>
          <Link className="nav-item nav-link text color-light" to='useroperation7'>ViewByAadharnumber</Link>
      
          </div>     
          </div>                 
        
        </nav>
        <Outlet/>

</div>
        
    
  )
}

export default Customer