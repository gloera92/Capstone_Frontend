import React, {Component} from 'react';
import "./app.css";
import Home from './home';

class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1> K9 Find</h1>
                <Home />

            </div>
            
        );
    }
}

export default App;