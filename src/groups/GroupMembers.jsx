import React from "react";
import {
    List
} from '@material-ui/core'
import MemberComponent from "./MemberComponent";

export class GroupMembers extends React.Component {

    render() {
        const membersList = this.props.members.map(member => <MemberComponent handleChatClick={this.props.handleChatClick} updateMembership={this.props.updateMembership} group={this.props.group} isAdminOrCreator={this.props.isAdminOrCreator} seeProfile={this.props.seeProfile} key={member.userId} userId={member.userId} name={member.name} username={member.username} role={member.role} user={member}/>)
        return (
            <div>
                <h6>Group Memebers</h6>
                <List>
                    {membersList}
                </List>
            </div>)
    }
}