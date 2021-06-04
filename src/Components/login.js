import React, {Component} from 'react';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',  
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async loginBreederAccount(breeder){
        console.log(breeder, 'LoginBreederAccount');
        const response = await axios.post('http://127.0.0.1:8000/login/', breeder)
        this.setState({
            token: response.data.token,
            email: response.data.email,           
        })
       
        console.log(this.state, "login")
        console.log(response, "username")
    }

    async loginBreeder (breederObject) {
        console.log(breederObject,"login breeder");
        try {
            await this.loginBreederAccount(breederObject);

            localStorage.setItem('token', this.state.token);
            localStorage.setItem('email', this.state.email)
            window.location = '/';
        } catch (ex) {
            if(ex.response && ex.response.status === 400){
            }   
        }
    }

    




    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
       
        event.preventDefault();
        const breeder = {
            email: this.state.email,
            password: this.state.password
        }
        this.loginBreeder(breeder);
        this.setState({
            token: breeder,
            email: breeder.email,
            id: breeder.id
        })
    
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input type="text" name="email" onChange={this.handleChange} value={this.state.email}></input>
                    <label>Password:</label> 
                    <input type="text" name="password" onChange={this.handleChange} value={this.state.password}></input>
                    <input type="submit" value='Login'/>
                   
                </form>
            </div>
        )
    }
}

export default Login;