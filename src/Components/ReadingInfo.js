
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './CustomerInfo.css' 

function ReadingInfo() {

    const [Reading,setReading]=useState([])
    


    useEffect(()=>{
        getData();
      },[])

      const getData=async()=>{
        axios.get('http://localhost:8080/rc/reading') 
        .then((result) => {
           console.log(result);
           setReading(result.data)
           console.log("Retrived");
           console.log(result.data)
        })
        .catch(error => {
           console.error("not Retrived", error);
         });
         
       }
 
      
     const deleteEmployee=async (Reading)=>{
        await axios.delete(`http://localhost:8080/rc/delete/${Reading.readingId}`)
        .then((result) => {
           console.log(result);
      })
        .catch(error => {
           console.error("not deleted", error);
         })
             getData();
            
      }
 
      const updateEmployee=async (Reading, event)=>{
 
       console.log(event);
       alert(Reading.readingId);
       axios.delete(`http://localhost:8080/rc/delete/${Reading.readingId}`);
       
       window.location.href = `http://localhost:3000/reading/update`;
      }
  return (
    <div>
         <br></br><br></br><br></br>
        <h1 Style="color:green;padding-left:900px"><u>ReadingInfo</u></h1><br></br><br></br>
        <table className="customerInfo">
         
          <thead>
            <tr className='tr'> 
              <th className='thead' scope="col">ReadingId</th>
              <th className='thead' scope="col">UnitsConsumed</th>
              <th className='thead' scope="col">ReadingPhoto</th>
              <th className='thead' scope="col">ReadingDate</th>
              <th className='thead' scope="col">PricePerUnits</th>
              <th className='thead' scope="col">ConnectionId</th>
              <th className='thead' scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Reading.map((Reading)=>(

                <tr className='tr'>
                    <td className='td'>{Reading.readingId}</td>
                    <td className='td'>{Reading.unitsConsumed}</td>
                    <td className='td'>{Reading.readingPhoto}</td>
                    <td className='td'>{Reading.readingDate}</td>
                    <td className='td'>{Reading.pricePerUnits}</td>

                    <td className='td'>{Reading.readingForConnection.connectionId}</td>

                       
                    
                    
                    
                    <td>
                        <button Style="background-color:red" type="Submit" onClick={()=>deleteEmployee(Reading)} >Delete</button>
                        <button Style="background-color:red" type="Submit" onClick={()=>updateEmployee(Reading)} >update</button>

                        

                    </td>
                </tr>

            ))}
          </tbody>
        </table>
     </div>
  )
}

export default ReadingInfo