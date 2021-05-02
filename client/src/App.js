import React, { useState } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import Axios from 'axios'
import './App.css';
import Register from './pages/register/Register'
import Login from './pages/login/login'
import Home from './pages/home/home'
import MyUser from './pages/profile/profile'
import VideoJS from './pages/movienight/MovieNight'

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