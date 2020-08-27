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
    ListItemText,g
    // Chip,
    // Card,
    // CardMedia,
    // CardContent,
    // CardActions,
    // IconButton
} from '@material-ui/core';

export default class Skills extends React.Component{
    render(){

        const skillsList=this.props.skills.map(skill=> <Chip  key = {skill.skillId} label = {skill.skillName}/>)
        return (
          <div>
              <Divider />
              <Typography variant="h5" component="h2" style={{margin: '20px'}}>
                Skills
              </Typography>
             <div>
             {skillsList}
             </div>
          </div>
        );
      }

}