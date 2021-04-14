import './App.css';

function App() {

  const [nameReg, setNameReg] = useState('')
  const [usernameReg, setUsernameReg] = useState('')
  const [emailReg, setEmailReg] = useState('')
  const [birthdayReg, setBirthdayReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')  
  const [password2Reg, setPassword2Reg] = useState('')


  return (
    <div className="App">
      <h1>Anti Social Social Media</h1>
        <h2>Register</h2>
        <label>Enter Name</label>
        <input type="text" onChange={(e)=> {setNameReg(e.target.value)}}/>
        <label>Enter Username</label>
        <input type="text" onChange={(e)=> {setUsernameReg(e.target.value)}}/>
        <label>Enter Email</label>
        <input type="text" onChange={(e)=> {setEmailReg(e.target.value)}}/>
        <label>Enter Birthday</label>
        <input type="Date" onChange={(e)=> {setBirthdayReg(e.target.value)}}/>
        <label>Enter Password</label>
        <input type="password" onChange={(e)=> {setPasswordReg(e.target.value)}}/>
        <label>Confirm Password</label>
        <input type="password2" onChange={(e)=> {setPassword2Reg(e.target.value)}}/>
        <h2>Login</h2>
        <label>Enter Email</label>
        <input type="text" placeholder="Username..." />
        <label>Enter Password</label>
        <input type="password" placeholder="Password..." />
    </div>
  );
}

export default App;
