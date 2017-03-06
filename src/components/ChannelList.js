import React from 'react';
import Channel from './Channel';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';
import {
	Card,
	List,
	CircularProgress
} from 'material-ui';

@connectToStores
export default class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    ChatStore.getChannels();
  }

  static getStores(){
  	return [ChatStore];
  }

  static getPropsFromStores(){
  	return ChatStore.getState();
  }

  render() {

  	if(!this.props.channels){
  		return (
  			<Card style = {{
  				flexGrow: 1
  			}}>
  				<CircularProgress 
  					mode="indeterminate"
  					style = {{
  						paddingTop: '20px',
  						paddingBotton: '20px',
  						margin: '0 auto',
  						display: 'block',
  						width: '60px'
  					}}
  				/>
  			</Card>
		);
  	}

  	var channelNodes = _(this.props.channels)
  		.keys()
		.map((k)=>{
			let channel = this.props.channels[k];
			return (
				<Channel key={channel.key} channel={channel}/>
			);
		})
		.value();

	return (
		<Card style={{
			flexGrow: 1
		}}>
			<List>{channelNodes}</List>			
		</Card>
	);
  }
}

