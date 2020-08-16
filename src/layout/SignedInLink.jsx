import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLink = () => {
    return(
        <ul className="right">
            <li><NavLink to='/' className='btn btn-floating yellow darken-1'>NB</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
        </ul>
    )
}

export default SignedInLink 