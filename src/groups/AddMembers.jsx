import React from 'react';
import { Button, TextField, Select, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, FormControl, DialogTitle } from '@material-ui/core';
import { getUsersByName } from '../util/ApiUtils';

export default function AddMembers({ addUserToGroup }) {
    const [open, setOpen] = React.useState(false);
    const [user, setUser] = React.useState({});
    const [users, setUsers] = React.useState([]);
    const [name, setName] = React.useState('');
    const [user_role] = React.useState({ id: 1, name: "User" });
    const [admin_role] = React.useState({ id: 2, name: "Admin" });
    const [role,setRole] = React.useState(user_role);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log(name);
        getUsersByName(event.target.value).then(response => {
            console.log(response);
            setUsers(response);
        })

    }

    const handleUserChange = (event) => {
        setUser(event.target.value)
    }

    const handleRoleChange=(event)=>{
        setRole(event.target.value);
    }

    const handleAddClick = (event) => {
        console.log(user);
        console.log(role);
        addUserToGroup(user,role);
    }

    const userOptions = users.map(user => <MenuItem value={user}>{user.name}</MenuItem>)
    const body = (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle id="form-dialog-title">Search user</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please insert the name of the user you search.
             </DialogContentText>
                <FormControl>
                    <TextField id="groupName" label="Name" value={name} onChange={handleNameChange} />
                    <Select
                        labelId="demo-simple-select-label"
                        id="groupType"
                        value={user}
                        onChange={handleUserChange}
                    >
                        {userOptions}

                    </Select>
                    <Select
                        labelId="demo-simple-select-label"
                        id="groupType"
                        value={role}
                        onChange={handleRoleChange}
                    >
                        <MenuItem value={user_role}>{user_role.name}</MenuItem>
                        <MenuItem value={admin_role}>{admin_role.name}</MenuItem>

                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handleAddClick}>
                    Add
                </Button>
                <Button variant="contained" color="primary" onClick={handleClose}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );

    return (
        <div>
            <Button className="fixedbutton" variant="contained" onClick={handleOpen}> Add member</Button>
            {body}
        </div>
    );
}