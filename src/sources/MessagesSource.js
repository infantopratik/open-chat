import Actions from '../actions';
import {database} from '../firebase';

let messagesRef = null;

let MessagesSource = {
	getMessages : {
		remote(state){
			if(messagesRef){
				messagesRef.off();
			}

			messagesRef = database.ref('/messages/'+state.selectedChannel.key);

			return new Promise((resolve, reject) => {
				messagesRef.once('value', (dataSnapshot) => {
					var messages = dataSnapshot.val();
					resolve(messages);
				});
			});
		},
	success: Actions.messagesReceived,
	error: Actions.messagesFailed
	}
}

export default MessagesSource;