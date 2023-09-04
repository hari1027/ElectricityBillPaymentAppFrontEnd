import '../App.css';
import React from 'react'

import {Link , Outlet} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function Connection() {
  return (
    <div>

   

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 
     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">  
      <div className="navbar-nav">

      <Link className="nav-item nav-link text color-light" to='add'>AddConnection</Link>
      <Link className="nav-item nav-link text color-light" to='viewanddelete'>ConnectionInfo</Link>
      <Link className="nav-item nav-link text color-light" to='update'>UpdateConnection</Link>
      </div>     
          </div>                 
        
        </nav>
        <Outlet/>

</div>
  )
}

export default Connection