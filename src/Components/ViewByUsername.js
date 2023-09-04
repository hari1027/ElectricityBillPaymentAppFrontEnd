import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './AddCustomer.css';
import './CustomerInfo.css';




export function ViewByUsername() {

    const [UserName,setUserName]=useState('') ;
    const [Customer,setCustomer]=useState([]);

    useEffect(()=>{
      getdata();
    },[])


   



   const UserNameHandler =async(event)=> {

    if (event.target.value[0] >= 'A' && event.target.value[0] <= 'Z') {
      document.getElementById("viewuserNamelabel").className = 'hidden';
  }
  else {
      document.getElementById("viewuserNamelabel").className = '';
  }
    

     setUserName(event.target.value);
   }

     const getdata=async({UserName})=>{
      
     await axios.get(`http://localhost:8080/cc/username/${UserName}`) 
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
        <form className='form' onSubmit={()=>getdata({UserName})}>
        <h2 Style="padding-left:180px;color:blue;margin-top:2px;font-style:italic;font-family:TheSpeakeasy"><u>Search By UserName</u>  </h2><br></br>
        <table className='table'>

        <label id="viewuserNamelabel" class="hidden">First letter should be Capital</label>
                        <tr>
                            <td><label>UserName: </label></td>
                            <td><input type="text" Placeholder="Enter the UserName" value={UserName} onChange={UserNameHandler} required pattern="[A-Z]{1}[a-z]{1,}"></input>
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
   <h1 Style="color:green;padding-left:900px"><u>CustomerInfoByUserName</u></h1><br></br><br></br>
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




export default ViewByUsername