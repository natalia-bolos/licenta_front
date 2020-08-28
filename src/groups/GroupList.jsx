import React, { Component } from "react";
import GroupComponent from '../groups/GroupComponent';
import {
    List
} from '@material-ui/core'
export class GroupList extends Component {
    constructor(props) {
        super(props);
    }




    render() {
        const groupList = this.props.groups.map(group => <GroupComponent onGroupClicked={this.props.onGroupClicked} key={group.groupId} id={group.groupId} name={group.name} type={group.type} description={group.description} />)
        return (
            <div>
                <h6>Your groups</h6>
                <List>
                    {groupList}
                </List>
            </div>
        );
    }

}