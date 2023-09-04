import './App.css';

import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import ResetPassword from './Components/ResetPassword';
import Customer from './Components/Customer';
import AddCustomer from './Components/AddCustomer'
import CustomerInfo from './Components/CustomerInfo';
import UpdateCustomer from './Components/UpdateCustomer';
import ViewByCustomerId from './Components/ViewByCustomerId';
import ViewByEmail from './Components/ViewByEmail';
import ViewByMobilenumber from './Components/ViewByMobilenumber';
import ViewByAadharnumber from './Components/ViewByAadharnumber';
import ViewByFirstname from './Components/ViewByFirstname';
import ViewByUserId from './Components/ViewByUserId';
import ViewByUsername from './Components/ViewByUsername';
import Address from './Components/Address';
import AddAddress from './Components/AddAddress';
import AddressInfo from './Components/AddressInfo';
import UpdateAddress from './Components/UpdateAddress';
import Connection from './Components/Connection';
import AddConnection from './Components/AddConnection';
import ConnectionInfo from './Components/ConnectionInfo';
import UpdateConnection from './Components/UpdateConnection';
import Reading from './Components/Reading';
import AddReading from './Components/AddReading';
import ReadingInfo from './Components/ReadingInfo';
import UpdateReading from './Components/UpdateReading';
import Bill from './Components/Bill'
import AddBill from './Components/AddBill'
import BillInfo from './Components/BillInfo';
import UpdateBill from './Components/UpdateBill';
   
import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';








function App() {
  return (
    <div className="App">
      
      <Router>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> 
          <div className="navbar-nav">

          <Link className="nav-item nav-link text color-light" to="/home">HomePage</Link>
          <Link className="nav-item nav-link text color-light" to="/login">LoginPage</Link>
          <Link className="nav-item nav-link text color-light" to="/resetpassword">ResetPassword</Link>
          <Link className="nav-item nav-link text color-light" to="/customer">Customer</Link>
          <Link className="nav-item nav-link text color-light" to="/address">Address</Link>
          <Link className="nav-item nav-link text color-light" to="/connection">Connection</Link>
          <Link className="nav-item nav-link text color-light" to="/reading">Reading</Link>
          <Link className="nav-item nav-link text color-light" to="/bill">Bill</Link>

          
          
            
         
         
         
          
          
            </div>                       
        </div>
        </nav>

        <Routes>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/resetpassword" element={<ResetPassword/>}></Route> 

        <Route path="/customer" element={<Customer/>}>

        <Route path='add' element={<AddCustomer/>}></Route>  
        <Route path='viewanddelete' element={<CustomerInfo/>} ></Route>
        <Route path='update' element={<UpdateCustomer/>} ></Route>
        <Route exact path='useroperation1' element={<ViewByCustomerId/>} ></Route>
        <Route exact path='useroperation2' element={<ViewByUserId/>} ></Route>
        <Route exact path='useroperation3' element={<ViewByUsername/>} ></Route>
        <Route exact path='useroperation4' element={<ViewByMobilenumber/>} ></Route>
        <Route exact path='useroperation5' element={<ViewByEmail/>} ></Route>
        <Route exact path='useroperation6' element={<ViewByFirstname/>} ></Route>
        <Route exact path='useroperation7' element={<ViewByAadharnumber/>} ></Route>
          
           </Route> 

           <Route path="/address" element={<Address/>}>
           

           <Route path='add' element={<AddAddress/>}></Route> 
           <Route path='viewanddelete' element={<AddressInfo/>}></Route> 
           <Route path='update' element={<UpdateAddress/>}></Route>
          

           </Route>

           <Route path="/connection" element={<Connection/>}>

           <Route path='add' element={<AddConnection/>}></Route> 
           <Route path='viewanddelete' element={<ConnectionInfo/>}></Route>
           <Route path='update' element={<UpdateConnection/>}></Route>

           </Route>

           <Route path="/reading" element={<Reading/>}>

           <Route path='add' element={<AddReading/>}></Route> 
           <Route path='viewanddelete' element={<ReadingInfo/>}></Route> 
           <Route path='update' element={<UpdateReading/>}></Route>

           </Route>

           <Route path="/bill" element={<Bill/>}>

           <Route path='add' element={<AddBill/>}></Route> 
           <Route path='viewanddelete' element={<BillInfo/>}></Route> 
           <Route path='update' element={<UpdateBill/>}></Route> 

           </Route>




       
      </Routes>
      </Router>
</div>
  );
}

export default App;
