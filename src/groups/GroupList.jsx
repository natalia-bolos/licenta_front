import React, {Component} from "react";
import { getGroupsOfUser } from '../util/ApiUtils';
import { USER_ID } from '../constants';
import GroupComponent from '../groups/GroupComponent';

export class GroupList extends Component{
    constructor(props){
        super(props);
        this.state={
           groups:[]
          };
    }
    

    componentDidMount() {
        getGroupsOfUser(localStorage.getItem(USER_ID)).then(response=>{
            this.setState({groups:response})
        })
    }

    render(){
        const groupList=this.state.groups.map(group=><GroupComponent onGroupClicked={this.props.onGroupClicked} key={group.groupId} id={group.groupId} name={group.name} type={group.type} description={group.description}/>)
        return(
            <ul>
                {groupList}
            </ul>
        );
    }

}