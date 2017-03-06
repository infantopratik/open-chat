import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';
import ChannelsSource from '../sources/ChannelsSource';
import MessagesSource from '../sources/MessagesSource';
import _ from 'lodash';

@datasource(ChannelsSource, MessagesSource)
@decorate(alt)
class ChatStore {
	constructor() {
		this.state = {
			user: null,
			messages: null
		}				
	}

	@bind(Actions.messagesReceived)
	recevedMessages(messages){
		_(messages)
			.keys()
			.each((key, index) => {
				messages[key].key = key;
			});

		this.setState({
			messages
		});
	}

	@bind(Actions.channelOpened)
	channelOpened(selectedChannel){
		_(this.state.channels)
			.values()
			.each((channel) => {
				channel.selected = false;
			});

		selectedChannel.selected = true;

		this.setState({
			selectedChannel,
			channels: this.state.channels
		});

		setTimeout(this.getInstance().getMessages, 100);
	}

	@bind(Actions.channelsReceived)
	receivedChannels(channels){
		let selectedChannel;
		_(channels)
			.keys()
			.each((key, index) => {
				channels[key].key = key;
				if(index == 0){
					channels[key].selected = true;
					selectedChannel = channels[key];
				}
			});

		this.setState({
			channels,
			selectedChannel 
		});

		setTimeout(this.getInstance().getMessages, 100);
	}

	@bind(Actions.login)
	login(user){
		this.setState({
			user: user 
		});
	}
}

export default alt.createStore(ChatStore);