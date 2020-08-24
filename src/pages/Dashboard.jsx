import React from "react";
import { GroupList } from "../groups/GroupList";
import { USER_NAME,USER_ID } from '../constants';
import { getPostsOfGroup, getMembersOfGroup,getGroupsOfUser,addPostToGroup,createGroup } from '../util/ApiUtils';
import {GroupData} from "../groups/GroupData";
import {GroupMembers} from "../groups/GroupMembers";
import Textimput from '../groups/Textimput';
import CreateGroup from '../groups/CreateGroup';
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGroupName: "",
            selectedGroupId: 0,
            groups:[],
            posts:[],
            members:[]
          };

    }

    componentDidMount() {
        getGroupsOfUser(localStorage.getItem(USER_ID)).then(response=>{
            this.setState({groups:response})
            this.setSelectedGroup(response[0].groupId,response[0].name);
        })
    }

    setSelectedGroup(selectedGroup,selectedGroupName){
        Promise.all([
            getPostsOfGroup(selectedGroup),
            getMembersOfGroup(selectedGroup)
        ]).then(([retreivedPosts,retreivedMembers])=>{
            this.setState({selectedGroupName:selectedGroupName,posts:retreivedPosts,members:retreivedMembers,selectedGroupId:selectedGroup});
        })  
    }

    createNewGroup(group){
            createGroup(group).then(response=>{
                var existingGroups=this.state.groups;
                existingGroups.push({
                    response
                })
                this.setState({groups:existingGroups});
                console.log("created");
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
                        <GroupList   groups={this.state.groups} onGroupClicked={this.setSelectedGroup.bind(this)}/>
                        <CreateGroup createNewGroup={this.createNewGroup.bind(this)} />
                    </div>
                   
                    <div className="col s8">
                        <GroupData groupName={this.state.selectedGroupName} posts={this.state.posts}/>
                        <Textimput createNewPost={this.createNewPost.bind(this)}/>
                    </div>
                    <div className="col s2">
                        <GroupMembers members={this.state.members}/>
                    </div>
                </div>
            </div>)
    }



}