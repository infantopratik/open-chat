import React from 'react';
import Message from './Message';
import {
	Card,
	List
} from 'material-ui';
import {database} from '../firebase';
import _ from 'lodash';

export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		messages : {},
		id: 0
	};

	this.messagesRef = database.ref('/messages');

	this.messagesRef.on("child_added", (msg)=> {
		if(this.state.messages[msg.key]){
			return;
		}

		let msgVal = msg.val();
		msgVal.key = msg.key;
		this.state.messages[msgVal.key] = msgVal;
		this.setState({
			messages: this.state.messages 
		});
	});

	this.messagesRef.on('child_removed', (msg)=>{
		var key = msg.key;
		delete this.state.messages[key];
		this.setState({
			messages: this.state.messages 
		});
	});

  }

  render() {
  	var messageNodes = _.values(this.state.messages).map((message)=>{
		return (
			<Message key={this.state.id += 1} message={message.message}/>
			// <div key={this.state.id += 1}>{message}</div>
		);
	});

	return (
		<Card style={{
			flexGrow: 4,
			marginLeft: 30
		}}>
			<List>{messageNodes}</List>			
		</Card>
	);
  }
}

