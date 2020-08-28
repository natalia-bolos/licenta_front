import React from "react";
import {
    ListItem, ListItemText, Menu, MenuItem
} from '@material-ui/core'
import "./groupcomponent.css"

const MemberComponent = ({ userId, name, mail, username, onMemberClicked,seeProfile }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick=()=>{
        seeProfile(userId);
    }

    return (
        <div>
            <ListItem >
                <ListItemText onClick={handleClick}
                    primary={name}
                    secondary={username}
                    value={userId}
                />
            </ListItem>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleProfileClick}>See Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>

    )
};

export default MemberComponent;