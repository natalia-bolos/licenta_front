import React from 'react';
import { USER_ID } from '../constants';
import { getConversation, addMessage } from '../util/ApiUtils';
import {
    List,
    ListItem,
    ListItemText,
    TextField,
    Button,
    Paper
} from '@material-ui/core'
import "./chat.css";

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messageText: ''
        };

    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    sendMessage() {
        console.log(this.state.messageText);
        addMessage({ senderId: localStorage.getItem(USER_ID), receiverId: this.props.match.params.userId, text: this.state.messageText }).then(response => {
            console.log(response);
            var currentMessages = this.state.messages;
            currentMessages.push(response);
            this.setState({ messages: currentMessages, messageText: '' });
        })
    }

    componentDidMount() {
        getConversation({ senderId: localStorage.getItem(USER_ID), receiverId: this.props.match.params.userId }).then(response => {
            this.setState({ messages: response })
        })
    }

    render() {

        return (
            <div className="container chat">
                <Paper style={{ maxHeight: 500, overflow: 'auto' }}>
                    <List>
                        {this.state.messages.map(messageObj => <ListItem><ListItemText
                            primary={messageObj.senderUserName}
                            secondary={<span><p>{messageObj.message.text}</p><p>{messageObj.message.sentTimestamp}</p></span>}
                        /></ListItem>)}
                    </List>
                </Paper>
                <TextField className='inp input-boxes chat-input' id="messageText" placeholder="New message" variant="filled" value={this.state.messageText} onChange={this.handleChange.bind(this)} />
                <Button onClick={this.sendMessage.bind(this)} className='btn'>Send</Button>
            </div>
        )
    }
}