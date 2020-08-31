import React from "react";
import {
    ListItem, ListItemText, List, Divider, Typography
} from '@material-ui/core';
import "./post.css"
import Attachment from "./Attachment";


const PostWithAttachments = ({ postId, username, text, timestamp, attachments }) => {

    const attachmentList = attachments.map(attachment => <Attachment attachment={attachment} />);
    return (
        <React.Fragment key={postId}>
            <ListItem>
                <ListItemText
                    primary={<Typography className="usr"><b>{username}</b></Typography>}
                    secondary={<React.Fragment>
                        <Typography component="p" className="post-text"><b>{text}</b></Typography>
                        <Typography component="p" className="times">{timestamp}</Typography>
                    </React.Fragment>}
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
