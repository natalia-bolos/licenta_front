import React from 'react';
import {NavLink} from 'react-router-dom';
import { NAME } from '../constants';


const SignedInLink = ({toggleLoggedIn}) => {
    var getInitials = function (string) {
        var names = string.toString().split(' '),
            initials = names[0].substring(0, 1).toUpperCase();
        
        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    };
    const initials=getInitials(localStorage.getItem(NAME));

    return(
        <ul className="right">
            <li><NavLink to='/profile'  className='btn-floating btn-medium yellow darken-1'>{initials}</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            <li><NavLink to='/' onClick={toggleLoggedIn}>Log Out</NavLink></li>
        </ul>
    )
}

export default SignedInLink 
