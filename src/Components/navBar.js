import React from 'react';
import { Link } from 'react-router-dom';



const NavBar =({ breeder }) => {

    return (
        <div>
            {breeder && <h4>Welcome {breeder.token}</h4>}
        <nav>
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
        </nav>
        </div>
    )
}

export default NavBar;