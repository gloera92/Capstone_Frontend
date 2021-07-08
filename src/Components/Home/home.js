import React from 'react';
import './home.css';
import '../images/dog1.jpg';
import ReactPlayer from "react-player"



const Home = () => {

    return (
        <div className="home">
            
            <h1>K9 Find</h1>
            <br></br>
            <h2>Videos to help get started!</h2>
            <ReactPlayer  
                url="https://www.youtube.com/watch?v=ankarynYtuk"    
            />             
            </div>
    )   
}

export default Home;