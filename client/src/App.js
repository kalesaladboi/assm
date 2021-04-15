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
  const [emailLogin, setEmailLogin] = useState("")
  const [passwordLogin, setPasswordLogin] = useState("")

  const login = () => {

    Axios.get("http://localhost:6969/", {
      email: emailLogin,
      password: passwordLogin
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

  const register = () => {

    Axios.post("http://localhost:6969/login", { 
      name: nameReg,
      userName: usernameReg,
      email: emailReg,
      birthday: birthdayReg, 
      password: passwordReg,
      password2: password2Reg
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="App">
      <h1>Anti Social Social Media</h1>
        <div id="register">
        <h2>Register</h2>
        <form action="/" method="POST">
        <label>Enter Name</label>
        <input type="text" onChange={(e) => {setNameReg(e.target.value)}}/>

        <label>Enter Username</label>
        <input type="text" onChange={(e) => {setUsernameReg(e.target.value)}}/>

        <label>Enter Email</label>
        <input type="email" onChange={(e) => {setEmailReg(e.target.value)}}/>

        <label>Enter Birthday</label>
        <input type="Date" onChange={(e) => {setBirthdayReg(e.target.value)}}/>

        <label>Enter Password</label>
        <input type="password" onChange={(e) => {setPasswordReg(e.target.value)}}/>

        <label>Confirm Password</label>
        <input type="password" onChange={(e) => {setPassword2Reg(e.target.value)}}/>

        <button onClick={register}> Register </button>
        </form>
        </div>

        <div>
        <h2>Login</h2>
        <label>Enter Email</label>
        <input type="text" placeholder="Email..." onChange={(e) => {setEmailLogin(e.target.value)}}/>
        <label>Enter Password</label>
        <input type="password" placeholder="Password..." onChange={(e) => {setPasswordLogin(e.target.value)}}/>
        <button onClick={login}> Login </button>
        </div>
    </div>
  );
}

export default App;
