import React from "react";
import {  USER_NAME } from '../constants';
import PostWithComments from "./PostWithComments";
import GroupComponent from "./GroupComponent";

export class GroupData extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const postList=this.props.posts.map(post=><PostWithComments key={post.postId} userId={post.userId} username={post.username} postId={post.postId} text={post.text} timestamp={post.timestamp} comments={post.comments}/>)
        return (
            <div className="container">
                <div className="row">
                    <h5>{this.props.groupName}</h5>
                   {postList}
                </div>
            </div>)
    }

}