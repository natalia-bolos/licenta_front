import React from 'react';
import {NavLink} from 'react-router-dom';


const SignedInLink = ({toggleLoggedIn}) => {
    return(
        <ul className="right">
            <li><NavLink to='/profile'  className='btn-floating btn-medium yellow darken-1'>NB</NavLink></li>
            <li><NavLink to='/' onClick={toggleLoggedIn}>Log Out</NavLink></li>
        </ul>
    )
}

export default SignedInLink 
