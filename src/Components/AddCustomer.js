import React, { Component } from 'react'
import './AddCustomer.css';
import axios from 'axios'

export class AddCustomer extends Component {

    constructor() {
        super()
        this.state = {
            UserId:'',
            UserName:'',
            Password:'',
            CustomerId: '',
            AadharNumber:'',
            FirstName: '',
            MiddleName: '',
            LastName: '',
            MobileNumber: '',
            Email: '',
            Gender: ''

        }
        this.inputref = React.createRef();

    }

    UserIdHandler = (event) => {

        if (event.target.value > 99999) {
            document.getElementById("userIdlabel").className = '';
        }
        else {
            document.getElementById("userIdlabel").className = 'hidden';
        }
        this.setState({
            UserId: event.target.value
        })
    }

    UserNameHandler = (event) => {
        if (event.target.value[0] >= 'A' && event.target.value[0] <= 'Z') {
            document.getElementById("userNamelabel").className = 'hidden';
        }
        else {
            document.getElementById("userNamelabel").className = '';
        }
        this.setState({
            UserName: event.target.value
        })
    }

    PasswordHandler = (event) => {
        this.setState({
            Password: event.target.value
        })
    }


    CustomerIdHandler = (event) => {

        if (event.target.value > 9999999999) {
            document.getElementById("CustomerIdlabel").className = '';
        }
        else {
            document.getElementById("CustomerIdlabel").className = 'hidden';
        }
        this.setState({
            CustomerId: event.target.value
        })
    }

    AadharNumberHandler = (event) => {

        if (event.target.value > 999999999999) {
            document.getElementById("aadharNumberlabel").className = '';
        }
        else {
            document.getElementById("aadharNumberlabel").className = 'hidden';
        }
        this.setState({
            AadharNumber: event.target.value
        })
    }

    FirstNameHandler = (event) => {
        if (event.target.value[0] >= 'A' && event.target.value[0] <= 'Z') {
            document.getElementById("firstNamelabel").className = 'hidden';
        }
        else {
            document.getElementById("firstNamelabel").className = '';
        }
        this.setState({
            FirstName: event.target.value
        })
    }

    MiddleNameHandler = (event) => {
        if (event.target.value[0] >= 'A' && event.target.value[0] <= 'Z') {
            document.getElementById("middleNamelabel").className = 'hidden';
        }
        else {
            document.getElementById("middleNamelabel").className = '';
        }
        this.setState({
            MiddleName: event.target.value
        })
    }

    LastNameHandler = (event) => {
        if (event.target.value[0] >= 'A' && event.target.value[0] <= 'Z') {
            document.getElementById("lastNamelabel").className = 'hidden';
        }
        else {
            document.getElementById("lastNamelabel").className = '';
        }
        this.setState({
            LastName: event.target.value
        })
    }

    MobileNumberHandler = (event) => {
        if (event.target.value[0] >= '6' && event.target.value[0] <= '9' ) {
            document.getElementById("mobileNumberlabel").className = 'hidden';
        }
        else {
            document.getElementById("mobileNumberlabel").className = '';
        }

        if (event.target.value > 9999999999) {
            document.getElementById("mobileNumberlabel2").className = '';
        }
        else {
            document.getElementById("mobileNumberlabel2").className = 'hidden';
        }
        this.setState({
            MobileNumber: event.target.value
        })
    }

    EmailHandler = (event) => {
        this.setState({
            Email: event.target.value
        })
    }

    GenderHandler = (event) => {
        this.setState({
            Gender: event.target.value
        })
    }

