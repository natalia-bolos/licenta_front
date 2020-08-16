import React from "react";
import { GroupList } from "../groups/GroupList";
import { USER_NAME } from '../constants';
import { getPostsOfGroup, getMembersOfGroup } from '../util/ApiUtils';
import {GroupData} from "../groups/GroupData";
import {GroupMembers} from "../groups/GroupMembers";

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGroupName: "",
            posts:[],
            members:[]
          };

    }

    setSelectedGroup(selectedGroup,selectedGroupName){
        Promise.all([
            getPostsOfGroup(selectedGroup),
            getMembersOfGroup(selectedGroup)
        ]).then(([retreivedPosts,retreivedMembers])=>{
            this.setState({selectedGroupName:selectedGroupName,posts:retreivedPosts,members:retreivedMembers});
        })
        
       
        
       

    }
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <h1>Hello, {localStorage.getItem(USER_NAME)}</h1>
                    <div className="col s2 m2">
                        <GroupList  onGroupClicked={this.setSelectedGroup.bind(this)}/>
                    </div>
                    <div className="col s2 m2">
                        <GroupData groupName={this.state.selectedGroupName} posts={this.state.posts}/>
                    </div>
                    <div className="col s2 m2">
                        <GroupMembers members={this.state.members}/>
                    </div>
                </div>
            </div>)
    }



}