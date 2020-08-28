import React from 'react';
import { Button, TextField, Select, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, FormControl,DialogTitle, Divider } from '@material-ui/core';
import { USER_ID } from '../constants';
import "./creategroup.css"

export default function CreateGroup({ createNewGroup }) {
    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState('public');
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setName('');
        setDescription('');
        setOpen(false);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleGroupNameChange = (event) => {
        setName(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleCreateClick = () => {
        var group = {
            name: name,
            type: type,
            description: description,
            creatorId: localStorage.getItem(USER_ID)
        };
        console.log(group);
        createNewGroup(group);
    }

    const body = (
        <Dialog
            open={open}
            onClose={handleClose}
        >
             <DialogTitle id="form-dialog-title">Create group</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please insert the new group details.
        </DialogContentText>
        <FormControl>
                <TextField id="groupName" label="Group name" value={name} onChange={handleGroupNameChange} />
                <TextField id="description" label="Description" value={description} onChange={handleDescriptionChange} />
              
                    <Select
                        labelId="demo-simple-select-label"
                        id="groupType"
                        value={type}
                        onChange={handleTypeChange}
                    >
                        <MenuItem value={'public'}>Public</MenuItem>
                        <MenuItem value={'private'}>Private</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handleCreateClick}>
                    Create
                </Button>
                <Button variant="contained" color="primary" onClick={handleClose}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );

    return (
        <div>
            <Button className="fixedbutton" variant="contained" onClick={handleOpen}> Create Group</Button>
            {body}
        </div>
    );
}