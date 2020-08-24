import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, TextField, Select, MenuItem } from '@material-ui/core';
import { USER_ID } from '../constants';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 800,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function CreateGroup({createNewGroup}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState('public');
    const [name,setName]=React.useState('');
    const [description,setDescription]=React.useState('');
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleGroupNameChange=(event)=>{
        setName(event.target.value);
    }

    const handleDescriptionChange=(event)=>{
        setDescription(event.target.value)
    }

    const handleCreateClick=()=>{
        var group={
            name:name,
            type:type,
            description:description,
            creatorId:localStorage.getItem(USER_ID)
        } ;
        console.log(group);
        createNewGroup(group);
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h4 id="simple-modal-title">Please insert the new group details.</h4>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="groupName" label="Group name" value={name} onChange={handleGroupNameChange}/>
                <TextField id="description" label="Description" value={description} onChange={handleDescriptionChange}/>
                <Select
                    labelId="demo-simple-select-label"
                    id="groupType"
                    value={type}
                    onChange={handleTypeChange}
                >
                    <MenuItem value={'public'}>Public</MenuItem>
                    <MenuItem value={'private'}>Private</MenuItem>
                </Select>
                <Button variant="contained" color="primary" onClick={handleCreateClick}>
                    Create
                </Button>
            </form>
        </div>
    );

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}> Create Group</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                {body}
            </Modal>
        </div>
    );
}