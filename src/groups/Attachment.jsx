import React from "react";
import {
    ListItem, ListItemText
} from '@material-ui/core';
import { getGroupFile } from '../util/ApiUtils';
const Attachment = ({ attachment }) => {
    const clickAttachment = () => {
        getGroupFile(attachment.attachmentId).then(response => {
            response.blob().then(blob=>{
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = attachment.name;
                a.click();
            }
            );
        });
    }
    return (<ListItem onClick={clickAttachment}>
        <ListItemText key={attachment.attachmentId}
            primary={attachment.name}
            secondary={attachment.type}
        />
    </ListItem >
    )
};


export default Attachment;