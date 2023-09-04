import React, { Component } from 'react'
import './AddCustomer.css';
import axios from 'axios'



export class UpdateBill extends Component {
constructor(props) {
  super(props)

  this.state = {
     BillId:'',
     BillDate:'',
     BillDueDate:'',
     UnitsConsumed:'',
     readingId:'',
     BillAmount:'',
     
     
  }
  this.inputref = React.createRef();
}

BillIdHandler = (event) => {

    if (event.target.value > 99999999) {
        document.getElementById("billIdlabel").className = '';
    }
    else {
        document.getElementById("billIdlabel").className = 'hidden';
    }
    this.setState({
        BillId: event.target.value
    })
}

BillDateHandler = (event) => {

   
    this.setState({
        BillDate: event.target.value
    })
}

BillDueDateHandler = (event) => {

   
    this.setState({
        BillDueDate: event.target.value
    })
}
UnitsConsumedHandler = (event) => {

    if (event.target.value > 100000) {
        document.getElementById("unitsconsumedlabel").className = '';
    }
    else {
        document.getElementById("unitsconsumedlabel").className = 'hidden';
    }
    this.setState({
        UnitsConsumed: event.target.value
    })
}
ReadingIdHandler = (event) => {

    if (event.target.value > 99999) {
        document.getElementById("readingIdlabel").className = '';
    }
    else {
        document.getElementById("readingIdlabel").className = 'hidden';
    }
    this.setState({
        readingId: event.target.value
    })
}
BillAmountHandler =() =>{
    this.setState({
        BillAmount: this.state.UnitsConsumed * 7
    })
}

FormHandler = (event) => {
    event.preventDefault();
    alert(`${this.state.BillId}, ${this.state.BillDate}, ${this.state.BillDueDate}, ${this.state.UnitsConsumed}, ${this.state.readingId},${this.state.BillAmount}`)
    console.log(`${this.state.BillId}, ${this.state.BillDate}, ${this.state.BillDueDate}, ${this.state.UnitsConsumed}, ${this.state.readingId},${this.state.BillAmount}`)
    const postRequest = {
            "billId": this.state.BillId,
            "billDate": this.state.BillDate,
            "billDueDate": this.state.BillDueDate,
            "unitsConsumed": this.state.UnitsConsumed, 
            "billAmount":this.state.BillAmount,
             
            "billForReading":{
            "readingId":this.state.readingId
            },
            
           
    }
    axios.post(`http://localhost:8080/bc/addbill`, postRequest)
    .then(() => {
        console.log("Updated Sucessfully");
    });
}
componentDidMount() {
    this.inputref.current.focus()
    console.log(this.inputref)
}




  render() {
    return (
      <div>
        <br></br><br></br><br></br>
                <form className='form'onSubmit={this.FormHandler}>
                    <h2 Style="padding-left:180px;color:blue;margin-top:2px;font-style:italic;font-family:TheSpeakeasy"><u>Bill Details</u>  </h2><br></br>
                    <table className='table'>

                        <label id="billIdlabel" class="hidden">Should be 8 digits</label>
                        <tr>
                            <td><label>BillId: </label></td>
                            <td><input type="text" Placeholder="Enter the ReadingId" value={this.state.BillId} onChange={this.BillIdHandler} ref={this.inputref} required pattern="[1-9]{1}[0-9]{7,7}"></input>
                            </td>
                        </tr>

                        
                        <tr>
                            <td><label>BillDate: </label></td>
                            <td><input type="date" Placeholder="Enter the BillDate" value={this.state.BillDate} onChange={this.BillDateHandler} required ></input></td>
                        </tr><br></br>

                       
                        <tr>
                            <td><label>BillDueDate: </label></td>
                            <td><input type="date" Placeholder="Enter the BillDueDate" value={this.state.BillDueDate} onChange={this.BillDueDateHandler} required ></input></td>
                        </tr>

                        <label id="unitsconsumedlabel" class="hidden">Should be less than 100000</label>
                        <tr>
                            <td><label>UnitsConsumed: </label></td>
                            <td><input type="text" Placeholder="Enter the UnitsConsumed"  value={this.state.UnitsConsumed} onChange={this.UnitsConsumedHandler}required ></input></td>
                        </tr>



                        <label id="readingIdlabel" class="hidden">Should be 5 digits</label>
                        <tr>
                            <td><label>ReadingId: </label></td>
                            <td><input type="text" Placeholder="Enter the ReadingId" value={this.state.readingId} onChange={this.ReadingIdHandler}  required pattern="[1-9]{1}[0-9]{4,4}"></input>
                            </td>
                        </tr>

                        <tr>
                            <td><label>BillAmount: </label></td>
                            <td><input type="text" Placeholder="Enter the BillAmount" value={this.state.BillAmount} onChange={this.BillAmountHandler}required  ></input>
                            </td>
                        </tr>



                    </table>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <button Style="margin-bottom:13px;font-size:25px;background-color:lightgreen" type="submit" size="10px">update</button>
                </form>


      </div>
    )
  }
}

export default UpdateBill
