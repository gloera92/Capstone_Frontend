import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import './navBar.css';


const NavBar =({ breeder }) => {

    return (
        <div className="pill-nav">
        <div className="row nav-bar container">        
            <div className="col 16">
                 {breeder && 
                    <React.Fragment>
                        <div className="nav-item"><Link to='/'>Home</Link></div>
                        <div className="nav-item"><NavLink to='/profile'>Profile</NavLink></div>
                        <div className="nav-item"><NavLink to='/dogList'>Dogs</NavLink></div>
                        <div className="nav-item"><NavLink to='/registerDog'>Register Dog</NavLink></div>
                        <div className="nav-item"><NavLink to='/dogMap'>Dog Map</NavLink></div>
                        <div className="nav-item"><NavLink to='/literList'>Liter</NavLink></div> 
                        <div className="nav-item"><NavLink to='/checkout'>checkout</NavLink></div>  
                        <div className="nav-item"><NavLink to='/logout'>Logout</NavLink></div>                       
                    </React.Fragment>} 
                {!breeder &&
                    <React.Fragment>
                    <div className="nav-item"><NavLink to='/register'>Register</NavLink></div>
                    <div className="nav-item"><NavLink to='/login'>Log in</NavLink></div></React.Fragment>}     
                </div>
            </div>
        </div>
    )
}

export default NavBar;