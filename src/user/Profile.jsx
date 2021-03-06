import React from 'react';
import PersonalInfo from '../UserProfile/PersonalInfo';
import Skills from '../UserProfile/Skills';
import FavouriteSubjects from '../UserProfile/FavouriteSubjects';
import '../UserProfile/styles.css';
import { getPersonalInfo } from '../util/ApiUtils'

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
    getPersonalInfo(this.props.match.params.userId).then(response => {
      this.setState({ moreInfo: response })
    })
  }

  render() {
    return (
      <div className='profile-cont'>
        <PersonalInfo moreInfo={this.state.moreInfo} />
        <Skills skills={this.state.moreInfo.skills} />
        <FavouriteSubjects subjects={this.state.moreInfo.subjects} />
      </div>
    )
  }

}

