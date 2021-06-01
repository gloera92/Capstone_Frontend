import React, { Component } from 'react';
import "./app.css";
import Home from './home';
import NavBar from './navBar';
import Profile from './profile';
import { Switch, Route, Redirect} from 'react-router-dom';
import Register from './register';
import Login from './login';
import Logout from './logout';
import NotFound from './notFound';
// import jwtDecode from 'jwt-decode';
import axios from 'axios';
import DogTable from './dogTable';
import Dogs from './dogs';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breeder: [],
            dogs: []
        }

    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        try{
            const breeder =(token);
            this.setState({
                breeder,
                
            });
            console.log(breeder, "component did mount")
        } catch {

        }  
        this.getAllDogs()   
    }


     getCurrentBreeder(){
        const response =  axios.get('http://127.0.0.1:8000/login/')
        this.setState({
            breeders: response.data
        })
        console.log("getAllUsers", response.data);
    }

   async getAllDogs(){
       let response = await axios.get('http://127.0.0.1:8000/k9list/');
       this.setState({
           dogs: response.data
       })
   }

   mapDogs(){
       return this.state.dogs.map(dog =>
        <Dogs
            key={dog.id}
            dog={dog}
            />,
        );
   }

    

    

    render() {
       const breeder = this.state.breeder;
        return (
            <div>
                <NavBar  breeder={breeder}/>
                <div className="App">
                    <Switch>
                        <Route path="/profile" render={props => {
                            if (!breeder){
                                return <Redirect to="/login" />;
                            } else {
                                return <Profile {...props} breeder={breeder} />
                            }
                        }}
                        />
                        <Route path="/register" exact component={Register}/>
                        <Route path="/login" exact component={Login} />
                        <Route path="/" exact component={Home} />
                        <Route path="/doglist" render={props => <DogTable {...props} mapDogs={() => this.mapDogs()} dogs={this.state.dogs}/>} />
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