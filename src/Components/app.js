import React, { Component } from 'react';
import "./app.css";
import Home from './home';
import NavBar from './navBar';
import Profile from './profile';
import { Switch, Route, Redirect} from 'react-router-dom';
import Register from './register';
import Login from './login';
// import jwtDecode from 'jwt-decode';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breederAccounts: [],
            breeders: [],
            dogs: []
        }
    }

    // componentDidMount() {
    //     const jwt = localStorage.getItem('token');
    //     try{
    //         const breeder = jwtDecode(jwt);
    //         this.setState({
    //             breeder
    //         });
    //     } catch {

    //     }
    // }

    render() {
       
        return (
            <div className="App">
                <NavBar  />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login} />
                    <Route path="/profile" exact component={Profile} />
                </Switch>
            </div>
        )
    }
}


export default App;