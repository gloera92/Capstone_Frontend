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
            gender: '',
            user: ``,
            zipcode: ''
        };
        console.log(this.state.user, "user from profile page")
        
        
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
            zipcode: this.state.zipcode
        }
        console.log(this.user)
        this.registerDog(dog);
        this.setState({
            dog: ''
        })
    
    }

    render() {
        return (
            <div className="profile">
                
                <h1>Profile</h1>
                <h3>Welcome {this.props.getCurrentBreeder()}</h3>
                
                
            </div>
        )
    }
}

export default Profile;
    
    



    

