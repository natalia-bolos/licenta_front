import React from "react";
import { GroupList } from "../groups/GroupList";
import { USER_NAME,USER_ID } from '../constants';
import { getPostsOfGroup, getMembersOfGroup } from '../util/ApiUtils';
import {GroupData} from "../groups/GroupData";
import {GroupMembers} from "../groups/GroupMembers";
import Textimp from '../groups/Textimput';
import { addPostToGroup } from "../util/ApiUtils"

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGroupName: "",
            selectedGroupId: 0,
            posts:[],
            members:[]
          };

    }

    setSelectedGroup(selectedGroup,selectedGroupName){
        Promise.all([
            getPostsOfGroup(selectedGroup),
            getMembersOfGroup(selectedGroup)
        ]).then(([retreivedPosts,retreivedMembers])=>{
            this.setState({selectedGroupName:selectedGroupName,posts:retreivedPosts,members:retreivedMembers,selectedGroupId:selectedGroup});
        })  
    }

    createNewPost(text) {
        var postToAdd={groupId:this.state.selectedGroupId, userId:localStorage.getItem(USER_ID),text:text}
        addPostToGroup(postToAdd).then(response => {
            var posted=this.state.posts;
            posted.push({
                postId:response.groupPostId,
                userId:response.userId,
                username:localStorage.getItem(USER_NAME),
                text:response.text,
                timestamp:response.timestamp,
                comments:[]
            })
            this.setState({posts:posted});
        })
    }

    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <h1>Hello, {localStorage.getItem(USER_NAME)}</h1>
                    <div className="col s2 ">
                        <GroupList  onGroupClicked={this.setSelectedGroup.bind(this)}/>
                    </div>
                    <div className="col s8">
                        <GroupData groupName={this.state.selectedGroupName} posts={this.state.posts}/>
                        <Textimp createNewPost={this.createNewPost.bind(this)}/>

                    </div>
                    <div className="col s2">
                        <GroupMembers members={this.state.members}/>
                    </div>
                </div>
            </div>)
    }



}