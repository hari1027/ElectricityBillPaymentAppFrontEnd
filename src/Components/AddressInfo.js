import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './CustomerInfo.css' 

function AddressInfo() {

    const [Address,setAddress]=useState([])

    useEffect(()=>{
        getData();
      },[])

      const getData=async()=>{
        axios.get('http://localhost:8080/ac/address') 
        .then((result) => {
           console.log(result);
           setAddress(result.data)
           console.log("Retrived");
        })
        .catch(error => {
           console.error("not Retrived", error);
         });
         
       }
 
      
     const deleteEmployee=async (Address)=>{
        await axios.delete(`http://localhost:8080/ac/delete/${Address.addressId}`)
        .then((result) => {
           console.log(result);
      })
        .catch(error => {
           console.error("not deleted", error);
         })
             getData();
            
      }
 
      const updateEmployee=async (Address, event)=>{
 
       console.log(event);
       alert(Address.addressId);
       axios.delete(`http://localhost:8080/ac/delete/${Address.addressId}`);
       
       window.location.href = `http://localhost:3000/address/update`;
      }
  return (
    <div>
         <br></br><br></br><br></br>
        <h1 Style="color:green;padding-left:1000px"><u>AddressInfo</u></h1><br></br><br></br>
        <table className="customerInfo">
         
          <thead>
            <tr className='tr'> 
              <th className='thead' scope="col">AddressId</th>
              <th className='thead' scope="col">FlatOrHouseNumber</th>
              <th className='thead' scope="col">BuildingName</th>
              <th className='thead' scope="col">Landmark</th>
              <th className='thead' scope="col">Village</th>
              <th className='thead' scope="col">Taluka</th>
              <th className='thead' scope="col">District</th>
              <th className='thead' scope="col">State</th>
              <th className='thead' scope="col">Pincode</th>
              <th className='thead' scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Address.map((Address)=>(

                <tr className='tr'>
                    <td className='td'>{Address.addressId}</td>
                    <td className='td'>{Address.flatOrHouseNumber}</td>
                    <td className='td'>{Address.buildingName}</td>
                    <td className='td'>{Address.landmark}</td>
                    <td className='td'>{Address.village}</td>
                    <td className='td'>{Address.taluka}</td>
                    <td className='td'>{Address.district}</td>
                    <td className='td'>{Address.state}</td>
                    <td className='td'>{Address.pincode}</td>
                    
                    
                     <td>
                        <button Style="background-color:red" type="Submit" onClick={()=>deleteEmployee(Address)} >Delete</button>
                        <button Style="background-color:red" type="Submit" onClick={()=>updateEmployee(Address)} >update</button>

                        

                    </td>
                </tr>

            ))}
          </tbody>
        </table>
     </div>
  )
}

export default AddressInfo