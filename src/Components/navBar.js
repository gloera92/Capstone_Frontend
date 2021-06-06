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
                        <div className="nav-item"><NavLink to='/dogTable'>Dogs</NavLink></div>
                        <div className="nav-item"><NavLink to='/registerDog'>Register Dog</NavLink></div>
                        <div className="nav-item"><NavLink to='/dogMap'>Dog Map</NavLink></div>
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








{/* <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
                <li>
                    <Link to='/doglist'>Dogs</Link>
                </li>
                <li>
                    <Link to='/registerDog'>Register Dog</Link>
                </li>
                {!breeder &&
                    <React.Fragment>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </React.Fragment>
                }
                {breeder &&
                    <React.Fragment>
                        <li>
                            <Link to='/logout'>Logout</Link>
                        </li>
                    </React.Fragment>
                }
            </ul>
        
                </nav> */}