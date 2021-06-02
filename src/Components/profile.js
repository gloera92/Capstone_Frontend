import React, {Component} from 'react';
import axios from 'axios';
import './profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            breed: '',  
            color: '',
            age: '',
            size: '',
            gender: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async registerDog(dog){
        console.log(dog, 'registerdog');
        const response = await axios.post('http://127.0.0.1:8000/k9list/', dog)
        this.setState({
            dog: response.data
        })
        console.log(this.state, "registerdog")
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const dog = {
            name: this.state.name,
            breed: this.state.breed,
            color: this.state.color,
            age: this.state.age,
            size: this.state.size,
            gender: this.state.gender
        }
        this.registerDog(dog);
        this.setState({
            dog: ''
        })
    
    }

    render() {
        return (
            <div>
                <h1>Profile Page</h1>
                <h2>Welcome {this.props.getCurrentBreeder()}</h2>
                <form onSubmit={this.handleSubmit}>
                <h1>Register Dog</h1>
                    <label htmlFor="name"> Name:</label>
                    <input type="text" id="name" name="name" placeholder="Dogs Name" onChange={this.handleChange} value={this.state.name}></input>
                    <label htmlFor="breed"> Breed:</label>
                    <input type="text" id="breed" name="breed" placeholder="Dogs Breed" onChange={this.handleChange} value={this.state.breed}></input>
                    <label htmlFor="color">Color:</label> 
                    <input type="text" id="color" name="color" placeholder="Dogs Color" onChange={this.handleChange} value={this.state.color}></input>
                    <label htmlFor="age">Age:</label> 
                    <input type="text" id="age" name="age" placeholder="Dogs Age" onChange={this.handleChange} value={this.state.age}></input>
                    <label htmlFor="size">Size:</label> 
                    <input type="text" id="size" name="size" placeholder="Dogs Size" onChange={this.handleChange} value={this.state.size}></input>
                    <label htmlFor="gender">Gender:</label> 
                    <input type="text" id="gender" name="gender" placeholder="Dogs Gender (Male or Female)" onChange={this.handleChange} value={this.state.gender}></input>
                    <input type="submit" value='Register Dog'/>
                   
                </form>
            </div>
        )
    }
}

export default Profile;
    
    



    

