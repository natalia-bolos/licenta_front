import React from "react";
import PostComment from "./PostComment";
import {
    ListItem, ListItemText, List
} from '@material-ui/core'
const PostWithComments = ({ postId, userId, username, text, timestamp, comments }) => {
    const commentsList = comments.map(comment => <PostComment postId={comment.postId} userId={comment.userId} username={comment.username} text={comment.text} timestamp={comment.timestamp} />)

    return (
        <React.Fragment>
            <ListItem>
                <ListItemText
                    primary={<p><b>{username}</b></p>}
                    secondary={<div><p><b>{text}</b></p>
                        <p>{timestamp}</p></div>}
                />
            </ListItem>
            <ListItem>
                {<List>{commentsList}</List>}
            </ListItem>
        </React.Fragment>
    )
};

export default PostWithComments;