    FormHandler = (event) => {
        event.preventDefault();
        alert(`${this.state.UserId}, ${this.state.UserName}, ${this.state.Password}, ${this.state.CustomerId}, ${this.state.AadharNumber},${this.state.FirstName}, ${this.state.MiddleName}, ${this.state.LastName}, ${this.state.MobileNumber}, ${this.state.Email}, ${this.state.Gender}`)
        console.log(`${this.state.UserId}, ${this.state.UserName}, ${this.state.Password}, ${this.state.CustomerId}, ${this.state.AadharNumber}, ${this.state.FirstName}, ${this.state.MiddleName}, ${this.state.LastName}, ${this.state.MobileNumber}, ${this.state.Email}, ${this.state.Gender}`)
        const postRequest = {
                "userId": this.state.UserId,
                "userName": this.state.UserName,
                "password": this.state.Password,
                "customerId": this.state.CustomerId, 
                "aadharNumber":this.state.AadharNumber, 
                "firstName":this.state.FirstName,
                "middleName":this.state.MiddleName,
                "lastName" :this.state.LastName,
                "mobileNumber":this.state.MobileNumber,
                "email": this.state.Email,
                "gender": this.state.Gender
        }
        axios.post(`http://localhost:8080/cc/addcustomer`, postRequest)
        .then(() => {
            console.log("Successfully saved data to DB");
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
                    <h2 Style="padding-left:180px;color:blue;margin-top:2px;font-style:italic;font-family:TheSpeakeasy"><u>Customer Details</u>  </h2><br></br>
                    <table className='table'>

                        <label id="userIdlabel" class="hidden">Should be 5 digits</label>
                        <tr>
                            <td><label>UserId: </label></td>
                            <td><input type="text" Placeholder="Enter the UserId" value={this.state.UserId} onChange={this.UserIdHandler} ref={this.inputref} required pattern="[1-9]{1}[0-9]{4,4}"></input>
                            </td>
                        </tr>

                        <label id="userNamelabel" class="hidden">First letter should be Capital</label>
                        <tr>
                            <td><label>UserName: </label></td>
                            <td><input type="text" Placeholder="Enter the UserName" value={this.state.UserName} onChange={this.UserNameHandler} required pattern="[A-Z]{1}[a-z]{1,}"></input></td>
                        </tr><br></br>

                        
                        <tr>
                            <td><label>Password: </label></td>
                            <td><input type="text" Placeholder="Enter the Password" value={this.state.Password} onChange={this.PasswordHandler} required pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$@#*\\/!¿?¡+%()=-])(.{8,})"></input></td>
                        </tr>

                        <label id="CustomerIdlabel" class="hidden">Should be 10 digits</label>
                        <tr>
                            <td><label>CustomerId: </label></td>
                            <td><input type="text" Placeholder="Enter the CustomerId" value={this.state.CustomerId} onChange={this.CustomerIdHandler} required pattern="[1-9]{1}[0-9]{9,9}"></input>
                            </td>
                        </tr>

                        <label id="aadharNumberlabel" class="hidden">Should be 12 digits</label>
                        <tr>
                            <td><label>AadharNumber: </label></td>
                            <td><input type="text" Placeholder="Enter the AadharNumber" value={this.state.AadharNumber} onChange={this.AadharNumberHandler}  required pattern="[1-9]{1}[0-9]{11,11}"></input>
                            </td>
                        </tr>

                        <label id="firstNamelabel" class="hidden">First letter should be Capital</label>
                        <tr>
                            <td><label>FirstName: </label></td>
                            <td><input type="text" Placeholder="Enter the FirstName" value={this.state.FirstName} onChange={this.FirstNameHandler} required pattern="[A-Z]{1}[a-z]{1,}"></input></td>
                        </tr>

                        <label id="middleNamelabel" class="hidden">First letter should be Capital</label>
                        <tr>
                            <td><label>MiddleName: </label></td>
                            <td><input type="text" Placeholder="Enter the MiddleName" value={this.state.MiddleName} onChange={this.MiddleNameHandler} required pattern="[A-Z]{1}[a-z]{1,}"></input></td>
                        </tr>

                        <label id="lastNamelabel" class="hidden">First letter should be Capital</label>
                        <tr>
                            <td><label>LastName: </label></td>
                            <td><input type="text" Placeholder="Enter the LastName" value={this.state.LastName} onChange={this.LastNameHandler} required pattern="[A-Z]{1}[a-z]{1,}"></input></td>
                        </tr>

                        <label id="mobileNumberlabel2" class="hidden">Should be 10 digits</label>
                        <label id="mobileNumberlabel" class="hidden">First digit Should be (6,7,8,9)</label>
                        <tr>
                            <td><label>MobileNumber: </label></td>
                            <td><input type="text" Placeholder="Enter the MobileNumber" value={this.state.MobileNumber} onChange={this.MobileNumberHandler} required pattern="[6-9]{1}[0-9]{9,9}"></input></td>
                        </tr><br></br>

                        <tr>
                            <td><label>Email: </label></td>
                            <td><input type="email" Placeholder="Enter the Email" value={this.state.Email} onChange={this.EmailHandler} required ></input></td>
                        </tr><br></br>

                        <tr>
                            <td><label>Gender: </label></td>
                            <td><input type="radio" value="Male" name="Gender" onChange={this.GenderHandler} required ></input><label>Male</label>&nbsp;
                                <input type="radio" value="Female" name="Gender" onChange={this.GenderHandler} required ></input><label>Female</label>&nbsp;
                                <input type="radio" value="Others" name="Gender" onChange={this.GenderHandler} required ></input><label>Others</label></td>
                        </tr><br></br>

                    </table>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <button Style="margin-bottom:13px;font-size:25px;background-color:lightgreen" type="submit" size="10px">Submit</button>
                </form>

            </div>
        )
    }
}

export default AddCustomer