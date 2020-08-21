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

export default class Skills extends React.Component{
    render(){

        const skillsList=this.props.skills.map(skill=> <ListItemText key = {skill.skillId} primary = {skill.skillName}/>)
        return (
          <div>
              <Divider />
              <Typography variant="h5" component="h2" style={{margin: '20px'}}>
                Skills
              </Typography>
             <List>
             {skillsList}
             </List>
          </div>
        );
      }

}