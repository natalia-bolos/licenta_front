import React from "react";
import {
    ListItem, ListItemText
} from '@material-ui/core'
const GroupComponent =({id,name,type,description,onGroupClicked})=>{
    return(
        <ListItem onClick={()=>onGroupClicked(id,name)}>
            <ListItemText
            primary={<h4>{name}</h4>}
            secondary={description}
            />
        </ListItem>
    )
};

export default GroupComponent;
