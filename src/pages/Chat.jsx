import React from 'react';
import { USER_ID } from '../constants';
import { getConversation } from '../util/ApiUtils';
import {
    List,
    ListItem, ListItemText, Divider
} from '@material-ui/core'

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };

    }

    componentDidMount() {
        getConversation({ senderId: this.props.match.params.userId, receiverId: localStorage.getItem(USER_ID) }).then(response => {
            this.setState({ messages: response })
        })
    }

    render() {

        return (
            <div className="container">
                <List>
                    {this.state.messages.map(messageObj => <ListItem><ListItemText
                        primary={messageObj.senderUserName}
                        secondary={<span><p>{messageObj.message.text}</p><p>{messageObj.message.sentTimestamp}</p></span>}
                    /></ListItem>)}
                </List>
            </div>
        )
    }
}