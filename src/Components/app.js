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
                breeder
            });
            console.log(breeder)
        } catch {

        }
        
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