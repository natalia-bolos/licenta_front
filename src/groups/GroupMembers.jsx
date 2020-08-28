import React from "react";
import {
    List
} from '@material-ui/core'
import MemberComponent from "./MemberComponent";

export class GroupMembers extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const postList = this.props.members.map(member => <MemberComponent seeProfile={this.props.seeProfile} key={member.userId} userId={member.userId} name={member.name} username={member.username} />)
        return (
            <div>
                <h6>Group Memebers</h6>
                <List>
                    {postList}
                </List>
            </div>)
    }
}