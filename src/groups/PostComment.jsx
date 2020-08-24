import React from "react";
import {
    ListItem, ListItemText
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const PostComment = ({ postId, userId, username, text, timestamp }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }));
    const classes = useStyles();
    return (
        <ListItem className={classes.nested}>
            <ListItemText
                primary={<p><b>{username}</b></p>}
                secondary={<div><p><b>{text}</b></p>
                    <p>{timestamp}</p></div>}
            />
        </ListItem>
    )
};

export default PostComment;