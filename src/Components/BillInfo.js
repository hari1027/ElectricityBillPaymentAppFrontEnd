import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './CustomerInfo.css' 

function BillInfo() {

    const [Bill,setBill]=useState([])
    


    useEffect(()=>{
        getData();
      },[])

      const getData=async()=>{
        axios.get('http://localhost:8080/bc/bill') 
        .then((result) => {
           console.log(result);
           setBill(result.data)
           console.log("Retrived");
           console.log(result.data)
        })
        .catch(error => {
           console.error("not Retrived", error);
         });
         
       }
 
      
     const deleteEmployee=async (Bill)=>{
        await axios.delete(`http://localhost:8080/bc/delete/${Bill.billId}`)
        .then((result) => {
           console.log(result);
      })
        .catch(error => {
           console.error("not deleted", error);
         })
             getData();
            
      }
 
      const updateEmployee=async (Bill, event)=>{
 
       console.log(event);
       alert(Bill.billId);
       axios.delete(`http://localhost:8080/bc/delete/${Bill.billId}`);
       
       window.location.href = `http://localhost:3000/bill/update`;
      }
  return (
    <div>
         <br></br><br></br><br></br>
        <h1 Style="color:green;padding-left:900px"><u>BillInfo</u></h1><br></br><br></br>
        <table className="customerInfo">
         
          <thead>
            <tr className='tr'> 
              <th className='thead' scope="col">BillId</th>
              <th className='thead' scope="col">BillDate</th>
              <th className='thead' scope="col">BillDueDate</th>
              <th className='thead' scope="col">UnitsConsumed</th>
              <th className='thead' scope="col">BillAmount</th>
              <th className='thead' scope="col">ReadingId</th>
             
            </tr>
          </thead>
          <tbody>
            {Bill.map((Bill)=>(

                <tr className='tr'>
                    <td className='td'>{Bill.billId}</td>
                    <td className='td'>{Bill.billDate}</td>
                    <td className='td'>{Bill.billDueDate}</td>
                    <td className='td'>{Bill.unitsConsumed}</td>
                    <td className='td'>{Bill.billAmount}</td>
                    

                       
                    <td className='td'>{Bill.billForReading.readingId}</td>
                    
                    
                    
                    <td>
                        <button Style="background-color:red" type="Submit" onClick={()=>deleteEmployee(Bill)} >Delete</button>
                        <button Style="background-color:red" type="Submit" onClick={()=>updateEmployee(Bill)} >update</button>

                        

                    </td>
                </tr>

            ))}
          </tbody>
        </table>
     </div>
  )
}

export default BillInfo