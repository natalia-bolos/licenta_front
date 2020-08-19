import React from 'react';
import {
    Typography,
    Avatar,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    // Chip,
    // Card,
    // CardMedia,
    // CardContent,
    // CardActions,
    // IconButton
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default class UserPosts extends React.Component{
    render(){
 
        return (
          <div>
              <Divider />
              <Typography variant="h5" component="h2" style={{margin: '20px'}}>
                Recent Posts
              </Typography>
             
          </div>
        );
      }

}