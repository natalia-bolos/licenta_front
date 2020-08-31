import React from "react";
import {
    ListItem, ListItemText, List, Divider
} from '@material-ui/core';
import "./post.css" 
import Attachment from "./Attachment";


const PostWithAttachments = ({ postId,  username, text, timestamp,  attachments }) => {
   
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
            <List>
                {attachmentList}
            </List>

            <Divider />
        </React.Fragment>
    )
};

export default PostWithAttachments;
