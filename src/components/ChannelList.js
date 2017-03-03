import React from 'react';
import Channel from './Channel';
import {
	Card,
	List
} from 'material-ui';

export default class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		channels : [
			'Roses of the same garden',
			'Dev Hub'
		],
		id: 0
	};
  }

  render() {
  	var channelNodes = this.state.channels.map((channel)=>{
		return (
			<Channel key={this.state.id += 1} channel={channel}/>
		);
	});

	return (
		<Card style={{
			flexGrow: 1
		}}>
			<List>{channelNodes}</List>			
		</Card>
	);
  }
}

