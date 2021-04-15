import React, { useState } from "react"
import Axios from 'axios'
import './App.css';

function App() {

  const [nameReg, setNameReg] = useState("")
  const [usernameReg, setUsernameReg] = useState("")
  const [emailReg, setEmailReg] = useState("")
  const [birthdayReg, setBirthdayReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")
  const [password2Reg, setPassword2Reg] = useState("")

  const register = () => {

    Axios.post("https://localhost6969/register", { 
      name: nameReg, 
      userName: usernameReg, 
      email: emailReg, 
      birthday: birthdayReg, 
      password: passwordReg, 
      password2: password2Reg 
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <div className="App">
      <h1>Anti Social Social Media</h1>
        <div id="register">
        <h2>Register</h2>
        <form action="/register" method="POST">
        <label>Enter Name<span class="req">*</span></label>
        <input type="text" onChange={(e) => {setNameReg(e.target.value)}}/>

        <label>Enter Username<span class="req">*</span></label>
        <input type="text" onChange={(e) => {setUsernameReg(e.target.value)}}/>

        <label>Enter Email<span class="req">*</span></label>
        <input type="email" onChange={(e) => {setEmailReg(e.target.value)}}/>

        <label>Enter Birthday<span class="req">*</span></label>
        <input type="Date" onChange={(e) => {setBirthdayReg(e.target.value)}}/>

        <label>Enter Password<span class="req">*</span></label>
        <input type="password" onChange={(e) => {setPasswordReg(e.target.value)}}/>

        <label>Confirm Password<span class="req">*</span></label>
        <input type="password" onChange={(e) => {setPassword2Reg(e.target.value)}}/>

        <button onClick={register}> Register </button>
        </form>
        </div>

        <div>
        <h2>Login</h2>
        <label>Enter Email</label>
        <input type="text" placeholder="Username..."/>
        <label>Enter Password</label>
        <input type="password" placeholder="Password..."/>
        <button> Register </button>
        </div>
    </div>
  );
}

export default App;
