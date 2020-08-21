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

export default class FavouriteSubjects extends React.Component{
    render(){

        const skillsList=this.props.subjects.map(subject=> <ListItemText key = {subject.favouriteSubjectId} primary = {subject.favouriteSubjectName}/>)
        return (
          <div>
              <Divider />
              <Typography variant="h5" component="h2" style={{margin: '20px'}}>
                Favourite Subjects
              </Typography>
             <List>
             {skillsList}
             </List>
          </div>
        );
      }

}