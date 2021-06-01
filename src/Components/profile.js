import React, {Component} from 'react';
import axios from 'axios';


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
                <form onSubmit={this.handleSubmit}>
                <h1>Register Dog</h1>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name}></input>
                    <label>Breed:</label> 
                    <input type="text" name="breed" onChange={this.handleChange} value={this.state.breed}></input>
                    <label>Color:</label> 
                    <input type="text" name="color" onChange={this.handleChange} value={this.state.color}></input>
                    <label>Age:</label> 
                    <input type="text" name="age" onChange={this.handleChange} value={this.state.age}></input>
                    <label>Size:</label> 
                    <input type="text" name="size" onChange={this.handleChange} value={this.state.size}></input>
                    <label>Gender:</label> 
                    <input type="text" name="gender" onChange={this.handleChange} value={this.state.gender}></input>
                    <input type="submit" value='Register Dog'/>
                   
                </form>
            </div>
        )
    }
}

export default Profile;
    
    



    

