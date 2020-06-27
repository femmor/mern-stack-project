import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    {/* tips: to change the nav placement use .fixed-top,.fixed-bottom,.sticky-top */}
                    <Link className="navbar-brand" to="/">Exercise Tracker</Link>
            
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Exercises <span className="sr-only">(current)</span></Link>
                            </li>
                
                            <li className="nav-item">
                                <Link className="nav-link" to="/create-exercise">Create Exercise Log</Link>
                            </li>
                
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/create-user">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
