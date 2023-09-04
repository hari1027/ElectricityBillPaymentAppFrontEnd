import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './CustomerInfo.css' 

function ConnectionInfo() {

    const [Connection,setConnection]=useState([])
    


    useEffect(()=>{
        getData();
      },[])

      const getData=async()=>{
        axios.get('http://localhost:8080/coc/connection') 
        .then((result) => {
           console.log(result);
           setConnection(result.data)
           console.log("Retrived");
           console.log(result.data)
        })
        .catch(error => {
           console.error("not Retrived", error);
         });
         
       }
 
      
     const deleteEmployee=async (Connection)=>{
        await axios.delete(`http://localhost:8080/coc/delete/${Connection.connectionId}`)
        .then((result) => {
           console.log(result);
      })
        .catch(error => {
           console.error("not deleted", error);
         })
             getData();
            
      }
 
      const updateEmployee=async (Connection, event)=>{
 
       console.log(event);
       alert(Connection.connectionId);
       axios.delete(`http://localhost:8080/coc/delete/${Connection.connectionId}`);
       
       window.location.href = `http://localhost:3000/connection/update`;
      }
  return (
    <div>
         <br></br><br></br><br></br>
        <h1 Style="color:green;padding-left:1000px"><u>ConnectionInfo</u></h1><br></br><br></br>
        <table className="customerInfo">
         
          <thead>
            <tr className='tr'> 
              <th className='thead' scope="col">ConnectionId</th>
              <th className='thead' scope="col">ConsumerNumber</th>
              <th className='thead' scope="col">ApplicationDate</th>
              <th className='thead' scope="col">ConnectionDate</th>
              <th className='thead' scope="col">ConnectionStatus</th>
              <th className='thead' scope="col">ConnectionType</th>
              <th className='thead' scope="col">AddressId</th>
              <th className='thead' scope="col">CustomerId</th>
              <th className='thead' scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Connection.map((Connection)=>(

                <tr className='tr'>
                    <td className='td'>{Connection.connectionId}</td>
                    <td className='td'>{Connection.consumerNumber}</td>
                    <td className='td'>{Connection.applicationDate}</td>
                    <td className='td'>{Connection.connectionDate}</td>
                    <td className='td'>{Connection.connectionStatus}</td>
                    <td className='td'>{Connection.connectionType}</td>

                       
                    <td className='td'>{Connection.connectionAddress.addressId}</td>
                    <td className='td'>{Connection.customerConnection.customerId}</td>
                    
                    
                    <td>
                        <button Style="background-color:red" type="Submit" onClick={()=>deleteEmployee(Connection)} >Delete</button>
                        <button Style="background-color:red" type="Submit" onClick={()=>updateEmployee(Connection)} >update</button>

                        

                    </td>
                </tr>

            ))}
          </tbody>
        </table>
     </div>
  )
}

export default ConnectionInfo