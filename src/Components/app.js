import React from 'react';
import "./app.css";
import Home from './home';
import NavBar from './navBar';
import Profile from './profile';
import { Switch, Route} from 'react-router-dom';
import Register from './register';



function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/profile" exact component={Profile} />
            </Switch>
        </div>
    )
}





export default App;