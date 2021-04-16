import React, { useState } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import Axios from 'axios'
import './App.css';
import Register from './register/Register'
import Login from './login/login'

function App() {

  return (
    <div className="App">
      <h1>Anti Social Social Media</h1>

      <nav>
        <ul>
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      <BrowserRouter>
        <Switch>
          <Route path="/register" >
            <Register />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
