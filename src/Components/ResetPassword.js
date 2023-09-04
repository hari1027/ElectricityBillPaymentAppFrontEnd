import React, { Component } from 'react'
import axios from 'axios'
import './ResetPassword.css'


export class ResetPassword extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         CustomerId:'',
         Password:''
      }
    }

    CustomerIdHandler = (event) => {

        if (event.target.value > 9999999999) {
            document.getElementById("customerIdlabel").className = '';
        }
        else {
            document.getElementById("customerIdlabel").className = 'hidden';
        }
        this.setState({
            CustomerId: event.target.value
        })
    }

    PasswordHandler = (event) => {
        this.setState({
            Password: event.target.value
        })
    }


    ForgetpasswordHandler =(event)=>{
        event.preventDefault();
        alert(`${this.state.CustomerId},${this.state.Password}`);
        console.log(`${this.state.CustomerId},${this.state.Password}`);

        const putRequest = {
            "userId": this.state.UserId,
            "password": this.state.Password,
        }

         axios.put(`http://localhost:8080/cc/updatepassword/1111111111`, putRequest)
        .then(() => {
            console.log("updated sucessfully");
        })
            .catch(error => {
                console.error("not updated", error);
              });


    }


  render() {
    return (
        <div>
        <br></br><br></br><br></br>
        <form className='formStyle1' onSubmit={this.ForgetpasswordHandler}>
        <table class="HomePage1">
        <h2 Style="padding-left:250px;color:blue;margin-top:2px;font-style:italic;font-family:TheSpeakeasy;"><u>ResetPassword</u></h2><br></br>

          
            <label id="customerIdlabel" class="hidden">Should be 10 digits</label>
            <tr>
            <td><label> <b>CustomerId:</b> </label></td>
            <td><input type="text" Placeholder="Enter the CustomerId" value={this.state.CustomerId} onChange={this.CustomerIdHandler} required pattern="[1-9]{1}[0-9]{9,9}"></input></td>
            </tr> <br></br>

            <tr>
            <td><label><b>Reset Password: </b> </label></td>
            <td><input type="text" Placeholder="Enter the NewPassword" value={this.state.Password} onChange={this.PasswordHandler} required pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$@#*\\/!¿?¡+%()=-])(.{8,})"></input></td>
            </tr>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button Style="align:left;margin-bottom:13px;font-size:15px;background-color:lightgreen" type="submit" size="10px"  >confirm</button>

        </table>
   </form>
   </div>

      
    )
  }
}

export default ResetPassword