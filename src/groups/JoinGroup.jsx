import React from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { USER_ID } from '../constants';
import './joingroup.css';

export default function JoinGroup({ allGroups,joinGroup }) {
    const [open, setOpen] = React.useState(false);
    const [selectedGroup, setSelectedGroup] = React.useState({});
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleGroupNameChange = (option, value) => {
        if (value === option) {
            console.log(value);
            setSelectedGroup(value);
        }
    }

    const handleJoinClik = (event) => {    
        selectedGroup.userId=localStorage.getItem(USER_ID);
        console.log(selectedGroup);
        joinGroup(selectedGroup);

    }

    const body = (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle id="form-dialog-title">Create group</DialogTitle>
            <DialogContent>
                <Autocomplete
                    getOptionSelected={handleGroupNameChange}
                    id="combo-box-demo"
                    options={allGroups}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Group name" variant="outlined" />}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handleJoinClik}>
                    Join
                </Button>
                <Button variant="contained" color="primary" onClick={handleClose}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
    return (
        <div>
            <Button className="fixedbutton joinbtn " variant="contained" onClick={handleOpen}> Join Group</Button>
            {body}
        </div>
    );
}