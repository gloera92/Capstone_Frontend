import React from 'react';
import ReactDom from 'react-dom';
import App from './Components/App/app';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';




ReactDom.render(
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
)
