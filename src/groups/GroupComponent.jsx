import React from "react";
import {
    ListItem, ListItemText, Divider
} from '@material-ui/core'
import "./groupcomponent.css"

const GroupComponent =({id,name,type,description,onGroupClicked})=>{
    return(
        <div className="grouptext">
            <ListItem onClick={()=>onGroupClicked(id,name)}>
            <ListItemText
            primary={<h5>{name}</h5>}
            secondary={description}
            />
        </ListItem>
        <Divider />
        </div>
        
    )
};

export default GroupComponent;
