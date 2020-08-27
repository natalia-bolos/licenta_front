import React from 'react';
import {
  Typography,
  Avatar,
  Divider,
  Chip,
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
import { makeStyles } from '@material-ui/core/styles';
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