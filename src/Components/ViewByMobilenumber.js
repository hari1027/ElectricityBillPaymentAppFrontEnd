import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './AddCustomer.css';
import './CustomerInfo.css';




export function ViewByMobilenumber() {

    const [MobileNumber,setMobileNumber]=useState('') ;
    const [Customer,setCustomer]=useState([]);

    useEffect(()=>{
      getdata();
    },[])


   



   const MobileNumberHandler =async(event)=> {

  if (event.target.value[0] >= '6' && event.target.value[0] <= '9' ) {
      document.getElementById("viewmobileNumberlabel").className = 'hidden';
  }
  else {
      document.getElementById("viewmobileNumberlabel").className = '';
  }

  if (event.target.value > 9999999999) {
      document.getElementById("viewmobileNumberlabel2").className = '';
  }
  else {
      document.getElementById("viewmobileNumberlabel2").className = 'hidden';
  }
     

     setMobileNumber(event.target.value);
   }

     const getdata=async({MobileNumber})=>{
      
     await axios.get(`http://localhost:8080/cc/mobilenumber/${MobileNumber}`) 
      .then((result) => {
         
         console.log(result);
         setCustomer(result.data)
         console.log("Retrived");
        
      })
     .catch(error => {
         console.error("not Retrived", error);
       });
      
    }


   

  return (
      <div>
<div1>
        <br></br><br></br><br></br>
        <form className='form' onSubmit={()=>getdata({MobileNumber})}>
        <h2 Style="padding-left:180px;color:blue;margin-top:2px;font-style:italic;font-family:TheSpeakeasy"><u>Search By MobileNumber</u>  </h2><br></br>
        <table className='table'>

        <label id="viewmobileNumberlabel2" class="hidden">Should be 10 digits</label>
        <label id="viewmobileNumberlabel" class="hidden">First digit Should be (6,7,8,9)</label>
                        <tr>
                            <td><label>MobileNumber: </label></td>
                            <td><input type="text" Placeholder="Enter the MobileNumber" value={MobileNumber} onChange={MobileNumberHandler} required pattern="[6-9]{1}[0-9]{9,9}"></input>
                            </td>
                        </tr>
            </table> 
            <br></br><br></br><br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button Style="margin-bottom:13px;font-size:25px;background-color:lightgreen" type="submit" size="10px" >Submit</button>
            
           
        </form>
        </div1>

      <div2>
    <br></br><br></br><br></br>
   <h1 Style="color:green;padding-left:900px"><u>CustomerInfoByMobileNumber</u></h1><br></br><br></br>
    <table className='customerIdInfo'  >
   
    <thead>
      <tr className='tr'> 

        <th className='thead' scope="col">CustomerId</th>
        <th className='thead' scope="col">UserId</th>
         <th className='thead' scope="col">UserName</th>
         <th className='thead' scope="col">Password</th>
        <th className='thead' scope="col">CustomerId</th>
        <th className='thead' scope="col">AadharNumber</th>
        <th className='thead' scope="col">FirstName</th>
        <th className='thead' scope="col">MiddleName</th>
        <th className='thead' scope="col">LastName</th>
        <th className='thead' scope="col">MobileNumber</th>
        <th className='thead' scope="col">Email</th> 
        <th className='thead' scope="col">Gender</th>
       
       </tr>
     </thead>
   <tbody>
      {Customer.map((Customer)=>(

           <tr>
              <td className='td'>{Customer.customerId}</td>
              <td className='td'>{Customer.userId}</td>
              <td className='td'>{Customer.userName}</td>
              <td className='td'>{Customer.password}</td>
              <td className='td'>{Customer.customerId}</td>
              <td className='td'>{Customer.aadharNumber}</td>
              <td className='td'>{Customer.firstName}</td>
              <td className='td'>{Customer.middleName}</td>
              <td className='td'>{Customer.lastName}</td>
              <td className='td'>{Customer.mobileNumber}</td>
               <td className='td'>{Customer.email}</td>
               <td className='td'>{Customer.gender}</td>
              
              
          </tr>

      ))}
     </tbody>
   </table>
   </div2>


  
  

 </div>
    )
 }




export default ViewByMobilenumber