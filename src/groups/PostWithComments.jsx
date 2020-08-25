import React from "react";
import PostComment from "./PostComment";
import {
    ListItem, ListItemText, List, Divider
} from '@material-ui/core';
import "./post.css" 


const PostWithComments = ({ postId, userId, username, text, timestamp, comments }) => {
    const commentsList = comments.map(comment => <PostComment key={comment.groupPostCommentId} postId={comment.postId} userId={comment.userId} username={comment.username} text={comment.text} timestamp={comment.timestamp} />)

    return (
        <React.Fragment className="post">
            <ListItem>
                <ListItemText
                    primary={<p className="usr"><b>{username}</b></p>}
                    secondary={<div><p className="post-text"><b>{text}</b></p>
                        <p className="times">{timestamp}</p></div>}
                />
            </ListItem>
            <ListItem>
                {<List>{commentsList}</List>}
            </ListItem>
            <Divider />
        </React.Fragment>
    )
};

export default PostWithComments;
