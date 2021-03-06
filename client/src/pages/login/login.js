import React, {useState} from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'

function Login() {

    let history = useHistory

    const [emailLogin, setEmailLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")

    const login = () => {
        console.log(emailLogin)

        Axios.post(`http://localhost:6969/login`, {
          email: emailLogin,
          password: passwordLogin
        }).then((response) => {
          console.log(response)
        }).then(
        ).catch((error) => {
          console.log(error)
        })
      }

    return(
    <div>
    <h2>Login</h2>
    <label>Enter Email</label>
    <input type="text" placeholder="Email..." onChange={(e) => {setEmailLogin(e.target.value)}}/>

    <label>Enter Password</label>
    <input type="password" placeholder="Password..." onChange={(e) => {setPasswordLogin(e.target.value)}}/>

    <button onClick={login}> Login </button>

      <div>
        Need an account? <a href="/register">Register </a>
      </div>

    </div>
    )
}

export default Login