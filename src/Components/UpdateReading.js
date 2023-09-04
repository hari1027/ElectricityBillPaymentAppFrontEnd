import React, { Component } from 'react'
import './AddCustomer.css';
import axios from 'axios'

export class UpdateReading extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        ReadingId:'',
        UnitsConsumed:'',
        ReadingPhoto:'',
        ReadingDate:'',
        PricePerUnits:'7',
        connectionId:''
    
      }
      this.inputref = React.createRef();
    }

    ReadingIdHandler = (event) => {

        if (event.target.value > 99999) {
            document.getElementById("readingIdlabel").className = '';
        }
        else {
            document.getElementById("readingIdlabel").className = 'hidden';
        }
        this.setState({
            ReadingId: event.target.value
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

    ReadingPhotoHandler = (event) => {

        if (event.target.value === "Taken" || event.target.value === "NotTaken")
        {
            document.getElementById("readingphotolabel").className = 'hidden';
        }
        else
        {
            document.getElementById("readingphotolabel").className = '';
        }
        this.setState({
           ReadingPhoto : event.target.value
        })
    }

    ReadingDateHandler =(event) => {
        this.setState({
            ReadingDate : event.target.value
        })
    }

    ConnectionIdHandler = (event) => {

        if (event.target.value > 99999) {
            document.getElementById("connectionIdlabel").className = '';
        }
        else {
            document.getElementById("connectionIdlabel").className = 'hidden';
        }
        this.setState({
            connectionId: event.target.value
        })
    }

    FormHandler = (event) => {
        event.preventDefault();
        alert(`${this.state.ReadingId}, ${this.state.UnitsConsumed}, ${this.state.ReadingPhoto}, ${this.state.ReadingDate}, ${this.state.PricePerUnits},${this.state.connectionId}`)
        console.log(`${this.state.ReadingId}, ${this.state.UnitsConsumed}, ${this.state.ReadingPhoto}, ${this.state.ReadingDate}, ${this.state.PricePerUnits},${this.state.connectionId}`)
        const postRequest = {
                "readingId": this.state.ReadingId,
                "unitsConsumed": this.state.UnitsConsumed,
                "readingPhoto": this.state.ReadingPhoto,
                "readingDate": this.state.ReadingDate, 
                "pricePerUnits":this.state.PricePerUnits, 
                "readingForConnection":{
                "connectionId":this.state.connectionId
                },
               
        }
        axios.post(`http://localhost:8080/rc/addreading`, postRequest)
        .then(() => {
            console.log("Updated sucessfully");
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
                    <h2 Style="padding-left:180px;color:blue;margin-top:2px;font-style:italic;font-family:TheSpeakeasy"><u>Reading Details</u>  </h2><br></br>
                    <table className='table'>

                        <label id="readingIdlabel" class="hidden">Should be 5 digits</label>
                        <tr>
                            <td><label>ReadingId: </label></td>
                            <td><input type="text" Placeholder="Enter the ReadingId" value={this.state.ReadingId} onChange={this.ReadingIdHandler} ref={this.inputref} required pattern="[1-9]{1}[0-9]{4,4}"></input>
                            </td>
                        </tr>

                        <label id="unitsconsumedlabel" class="hidden">Should be less than 100000</label>
                        <tr>
                            <td><label>UnitsConsumed: </label></td>
                            <td><input type="text" Placeholder="Enter the UnitsConsumed" value={this.state.UnitsConsumed} onChange={this.UnitsConsumedHandler} required pattern="[1-9]{1}[0-9]{1,}"></input></td>
                        </tr><br></br>

                        <label id="readingphotolabel" class="hidden">Should be Taken,NotTaken</label>
                        <tr>
                            <td><label>ReadingPhoto: </label></td>
                            <td><input type="text" Placeholder="Enter the Readingphoto" value={this.state.ReadingPhoto} onChange={this.ReadingPhotoHandler} required ></input></td>
                        </tr>

                        
                        <tr>
                            <td><label>ReadingDate: </label></td>
                            <td><input type="date" Placeholder="Enter the ReadingDate" value={this.state.ReadingDate} onChange={this.ReadingDateHandler} required ></input>
                            </td>
                        </tr>

                        <tr>
                            <td><label>PricePerUnits: </label></td>
                            <td><input type="text"  value={this.state.PricePerUnits} required ></input></td>
                        </tr>

                        <label id="connectionIdlabel" class="hidden">Should be 5 digits</label>
                        <tr>
                            <td><label>ConnectionId: </label></td>
                            <td><input type="text" Placeholder="Enter the ConnectionId" value={this.state.connectionId} onChange={this.ConnectionIdHandler}  required pattern="[1-9]{1}[0-9]{4,4}"></input>
                            </td>
                        </tr>
                    </table>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <button Style="margin-bottom:13px;font-size:25px;background-color:lightgreen" type="submit" size="10px">Update</button>
                </form>



      </div>
    )
  }
}

export default UpdateReading