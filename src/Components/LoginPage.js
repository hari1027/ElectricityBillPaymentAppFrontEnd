import React, { Component} from 'react'
import './LoginPage.css'






export class LoginPage extends Component {
   

    constructor(props) {
      super(props)
    
      this.state = {
         UserId:'',
         UserName:'',
         Password:'',
        
      }

     
      this.inputref = React.createRef();
    }


    
   
      

    UserIdHandler = (event) => {

        if (event.target.value > 99999) {
            document.getElementById("userIdlabel1").className = '';
        }
        else {
            document.getElementById("userIdlabel1").className = 'hidden';
        }
        this.setState({
            UserId: event.target.value
        })
    }

    UserNameHandler = (event) => {
        if (event.target.value[0] >= 'A' && event.target.value[0] <= 'Z') {
            document.getElementById("userNamelabel1").className = 'hidden';
        }
        else {
            document.getElementById("userNamelabel1").className = '';
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

    SignupHandler = (event) =>{
       
        console.log(event.target);
       window.location.href = "http://localhost:3000/customer/add";
    }

    SignInHandler = (event) =>{
         console.log(event.target);
         event.preventDefault();
         console.log(this.state.UserId)
         console.log(this.state.UserName)
         console.log(this.state.Password)
         
        alert("signed In sucessfully");
        }
     
         componentDidMount() {
        this.inputref.current.focus()
        console.log(this.inputref)
    }

    ForgetpasswordHandler =(event)=>{

        console.log(event.target);
        window.location.href = "http://localhost:3000/resetpassword";

    }

    


  render() {
    return (
      <div>
          <br></br><br></br><br></br>
          <form className='formStyle' onSubmit={this.SignInHandler}>
              <h2 Style="padding-left:280px;color:blue;margin-top:2px;font-style:italic;font-family:TheSpeakeasy;"><u>LoginPortal</u></h2><br></br>
               <table class="HomePage">

                <label id="userIdlabel1" class="hidden">Should be 5 digits</label>
                <tr>
                <td><label> <b>UserId: </b> </label></td>
                <td><input type="text" Placeholder="Enter the UserId" value={this.state.UserId} onChange={this.UserIdHandler} ref={this.inputref} required pattern="[1-9]{1}[0-9]{4,4}"></input></td>
                </tr>
                

                <label id="userNamelabel1" class="hidden">First letter should be Capital</label>
                <tr>
                <td><label> <b>UserName: </b></label></td>
                <td><input type="text" Placeholder="Enter the UserName" value={this.state.UserName} onChange={this.UserNameHandler} required pattern="[A-Z]{1}[a-z]{1,}"></input></td>
                </tr>
                <br></br>

                <tr>
                <td><label><b>Password: </b> </label></td>
                <td><input type="text" Placeholder="Enter the Password" value={this.state.Password} onChange={this.PasswordHandler} required pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$@#*\\/!¿?¡+%()=-])(.{8,})"></input></td>
                </tr>
                <br></br>

                </table>

                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button Style="align:left;margin-bottom:13px;font-size:15px;background-color:lightgreen" type="submit" size="10px" >SignIn</button> &nbsp;&nbsp;
                <button Style="align:right;margin-bottom:13px;font-size:15px;background-color:silver" size="10px" onClick={this.SignupHandler}>SignUp</button> <br></br> <br></br>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button Style="align:left;margin-bottom:13px;font-size:15px;background-color:lightgreen" type="click" size="10px" onClick={this.ForgetpasswordHandler} >ForgetPassword</button>
                
                
                
                
                
               
                
             </form>
      </div>
    )
  }
}

export default LoginPage