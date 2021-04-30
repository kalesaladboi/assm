import React, { useState } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import Axios from 'axios'
import './App.css';
import Register from './register/Register'
import Login from './login/login'
import Home from './home/home'
import MyUser from './user/myUser'
import VideoJS from './movienight/MovieNight'

function App() {

  return (
    <div className="App">
      <nav>
        <h1>yeet yeeter</h1>
        <ul>
          <a href="/home">Home</a>
          <a href="/register">Register</a>
          <a href="/login">Login</a>
          <a href="/myUser">My Profile</a>
          <a href="/movieNight">Movie Night</a>
        </ul>
      </nav>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>          
          <Route path="/myUser">
            <MyUser />
          </Route>
          <Route path="/movieNight">
            <VideoJS />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;