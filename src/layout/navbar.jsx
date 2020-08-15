import React from 'react';
import {Link} from 'react-router-dom';
import logo from "./logo.png";
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';

const Navbar = () => {
    return(
        <nav className='nav-wrapper grey'>
            <div className='container'>
                <Link to='/' classname="brand-logo"><img src={require('./logo.png')} alt="Logo" /></Link>
                <SignedInLink />
                <SignedOutLink />
            </div>
        </nav>
    )
}

export default Navbar 