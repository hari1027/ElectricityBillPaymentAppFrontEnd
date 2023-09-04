import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './CustomerInfo.css' 


export function CustomerInfo() {
    const [Customer,setCustomer]=useState([])
    
  

    useEffect(()=>{
        getData();
      },[])
 
    const getData=async()=>{
       axios.get('http://localhost:8080/cc/customer') 
       .then((result) => {
          console.log(result);
          setCustomer(result.data)
          console.log("Retrived");
       })
       .catch(error => {
          console.error("not Retrived", error);
        });
        
      }

     
    const deleteEmployee=async (Customer)=>{
       await axios.delete(`http://localhost:8080/cc/delete/${Customer.customerId}`)
       .then((result) => {
          console.log(result);
     })
       .catch(error => {
          console.error("not deleted", error);
        })
            getData();
           
     }

     const updateEmployee=async (Customer, event)=>{

      console.log(event);
      alert(Customer.customerId);
      axios.delete(`http://localhost:8080/cc/delete/${Customer.customerId}`);
      
      window.location.href = `http://localhost:3000/customer/update`;
     }



    


     
     

     return(
   
     <div>
         <br></br><br></br><br></br>
        <h1 Style="color:green;padding-left:1000px"><u>CustomerInfo</u></h1><br></br><br></br>
        <table className="customerInfo">
         
          <thead>
            <tr className='tr'> 
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
              <th className='thead' scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Customer.map((Customer)=>(

                <tr className='tr'>
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
                    
                     <td>
                        <button Style="background-color:red" type="Submit" onClick={()=>deleteEmployee(Customer)} >Delete</button>
                        <button Style="background-color:red" type="Submit" onClick={()=>updateEmployee(Customer)} >update</button>

                        

                    </td>
                </tr>

            ))}
          </tbody>
        </table>
     </div>
    )
  
}
export default CustomerInfo

