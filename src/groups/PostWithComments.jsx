import React from "react";
import PostComment from "./PostComment";
import {
    ListItem, ListItemText, List, Divider
} from '@material-ui/core';
import "./post.css" 
import Attachment from "./Attachment";


const PostWithComments = ({ postId, userId, username, text, timestamp, comments, attachments }) => {
   
    const commentsList = comments.map(comment => <PostComment key={comment.groupPostCommentId} postId={comment.postId} userId={comment.userId} username={comment.username} text={comment.text} timestamp={comment.timestamp} />)
    const attachmentList=attachments.map(attachment=><Attachment attachment={attachment} />);
    return (
        <React.Fragment key={postId} className="post">
            <ListItem>
                <ListItemText
                    primary={<p className="usr"><b>{username}</b></p>}
                    secondary={<div><p className="post-text"><b>{text}</b></p>
                        <p className="times">{timestamp}</p></div>}
                />
            </ListItem>
            {/* <ListItem>
                {<List>{commentsList}</List>}
            </ListItem> */}
            <List>
                {attachmentList}
            </List>

            <Divider />
        </React.Fragment>
    )
};

export default PostWithComments;
