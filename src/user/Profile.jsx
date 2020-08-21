import React from 'react';
// import {
//     Typography,
//     Avatar,
//     Divider,
//     Grid,
//     List,
//     ListItem,
//     ListItemIcon,
//     ListItemText,
//     Chip,
//     Card,
//     CardMedia,
//     CardContent,
//     CardActions,
//     IconButton
//   } from '@material-ui/core';
// import PersonIcon from '@material-ui/icons/Phone';
// import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
// import EmailIcon from '@material-ui/icons/Email';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonalInfo from '../UserProfile/PersonalInfo';
import UserPosts from '../UserProfile/UserPosts';
import Skills from '../UserProfile/Skills';
import '../UserProfile/styles.css';
import MoreInfo from '../user/MoreInfo';
 
export default class Profile extends React.Component {
  render() {

    return (
      <div className='profile-cont'>
        <PersonalInfo />
        <Skills />
        <UserPosts />
      </div>
    )
  }
 
}

