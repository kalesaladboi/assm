import React, { useState } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import Axios from 'axios'
import './App.css';
import Register from './register/Register'
import Login from './login/login'
import Home from './home/home'
import MyUser from './user/myUser/myUser'

function App() {

  return (
    <div className="App">
      <nav>
        <h1>AntiSocialSocialMedia</h1>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/users/myuser">My Profile</a></li>
        </ul>
      </nav>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>          
          <Route path="/users/myuser">
            <MyUser />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;