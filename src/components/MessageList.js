import React from 'react';
import Message from './Message';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';
import {
	Card,
	List,
	CircularProgress
} from 'material-ui';
import {database} from '../firebase';
import _ from 'lodash';

@connectToStores
export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		messages : {},
		id: 0
	};
  }

  static getStores(){
  	return [ChatStore];
  }

  static getPropsFromStores(){
  	return ChatStore.getState();
  }

  render() {
  	let messageNodes = null;

  	if(!this.props.messagesLoading){
	  	messageNodes = _.values(this.props.messages).map((message)=>{
			return (
				<Message key={message.key} message={message}/>
			);
		});  		
  	} else {
  		messageNodes = <CircularProgress 
  				mode = "indeterminate"
  				style = {{
  					paddingTop: 20,
  					paddingBottom: 20,
  					margin: '0 auto',
  					display: 'block',
  					width: '60px'
  				}}
  			/>
  	}


	return (
		<Card style={{
			flexGrow: 2,
			marginLeft: 30
		}}>
			<List>{messageNodes}</List>			
		</Card>
	);
  }
}

