import React from "react";
import { GroupList } from "../groups/GroupList";
import { USER_NAME } from '../constants';
import { getPostsOfGroup } from '../util/ApiUtils';
import {GroupData} from "../groups/GroupData";
export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGroup: 2,
            posts:[]
          };

    }

    setSelectedGroup(selectedGroup){
        console.log(selectedGroup);
        getPostsOfGroup(selectedGroup).then(response=>{
            this.setState({posts:response})
        })
    }
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <h1>Hello, {localStorage.getItem(USER_NAME)}</h1>
                    <div className="col s12 m6">
                        <GroupList onGroupClicked={this.setSelectedGroup.bind(this)}/>
                    </div>
                    <div>
                        <GroupData posts={this.state.posts}/>
                    </div>
                </div>
            </div>)
    }



}