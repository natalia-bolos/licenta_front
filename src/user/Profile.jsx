import React from 'react';
import PersonalInfo from '../UserProfile/PersonalInfo';
import UserPosts from '../UserProfile/UserPosts';
import Skills from '../UserProfile/Skills';
import FavouriteSubjects from '../UserProfile/FavouriteSubjects';
import '../UserProfile/styles.css';
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
        <FavouriteSubjects subjects={this.state.moreInfo.subjects}/>
        <UserPosts />
      </div>
    )
  }

}

