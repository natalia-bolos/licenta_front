import React from "react";
import PostWithAttachments from "./PostWithAttachments";
import {
    List,
    Paper
} from '@material-ui/core'
export class GroupData extends React.Component {

    render() {
        const postList = this.props.posts.map(post => <PostWithAttachments key={post.postId} userId={post.userId} username={post.username} postId={post.postId} text={post.text} timestamp={post.timestamp} comments={post.comments} attachments={post.attachments} />)
        return (
            <div>
                <h6>{this.props.groupName}</h6>
                <Paper style={{ maxHeight: 500, overflow: 'auto' }}>

                    <List>
                        {postList}
                    </List>
                </Paper>
            </div>
        )
    }

}