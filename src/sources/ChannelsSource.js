import Actions from '../actions';
import {database} from '../firebase';

let channelsRef = database.ref('/channels');

let ChannelsSource = {
	getChannels : {
		remote(state){
			return new Promise((resolve, reject) => {
				channelsRef.once('value', (dataSnapshot) => {
					var channels = dataSnapshot.val();
					resolve(channels);
				});
			});
		},
	success: Actions.channelsReceived,
	error: Actions.channelsFailed
	}
}

export default ChannelsSource;