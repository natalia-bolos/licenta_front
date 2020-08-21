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
import { USER_ID } from '../constants';
import { getPersonalInfo} from '../util/ApiUtils'

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreInfo: {
        moreUserInfo: {
          moreUserInfoId: 1,
          userId: 19,
          description: "",
          university: "",
          faculty: "",
          year: 4,
          city: ""
        },
        skills: [],
        subjects: [],
        name: "",
        mail: ""
      }
    };

  }

  componentDidMount() {
    getPersonalInfo(localStorage.getItem(USER_ID)).then(response => {
      this.setState({ moreInfo: response })
    })
  }

  render() {
    console.log(this.state.moreInfo);
    return (
      <div className='profile-cont'>
        <PersonalInfo moreInfo={this.state.moreInfo} />
        <Skills skills={this.state.moreInfo.skills} />
        <UserPosts />
      </div>
    )
  }

}

