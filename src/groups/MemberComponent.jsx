import React from "react";
import {
    ListItem, ListItemText, Menu, MenuItem,
    Button, Select, Dialog, DialogActions, DialogContent, DialogContentText, FormControl, DialogTitle
} from '@material-ui/core'
import "./groupcomponent.css"


const MemberComponent = ({ userId, name, username, role, user, isAdminOrCreator, group, updateMembership, handleChatClick, seeProfile }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [ROLE_USER] = React.useState({ id: 1, name: "User" });
    const [ROLE_ADMIN] = React.useState({ id: 2, name: "Admin" });
    const [ROLE_CREATOR] = React.useState({ id: 3, name: "Creator" });
    const roles = [
        {}, ROLE_USER, ROLE_ADMIN, ROLE_CREATOR
    ]
    const [selectedRole, setSelectedRole] = React.useState(roles[role.roleId]);
    const roleNames = ["User", "Admin", "Creator"];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = () => {
        seeProfile(userId);
    }

    const handleMenuChatClick = () => {
        handleChatClick(userId);
    }

    const handleRoleUpdate = () => {
        handleDialogOpen();
    }

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    }

    const handleDialogOpen = () => {
        setSelectedRole(roles[role.roleId]);
        console.log(selectedRole);
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
    };


    const handleSetClick = () => {
        updateMembership({
            groupId: group,
            userId: userId,
            roleId: selectedRole.id
        });
    }



    const body = (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle id="form-dialog-title">{name}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please select the role you want to assign to this user
             </DialogContentText>
                <FormControl>
                    <Select
                        labelId="demo-simple-select-label"
                        id="groupType"
                        value={selectedRole}
                        onChange={handleRoleChange}
                    >
                        <MenuItem value={ROLE_USER}>{ROLE_USER.name}</MenuItem>
                        <MenuItem value={ROLE_ADMIN}>{ROLE_ADMIN.name}</MenuItem>

                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handleSetClick}>
                    Set
                </Button>
                <Button variant="contained" color="primary" onClick={handleDialogClose}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );

    return (
        <div>
            {/* <p>{role.name}</p> */}
            <ListItem >
                <ListItemText onClick={handleClick}
                    primary={name}
                    secondary={<span><p>{username}</p><p>{roleNames[role.roleId - 1]}</p></span>}
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
                {role.name != 'ROLE_CREATOR' && isAdminOrCreator ? <MenuItem onClick={handleRoleUpdate}>Update Role</MenuItem> : ''}
                <MenuItem onClick={handleMenuChatClick}>Chat</MenuItem>
            </Menu>
            {body}
        </div>

    )
};

export default MemberComponent;