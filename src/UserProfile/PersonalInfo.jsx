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
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import '../UserProfile/styles.css';


export default class PersonalInfo extends React.Component {
    render() {

        return (
            <div>
                <div style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
                    <Avatar style={{ margin: '15px', width: '80px', height: '80px', color: '#' }}>NB</Avatar>
                    <Typography variant="h4" >
                        Natalia Bolos
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
                                    secondary="Natalia Bolos"
                                />
                            </ListItem>
                            <ListItem>
                            <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Email address"
                                    secondary="natalia_bolos@yahoo.com"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item s>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="University"
                                    secondary="UTCN"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Faculty"
                                    secondary="ETTI"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item s>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Year of study"
                                    secondary="4"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="City"
                                    secondary="Cluj-Napoca"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>

            </div>

        )
    }
}