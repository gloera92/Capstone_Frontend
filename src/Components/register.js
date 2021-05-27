import React, {Component} from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            zipcode: '',
            username: '',
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async registerBreeder(breeder){
        console.log(breeder, 'registerBreeder');
        const response = await axios.post('http://127.0.0.1:8000/breeders/', breeder)
        this.setState({
            breeder: response.data
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const breeder = {
            name: this.state.name,
            zipcode: this.state.zipcode,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        this.registerBreeder(breeder);
        this.setState({
            name: '',
            zipcode: '',
            username: '',
            email: '',
            password: 0,
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name}></input>
                    <label>Zipcode:</label>
                    <input type="text" name="zipcode" onChange={this.handleChange} value={this.state.zipcode}></input>
                    <label>Username:</label>
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username}></input>
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