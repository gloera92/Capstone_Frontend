import React, { Component } from 'react';
import "./app.css";
import Home from "../Home/home";
import NavBar from '../NavBar/navBar';
import Profile from '../Profile/profile';
import { Switch, Route, Redirect} from 'react-router-dom';
import Register from '../register';
import Login from '../login';
import Logout from '../logout';
import NotFound from '../notFound';
// import jwtDecode from 'jwt-decode';
import axios from 'axios';
import DogTable from '../dogTable';
import RegisterDog from '../registerDog';
import DogMap from '../findDogs';
import LiterList from '../literList';
// import Dogs from './dogList';
import ProductDisplay from '../checkout';
import Checkout from '../checkout';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breeder: '',
            dogs: '',
            user: '',
            filteredDogs: [],
            puppies: []
        }
    console.log(this.state.dogs, "state dogs")
    console.log(this.state.breeder, "this.state.breeder")
    console.log(this.user, "state user")
    
}

componentDidMount() {
    const token = localStorage.getItem('token');
    this.getCurrentBreederId();
    this.getAllDogs();
    this.filterDogs.bind(this);
    
    try{            
        const breeder =(token)
        this.setState({
            breeder,
            
        });           
        console.log( "component did mount")
    } catch {
    }
    
    this.filterDogs.bind(this)
    
    
}




getCurrentBreederId() {
    const token = localStorage.getItem('token');
    axios.get('http://127.0.0.1:8000/profile/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }       
    })
    .then((res) => {
        console.log(res.data, "res data")
        this.setState({
            user: res.data.data[0].id
            
        })
    })
    .catch((error) => {
        console.error(error)
    })
    
}

async getZipCode(zipcode) {
    let response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=+AR'+zipcode+'&key=AIzaSyCAFSMzPFaMorkiyNVryeFjnPMdfa9gwGQ')
    
    this.setState({
        dogs: response.data
    })
    console.log(this.dogs, "getzipcode data")
}



getCurrentBreeder(){
    const email =  localStorage.getItem('email');      
    return email
}

async getAllDogs(){
    const token = localStorage.getItem('token');
    let response = await axios.get('http://127.0.0.1:8000/k9list/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    this.setState({
        dogs: response.data
    })
}

// mapDogs(){
//     return this.state.dogs.map(dog =>
//         <Dogs
//         key={dog.id}
//         dog={dog}
//         deleteDogs={(id) => this.deleteDogs(id)}
//         />,
        
//         );
//     }


    async getPuppies(){
    let response = await axios.get('http://127.0.0.1:8000/literlist/');
    this.setState({
        puppies: response.data
    })
    
}





filterDogs(){
    let dog = this.state.dogs;
    let i = 0;
    let filteredDogs = this.state.dogs.filter((dog) =>{
        if (this.state.dogs[i].user === this.state.user){
            i++
            return true;
        }
        else{
            i++
            return false;
        }
    })
    this.setState({
        filteredDogs : filteredDogs
    })
    console.log('filteredDogs',this.state.filteredDogs)
    }

    


    
     
    render() {
        const user = this.state.user;
        console.log(user, "render user")
        const breeder = this.state.breeder;
        const dogs = this.state.dogs;
        const puppies = this.state.puppies;
            return (
                <div>
                    
                    <NavBar  breeder={breeder}/>
                    <div className="App">
                        <Switch>
                            <Route path="/profile" render={props => {
                                if (!breeder){
                                    return <Redirect to="/login" />;
                                } else {
                                    return <Profile {...props} breeder={breeder} getCurrentBreeder={() => this.getCurrentBreeder()}  user={user} filterDogs={() => this.filterDogs.bind(this)} filteredDogs={this.state.filteredDogs} getAllDogs={() => this.getAllDogs()} getZipCode={() => this.getZipCode.bind(this)}  />
                                }
                            }}
                            />
                            <Route path="/" exact component={Home} getCurrentBreeder={() => this.getCurrentBreeder()} getCurrentBreederId={() => this.getCurrentBreederId()}/>
                            <Route path="/register" exact component={Register}/>
                            <Route path="/login" exact component={Login} />
                            <Route path="/registerDog" render={props => <RegisterDog {...props}  getCurrentBreederId={() => this.getCurrentBreederId()}  user={user}/>}/>
                            <Route path="/dogList" render={props => <DogTable {...props}  getAllDogs={() => this.getAllDogs()}   dogs={dogs}/>}  />
                            <Route path="/dogMap" render={props => <DogMap {...props}  getZipCode={() => this.getZipCode.bind(this)} dogs={dogs}/>} /> 
                            <Route path="/literList" render={props => <LiterList {...props}  puppies={this.state.puppies} getPuppies={() => this.getPuppies()} />} />   
                            <Route path="/checkout" exact component={Checkout} />                            
                            <Route path="/logout" exact component={Logout} />
                            <Route path="/not-found" component={NotFound}/>
                            <Redirect to='/not-found'/>
                        </Switch>
                    </div>
                </div>
        )
    }
}


export default App;