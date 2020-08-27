import React from "react";
import { GroupList } from "../groups/GroupList";
import { USER_NAME, USER_ID } from '../constants';
import { getPostsOfGroup, getMembersOfGroup, getGroupsOfUser, addPostToGroup, createGroup, getAllGroups, joinGroup } from '../util/ApiUtils';
import { GroupData } from "../groups/GroupData";
import { GroupMembers } from "../groups/GroupMembers";
import Textimput from '../groups/Textimput';
import CreateGroup from '../groups/CreateGroup';
import JoinGroup from "../groups/JoinGroup";
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGroupName: "",
            selectedGroupId: 0,
            groups: [],
            posts: [],
            members: [],
            allGroups: []
        };

    }

    componentDidMount() {
        getGroupsOfUser(localStorage.getItem(USER_ID)).then(response => {
            this.setState({ groups: response })
            if (response !== undefined && response.length != 0) {
                this.setSelectedGroup(response[0].groupId, response[0].name);
            }


        })
    }

    setSelectedGroup(selectedGroup, selectedGroupName) {
        Promise.all([
            getPostsOfGroup(selectedGroup),
            getMembersOfGroup(selectedGroup),
            getAllGroups()
        ]).then(([retreivedPosts, retreivedMembers, retreivedGroups]) => {
            this.setState({ selectedGroupName: selectedGroupName, posts: retreivedPosts, members: retreivedMembers, selectedGroupId: selectedGroup, allGroups: retreivedGroups });
        })
    }

    createNewGroup(group) {
        createGroup(group).then(response => {
            var existingGroups = this.state.groups;
            existingGroups.push({
                groupId: response.groupId,
                name: response.name,
                type: response.type,
                description: response.description
            })
            this.setState({ groups: existingGroups });
            console.log("created");
        })
    }

    joinGroup(group) {
        joinGroup({ groupId: group.groupId, userId: group.userId }).then(response => {
            console.log(response);
            var existingGroups = this.state.groups;
            existingGroups.push({
                groupId: group.groupId,
                name: group.name,
                type: group.type,
                description: group.description
            })
            this.setState({ groups: existingGroups });
            console.log("created");
        })
    }

    createNewPost(text) {
        var postToAdd = { groupId: this.state.selectedGroupId, userId: localStorage.getItem(USER_ID), text: text }
        addPostToGroup(postToAdd).then(response => {
            var posted = this.state.posts;
            posted.push({
                postId: response.groupPostId,
                userId: response.userId,
                username: localStorage.getItem(USER_NAME),
                text: response.text,
                timestamp: response.timestamp,
                comments: []
            })
            this.setState({ posts: posted });
        })
    }

    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <h4>Hello, {localStorage.getItem(USER_NAME)}</h4>
                    <div className="col s2 ">
                        <GroupList groups={this.state.groups} onGroupClicked={this.setSelectedGroup.bind(this)} />
                        <CreateGroup createNewGroup={this.createNewGroup.bind(this)} />
                        <JoinGroup joinGroup={this.joinGroup.bind(this)} allGroups={this.state.allGroups} />
                    </div>

                    <div className="col s8">
                        <GroupData groupName={this.state.selectedGroupName} posts={this.state.posts} />
                        <Textimput createNewPost={this.createNewPost.bind(this)} />
                    </div>
                    <div className="col s2">
                        <GroupMembers members={this.state.members} />
                    </div>
                </div>
            </div>)
    }



}