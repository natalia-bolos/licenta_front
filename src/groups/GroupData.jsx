import React from "react";
import PostWithComments from "./PostWithComments";
import {
    List,
    Paper
} from '@material-ui/core'
export class GroupData extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const postList = this.props.posts.map(post => <PostWithComments key={post.postId} userId={post.userId} username={post.username} postId={post.postId} text={post.text} timestamp={post.timestamp} comments={post.comments} />)
        return (
            <Paper style={{ maxHeight: 500, overflow: 'auto' }}>
               <h5>{this.props.groupName}</h5>
                <List>
                    {postList}
                </List>
            </Paper>
        )
    }

}