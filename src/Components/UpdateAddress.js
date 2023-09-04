import React, { Component } from 'react'
import axios from 'axios'
import './AddCustomer.css';



export class UpdateAddress extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         AddressId:'',
         FlatOrHouseNumber:'',
         BuildingName:'',
         Landmark:'',
         Village:'',
         Taluka:'',
         District:'',
         State:'',
         Pincode:'',
      }
      this.inputref = React.createRef();
    }

    AddressIdHandler = (event) => {

        if (event.target.value > 999999) {
            document.getElementById("addressIdlabel").className = '';
        }
        else {
            document.getElementById("addressIdlabel").className = 'hidden';
        }
        this.setState({
            AddressId: event.target.value
        })
    }

    FlatOrHouseNumberHandler = (event) => {

        if (event.target.value > 1000) {
            document.getElementById("addressIdlabel").className = '';
        }
        else {
            document.getElementById("addressIdlabel").className = 'hidden';
        }
        this.setState({
            FlatOrHouseNumber: event.target.value
        })
    }

    BuildingNameHandler = (event) => {

        if (event.target.value[0] >= 'A' && event.target.value[0] <= 'Z') {
            document.getElementById("buildingnamelabel").className = 'hidden';
        }
        else {
            document.getElementById("buildingnamelabel").className = '';
        }
        this.setState({
            BuildingName: event.target.value
        })
    }

    LandmarkHandler = (event) => {

       
        this.setState({
            Landmark: event.target.value
        })
    }

    VillageHandler = (event) => {

       
        this.setState({
            Village: event.target.value
        })
    }

    TalukaHandler = (event) => {

       
        this.setState({
            Taluka: event.target.value
        })
    }

    DistrictHandler = (event) => {

        if (event.target.value[0] >= 'A' && event.target.value[0] <= 'Z') {
            document.getElementById("districtlabel").className = 'hidden';
        }
        else {
            document.getElementById("districtlabel").className = '';
        }
        this.setState({
            District: event.target.value
        })
    }

    StateHandler = (event) => {

        if (event.target.value[0] >= 'A' && event.target.value[0] <= 'Z') {
            document.getElementById("statelabel").className = 'hidden';
        }
        else {
            document.getElementById("statelabel").className = '';
        }
        this.setState({
            State: event.target.value
        })
    }

    PincodeHandler = (event) => {

        if (event.target.value > 999999) {
            document.getElementById("pincodelabel").className = '';
        }
        else {
            document.getElementById("pincodelabel").className = 'hidden';
        }
        this.setState({
            Pincode: event.target.value
        })
    }

    FormHandler = (event) => {
        event.preventDefault();
        alert(`${this.state.AddressId}, ${this.state.FlatOrHouseNumber}, ${this.state.BuildingName}, ${this.state.Landmark}, ${this.state.Village},${this.state.Taluka}, ${this.state.District}, ${this.state.State},${this.state.Pincode}`)
        console.log(`${this.state.AddressId}, ${this.state.FlatOrHouseNumber}, ${this.state.BuildingName}, ${this.state.Landmark}, ${this.state.Village},${this.state.Taluka}, ${this.state.District}, ${this.state.State},${this.state.Pincode}`)
        const postRequest = {
                "addressId": this.state.AddressId,
                "flatOrHouseNumber": this.state.FlatOrHouseNumber,
                "buildingName": this.state.BuildingName,
                "landmark": this.state.Landmark, 
                "village":this.state.Village, 
                "taluka":this.state.Taluka,
                "district":this.state.District,
                "state" :this.state.State,
                "pincode":this.state.Pincode,
                
        }
        axios.post(`http://localhost:8080/ac/addaddress`, postRequest)
        .then(() => {
            console.log("updated Sucessfully");
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
                    <h2 Style="padding-left:180px;color:blue;margin-top:2px;font-style:italic;font-family:TheSpeakeasy"><u>Address Details</u>  </h2><br></br>
                    <table className='table'>

                        <label id="addressIdlabel" class="hidden">Should be 6 digits</label>
                        <tr>
                            <td><label>AddressId: </label></td>
                            <td><input type="text" Placeholder="Enter the AddressId" value={this.state.AddressId} onChange={this.AddressIdHandler} ref={this.inputref} required pattern="[1-9]{1}[0-9]{5,5}"></input>
                            </td>
                        </tr>

                        <label id="flatorhousenumberlabel" class="hidden">Should be less than 1000</label>
                        <tr>
                            <td><label>FlatOrHouseNumber: </label></td>
                            <td><input type="text" Placeholder="Enter the HouseNumber" value={this.state.FlatOrHouseNumber} onChange={this.FlatOrHouseNumberHandler} required ></input></td>
                        </tr><br></br>

                        <label id="buildingnamelabel" class="hidden">First letter should be Capital</label>
                        <tr>
                            <td><label>BuildingName: </label></td>
                            <td><input type="text" Placeholder="Enter the BuildingName" value={this.state.BuildingName} onChange={this.BuildingNameHandler} required pattern="([A-Z]{1}[a-z]{1,}"></input></td>
                        </tr>

                      <tr>
                            <td><label>Landmark: </label></td>
                            <td><input type="text" Placeholder="Enter the Landmark" value={this.state.Landmark} onChange={this.LandmarkHandler}  required pattern="[a-zA-Z0-9]{1,}"></input>
                            </td>
                        </tr>

                        
                        <tr>
                            <td><label>Village: </label></td>
                            <td><input type="text" Placeholder="Enter the Village" value={this.state.Village} onChange={this.VillageHandler} required pattern="[a-zA-Z]{1,}"></input></td>
                        </tr>

                        
                        <tr>
                            <td><label>Taluka: </label></td>
                            <td><input type="text" Placeholder="Enter the Taluka" value={this.state.Taluka} onChange={this.TalukaHandler} required pattern="[A-Za-z0-9]{1,}"></input></td>
                        </tr>

                        <label id="districtlabel" class="hidden">First letter should be Capital</label>
                        <tr>
                            <td><label>District: </label></td>
                            <td><input type="text" Placeholder="Enter the District" value={this.state.District} onChange={this.DistrictHandler} required pattern="[A-Z]{1}[A-Za-z]{1,}"></input></td>
                        </tr>

                        <label id="statelabel" class="hidden">First letter should be Capital</label>
                        <tr>
                            <td><label>State: </label></td>
                            <td><input type="text" Placeholder="Enter the State" value={this.state.State} onChange={this.StateHandler} required pattern="[A-Z]{1}[A-Za-z]{1,}"></input></td>
                        </tr><br></br>

                        <label id="pincodelabel" class="hidden">Should be 6 digits</label>
                        <tr>
                            <td><label>Pincode: </label></td>
                            <td><input type="text" Placeholder="Enter the Pincode" value={this.state.Pincode} onChange={this.PincodeHandler} required pattern="[0-9]{6}"></input></td>
                        </tr><br></br>

                       

                    </table>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <button Style="margin-bottom:13px;font-size:25px;background-color:lightgreen" type="submit" size="10px" >update</button>
                </form>

            </div>
    
    )
  }
}

export default UpdateAddress