import React from "react";
import {  USER_NAME } from '../constants';
import PostWithComments from "./PostWithComments";
import GroupComponent from "./GroupComponent";

export class GroupData extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const postList=this.props.posts.map(post=><PostWithComments key={post.postId} userId={post.userId} postId={post.postId} text={post.text} timestamp={post.timestamp} comments={post.comments}/>)
        return (
            <div className="dashboard container">
                <div className="row">
                    <h1>Hello, {localStorage.getItem(USER_NAME)}</h1>
                   {postList}
                </div>
            </div>)
    }

}