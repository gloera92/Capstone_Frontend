import React, {Component} from 'react';
import axios from 'axios';



class RegisterDog extends Component {
    constructor(props) {
        super(props);
        

        this.state = {
            name: '',
            breed: '',  
            color: '',
            age: '',
            size: '',
            gender: '',
            user: ``,
            zipcode: '',
            cost: '',
        };
        
        console.log(this.props.user, "user from register dog page")
        
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    

    async registerDog(dog){
        console.log(dog, 'registerdog');
        const token = localStorage.getItem('token');
        const response = await axios.post('http://127.0.0.1:8000/k9list/', dog,{headers: {
            'Authorization': `Bearer ${token}`
        }})
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
            gender: this.state.gender,
            user: `${this.props.user}`,
            zipcode: this.state.zipcode,
            cost: this.state.cost
        }
        console.log(this.user)
        this.registerDog(dog);
        this.setState({
            dog: ''
        })
    
    }

    render() {
        return (
            <div className="registerDog">
                
                
                <form  onSubmit={this.handleSubmit}>
                <br></br>
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
                    <label htmlFor="zipcode">Zipcode:</label> 
                    <input type="text" id="zipcode" name="zipcode" placeholder="Dogs Zipcode" onChange={this.handleChange} value={this.state.zipcode}></input>
                    <label htmlFor="cost">Cost:</label> 
                    <input type="text" id="cost" name="cost" placeholder="Cost for Breeding" onChange={this.handleChange} value={this.state.cost}></input>
                    <input type="submit" value='Register Dog'/>
                   
                </form>
                
            </div>
        )
    }
}

export default RegisterDog;