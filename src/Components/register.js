import React, {Component} from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',  
            password: '',
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async registerBreederAccount(breeder){
        console.log(breeder, 'registerBreeder');
        const response = await axios.post('http://127.0.0.1:8000/register/', breeder)
        this.setState({
            token: response.data,
            email: response.data.email
            
        })
        console.log(this.state, "registerbreederaccount")
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        debugger;
        event.preventDefault();
        const breeder = {
            email: this.state.email,
            password: this.state.password,         
        }
        this.registerBreederAccount(breeder);
        this.setState({
            breedertoken: '',
            breederemail: ''
        })
        console.log(breeder, "handle submit")
    
    }

    render() {
        return (
            <div>
                <h1>Register Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label> 
                    <input type="text" name="email" onChange={this.handleChange} value={this.state.email}></input>
                    <label>Password:</label> 
                    <input type="text" name="password" onChange={this.handleChange} value={this.state.password}></input>
                    <input type="submit" value='Register'/>
                   
                </form>
            </div>
        )
    }
}

export default Register;