import React from "react";
import { GroupList } from "../groups/GroupList";


export class Dashboard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <h1>Hello, {this.props.username}</h1>
            <GroupList/>
        </div>
    }
        
    

}