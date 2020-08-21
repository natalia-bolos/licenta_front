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
import { USER_ID } from '../constants';
import { getPersonalInfo} from '../util/ApiUtils';

export default class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moreInfo:{
                moreUserInfo: {
                    moreUserInfoId: 1,
                    userId: 19,
                    description: "",
                    university: "",
                    faculty: "",
                    year: 4,
                    city: ""
                },
                skills:[],
                subjects:[],
                name:"",
                mail:""
            } 
          };

    }
    componentDidMount() {
        getPersonalInfo(localStorage.getItem(USER_ID)).then(response=>{
            this.setState({moreInfo:response})
        })
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
                    <Avatar style={{ margin: '15px', width: '80px', height: '80px', color: '#' }}>NB</Avatar>
                    <Typography variant="h4" >
                      {this.state.moreInfo.name}
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
                                    secondary={this.state.moreInfo.name}
                                />
                            </ListItem>
                            <ListItem>
                            <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Email address"
                                    secondary={this.state.moreInfo.mail}
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
                                    secondary={this.state.moreInfo.moreUserInfo.university}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Faculty"
                                    secondary={this.state.moreInfo.moreUserInfo.faculty}
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
                                    secondary={this.state.moreInfo.moreUserInfo.year}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="City"
                                    secondary={this.state.moreInfo.moreUserInfo.city}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>

            </div>

        )
    }
}