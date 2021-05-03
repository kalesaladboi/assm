import React, {Component} from 'react'
import axios from 'axios'

export default class Registration extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: "",
            username: "",
            password: "",
            password_confirmation: "",
            registration_errors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event) {

        const{
            email,
            username,
            password,
            password_confirmation
        } = this.state

        axios.post("http://localhost:3001/registrations", {
            user: {
                email: email,
                username: username,
                password: password,
                password_confirmation: password_confirmation
            }
        },
        { withCredentials: true }
        ).then(response => {
            if (response.data.status === 'created')
            this.props.handleSuccessfulAuth(response.data)
        }).catch(error => {
            console.log("registration error:", error)
        })
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    required />

                    <input 
                    type="username" 
                    name="username" 
                    placeholder="Username" 
                    value={this.state.username} 
                    onChange={this.handleChange} 
                    required />

                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    required />

                    <input 
                    type="password" 
                    name="password_confirmation" 
                    placeholder="Password Confirmation" 
                    value={this.state.password_confirmation} 
                    onChange={this.handleChange} 
                    required />

                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}