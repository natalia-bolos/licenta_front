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
    IconButton
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SchoolIcon from '@material-ui/icons/School';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import '../UserProfile/styles.css';


export default class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);
    }
   

    getInitials = function (string) {
        var names = string.toString().split(' '),
            initials = names[0].substring(0, 1).toUpperCase();
        
        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
                    <Avatar style={{ margin: '15px', width: '80px', height: '80px', color: '#FBC410' }}>{this.getInitials(this.props.moreInfo.name)}</Avatar>
                    <Typography variant="h4" >
                      {this.props.moreInfo.name}
                    </Typography>
                </div>
                <Divider />
                <Typography variant="h5" component="h2" style={{ margin: '20px' }}>
                    Personal info
                </Typography>
                <Divider />
                <Grid container spacing={2}>
                    <Grid item s>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Name"
                                    secondary={this.props.moreInfo.name}
                                />
                            </ListItem>
                            <ListItem>
                            <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Email address"
                                    secondary={this.props.moreInfo.mail}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item s>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <SchoolIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="University"
                                    secondary={this.props.moreInfo.moreUserInfo.university}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SchoolIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Faculty"
                                    secondary={this.props.moreInfo.moreUserInfo.faculty}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item s>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <HourglassEmptyIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Year of study"
                                    secondary={this.props.moreInfo.moreUserInfo.year}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="City"
                                    secondary={this.props.moreInfo.moreUserInfo.city}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>

            </div>

        )
    }
}