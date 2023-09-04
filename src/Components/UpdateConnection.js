import React, { Component } from 'react'
import './AddCustomer.css';
import axios from 'axios'


export class UpdateConnection extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ConnectionId:'',
         ConsumerNumber:'',
         ApplicationDate:'',
         ConnectionDate:'',
         ConnectionStatus:'',
         ConnectionType:'',
         addressId:'',
         customerId:''

      }
      this.inputref = React.createRef();
    }

    ConnectionIdHandler = (event) => {

        if (event.target.value > 99999) {
            document.getElementById("connectionIdlabel").className = '';
        }
        else {
            document.getElementById("connectionIdlabel").className = 'hidden';
        }
        this.setState({
            ConnectionId: event.target.value
        })
    }

    ConsumerNumberHandler = (event) => {

        if (event.target.value > 99999) {
            document.getElementById("consumernumberlabel").className = '';
        }
        else {
            document.getElementById("consumernumberlabel").className = 'hidden';
        }
        this.setState({
            ConsumerNumber: event.target.value
        })
    }

    ApplicationDateHandler = (event) => {

       
        this.setState({
            ApplicationDate: event.target.value
        })
    }

    ConnectionDateHandler = (event) => {

       
        this.setState({
            ConnectionDate: event.target.value
        })
    }

    ConnectionStatusHandler =(event)=>{
        if (event.target.value === "true" || event.target.value === "false")
        {
            document.getElementById("connectionstatuslabel").className = 'hidden';
        }
        else
        {
            document.getElementById("connectionstatuslabel").className = '';
        }
        this.setState({
            ConnectionStatus: event.target.value
        })

    }

    ConnectionTypeHandler =(event)=>{
        if (event.target.value === "NON_INDUSTRIAL" || event.target.value === "INDUSTRIAL" || event.target.value === "AGRICULTURAL")
        {
            document.getElementById("connectiontypelabel").className = 'hidden';
        }
        else
        {
            document.getElementById("connectiontypelabel").className = '';
        }
        this.setState({
            ConnectionType: event.target.value
        })

    }

    CustomerConnectionHandler = (event) => {

        if (event.target.value > 9999999999) {
            document.getElementById("CustomerIdlabel").className = '';
        }
        else {
            document.getElementById("CustomerIdlabel").className = 'hidden';
        }
        this.setState({
            customerId: event.target.value
        })
    }

    ConnectionAddressHandler = (event) => {

        if (event.target.value > 999999) {
            document.getElementById("addressIdlabel").className = '';
        }
        else {
            document.getElementById("addressIdlabel").className = 'hidden';
        }
        this.setState({
           addressId: event.target.value
        })
    }

    FormHandler = (event) => {
        event.preventDefault();
        alert(`${this.state.ConnectionId}, ${this.state.ConsumerNumber}, ${this.state.ApplicationDate}, ${this.state.ConnectionDate}, ${this.state.ConnectionStatus},${this.state.ConnectionType}, ${this.state.addressId}, ${this.state.customerId}`)
        console.log(`${this.state.ConnectionId}, ${this.state.ConsumerNumber}, ${this.state.ApplicationDate}, ${this.state.ConnectionDate}, ${this.state.ConnectionStatus},${this.state.ConnectionType}, ${this.state.addressId}, ${this.state.customerId}`)
        const postRequest = {
                "connectionId": this.state.ConnectionId,
                "consumerNumber": this.state.ConsumerNumber,
                "applicationDate": this.state.ApplicationDate,
                "connectionDate": this.state.ConnectionDate, 
                "connectionStatus":this.state.ConnectionStatus, 
                "connectionType":this.state.ConnectionType,
                "connectionAddress":{
                "addressId":this.state.addressId
                },
                "customerConnection":{
                "customerId" :this.state.customerId
                },
        }
        axios.post(`http://localhost:8080/coc/addconnection`, postRequest)
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
                    <h2 Style="padding-left:180px;color:blue;margin-top:2px;font-style:italic;font-family:TheSpeakeasy"><u>Connection Details</u>  </h2><br></br>
                    <table className='table'>

                        <label id="connectionIdlabel" class="hidden">Should be 5 digits</label>
                        <tr>
                            <td><label>ConnectionId: </label></td>
                            <td><input type="text" Placeholder="Enter the UserId" value={this.state.ConnectionId} onChange={this.ConnectionIdHandler} ref={this.inputref} required pattern="[1-9]{1}[0-9]{4,4}"></input>
                            </td>
                        </tr>

                        <label id="consumernumberlabel" class="hidden">Should be 5 digits</label>
                        <tr>
                            <td><label>ConsumerNumber: </label></td>
                            <td><input type="text" Placeholder="Enter the ConsumerNumber" value={this.state.ConsumerNumber} onChange={this.ConsumerNumberHandler} required pattern="[1-9]{1}[0-9]{4,4}"></input></td>
                        </tr><br></br>

                        
                        <tr>
                            <td><label>ApplicationDate: </label></td>
                            <td><input type="date" Placeholder="Enter the ApplicationDate" value={this.state.ApplicationDate} onChange={this.ApplicationDateHandler} required ></input></td>
                        </tr>

                        
                        <tr>
                            <td><label>ConnectionDate: </label></td>
                            <td><input type="date" Placeholder="Enter the ConnectionDate" value={this.state.ConnectionDate} onChange={this.ConnectionDateHandler} required ></input>
                            </td>
                        </tr>

                        <label id="connectionstatuslabel" class="hidden">true,false</label>
                        <tr>
                            <td><label>ConnectionStatus: </label></td>
                            <td><input type="text" Placeholder="Enter the ConnectionStatus" value={this.state.ConnectionStatus} onChange={this.ConnectionStatusHandler}  required></input>
                            </td>
                        </tr>

                        <label id="connectiontypelabel" class="hidden">Should be NON_INDUSTRIAL,INDUSTRIAL,AGRICULTURAL</label>
                        <tr>
                            <td><label>ConnectionType: </label></td>
                            <td><input type="text" Placeholder="Enter the ConnectionType" value={this.state.ConnectionType} onChange={this.ConnectionTypeHandler} required ></input></td>
                        </tr>

                        <label id="addressIdlabel" class="hidden">Should be 6 digits</label>
                        <tr>
                            <td><label>addressId: </label></td>
                            <td><input type="text" Placeholder="Enter the ConnectionAddress" value={this.state.addressId} onChange={this.ConnectionAddressHandler} required pattern="[1-9]{1}[0-9]{5,5}"></input></td>
                        </tr>

                        <label id="CustomerIdlabel" class="hidden">Should be 10 digits</label>
                        <tr>
                            <td><label>customerId: </label></td>
                            <td><input type="text" Placeholder="Enter the CustomerConnection" value={this.state.customerId} onChange={this.CustomerConnectionHandler} required pattern="[1-9]{1}[0-9]{9,9}"></input></td>
                        </tr>

                       
                    </table>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <button Style="margin-bottom:13px;font-size:25px;background-color:lightgreen" type="submit" size="10px">update</button>
                </form>

      </div>
    )
  }
}

export default UpdateConnection