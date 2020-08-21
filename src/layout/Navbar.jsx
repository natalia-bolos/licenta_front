import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./logo.png";
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';
import './navbar.css';

const Navbar = ({ loggedIn, toggleLoggedIn }) => {
    return (
        <nav className='nav-wrapper nav-color'>
            <div className='container'>
                <Link to='/' className="brand-logo" ><img src={logo} alt="Logo" /></Link>
                {loggedIn ? <SignedInLink toggleLoggedIn={toggleLoggedIn}/> : <SignedOutLink />}
            </div>
        </nav>
    )
}

export default Navbar 