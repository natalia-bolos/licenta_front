import React from "react";
import { GroupList } from "../groups/GroupList";
import { USER_NAME, USER_ID } from '../constants';
import { getPostsOfGroup, getMembersOfGroup, getGroupsOfUser, addPostToGroup, createGroup, getAllGroups, joinGroup, addFile, addMembership, updateMembership } from '../util/ApiUtils';
import { GroupData } from "../groups/GroupData";
import { GroupMembers } from "../groups/GroupMembers";
import Textimput from '../groups/Textimput';
import CreateGroup from '../groups/CreateGroup';
import JoinGroup from "../groups/JoinGroup";
import AddMembers from "../groups/AddMembers";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGroupName: "",
            selectedGroupId: 0,
            isAdminOrCreator: false,
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

    isLoggedUserAdminOrCreator(membersOfCurrentGroup) {
        var user = membersOfCurrentGroup.filter(member => {
            return member.userId == localStorage.getItem(USER_ID);
        });
        return user[0].role.name == "ROLE_CREATOR" || user[0].role.name == "ROLE_ADMIN"
    }

    setSelectedGroup(selectedGroup, selectedGroupName) {
        Promise.all([
            getPostsOfGroup(selectedGroup),
            getMembersOfGroup(selectedGroup),
            getAllGroups()
        ]).then(([retreivedPosts, retreivedMembers, retreivedGroups]) => {
            this.setState({ selectedGroupName: selectedGroupName, posts: retreivedPosts, members: retreivedMembers, selectedGroupId: selectedGroup, allGroups: retreivedGroups, isAdminOrCreator: this.isLoggedUserAdminOrCreator(retreivedMembers) });
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

    createNewPost(text, file) {
        var postToAdd = { groupId: this.state.selectedGroupId, userId: localStorage.getItem(USER_ID), text: text }

        addPostToGroup(postToAdd).then(response => {
            var posted = this.state.posts;
            if (file != '') {
                addFile(response.groupPostId, file).then(attachmentResponse => {
                    attachmentResponse.json().then(jasonValue => {
                        console.log(jasonValue)
                        posted.push({
                            postId: response.groupPostId,
                            userId: response.userId,
                            username: localStorage.getItem(USER_NAME),
                            text: response.text,
                            timestamp: response.timestamp,
                            comments: [],
                            attachments: [jasonValue]
                        })
                        this.setState({ posts: posted });
                    })

                })
            }

            else {
                posted.push({
                    postId: response.groupPostId,
                    userId: response.userId,
                    username: localStorage.getItem(USER_NAME),
                    text: response.text,
                    timestamp: response.timestamp,
                    comments: [],
                    attachments: []
                })
                this.setState({ posts: posted });
            }
        })
    }

    addUserToGroup(user, role) {
        addMembership({
            groupId: this.state.selectedGroupId,
            userId: user.userId,
            roleId: role.id
        }).then(() => {
            var currentMembers = this.state.members;
            currentMembers.push(user);
            this.setState({ members: currentMembers });
        })
    }

    updateMembership(membership) {
        console.log(membership);
        updateMembership(membership).then(() => {
            const roles = [
                {
                    roleId: 1,
                    name: "ROLE_USER"
                },
                {
                    roleId: 2,
                    name: "ROLE_ADMIN"
                },
                {
                    roleId: 3,
                    name: "ROLE_CREATOR"
                }
            ]
            var currentMembers = this.state.members;
            currentMembers.forEach(member=>{
                if(member.userId==membership.userId){
                    member.role=roles[membership.roleId-1];
                }
            })
            this.setState({members:currentMembers});
            console.log("updated");
        })
    }

    handleProfileClick(userId) {
        this.props.history.push('/profile/' + userId);
    }

    handleChatClick(userId) {
        this.props.history.push('/chat/' + userId);
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
                        <GroupMembers handleChatClick={this.handleChatClick.bind(this)} updateMembership={this.updateMembership.bind(this)} group={this.state.selectedGroupId} isAdminOrCreator={this.state.isAdminOrCreator} seeProfile={this.handleProfileClick.bind(this)} members={this.state.members} />
                        {this.state.isAdminOrCreator ? <AddMembers addUserToGroup={this.addUserToGroup.bind(this)} /> : <div></div>}
                    </div>
                </div>
            </div>)
    }



}