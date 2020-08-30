import React from 'react';
import {
  Typography,
  Divider,
  Chip,
} from '@material-ui/core';
export default class FavouriteSubjects extends React.Component {

  render() {
    const skillsList = this.props.subjects.map(subject => <Chip key={subject.favouriteSubjectId} label={subject.favouriteSubjectName} />)
    return (
      <div>
        <Divider />
        <Typography variant="h5" component="h2" style={{ margin: '20px' }}>
          Favourite Subjects
              </Typography>
        <div >
          {skillsList}
        </div>
      </div>
    );
  }

}