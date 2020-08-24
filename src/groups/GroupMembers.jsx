import React from "react";

export class GroupMembers extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const postList=this.props.members.map(member=><div key={member.userId}><p>{member.username}</p><p>{member.userId}</p></div>)
        return (
            <div>
                <h5>Group Memebers</h5>
                   {postList}
            </div>)
    }
}