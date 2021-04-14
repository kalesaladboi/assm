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
        <input type="text"/>
        <label>Enter Username</label>
        <input type="text"/>
        <label>Enter Email</label>
        <input type="text"/>
        <label>Enter Birthday</label>
        <input type="Date"/>
        <label>Enter Password</label>
        <input type="password"/>
        <label>Confirm Password</label>
        <input type="password2"/>
        <h2>Login</h2>
        <label>Enter Email</label>
        <input type="text"/>
        <label>Enter Password</label>
        <input type="password"/>
    </div>
  );
}

export default App;
